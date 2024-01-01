import { useEffect, useState } from "react";
import { NewTitle, SheetProps, VerseProps } from "../../types";
import changePos from "../../utils/changePositionOfString";
import { v4 as uuidv4 } from "uuid";

const HomeViewController = () => {
  const notes = ["C", "D", "E", "F", "G", "A", "B"] as string[];

  const intervals = [
    "m",
    "M",
    "#",
    "b",
    "sus4",
    "dim",
    "5+",
    "6",
    "5b",
    "7",
    "7M",
    "9",
    // "9#",
    "9b",
    "11",
    // "#11",
    "13",
  ];

  const [title, setTitle] = useState<string>("Untitled");
  const [editMode, setEditMode] = useState<boolean>(false);
  const [sheet, setSheet] = useState<SheetProps[]>([]);
  const [verses, setVerses] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const [showKeyboard, setShowKeyboard] = useState<boolean>(false);

  function addChord(inp: string, type: "note" | "interval") {
    if (type === "note") {
      const data = {
        note: inp,
        intervals: [],
      };
      setSheet((prev) => [...prev, data]);
    } else {
      const newArray = [...sheet];
      const third = ["m", "M"];
      const tensions = ["7", "9", "11", "13"];
      const clefs = ["#", "b"];

      // terças
      if (third.includes(inp)) {
        newArray[newArray.length - 1].note = `${
          newArray[newArray.length - 1].note
        }${inp}`;
        setSheet(newArray);
      }

      // tensões
      else if (tensions.includes(inp)) {
        newArray[newArray.length - 1].intervals.push(inp);
        setSheet(newArray);
      }

      // Armaduras # b
      else if (clefs.includes(inp)) {
        newArray[newArray.length - 1].note = `${
          newArray[newArray.length - 1].note
        }${inp}`;

        const string = newArray[newArray.length - 1].note;
        const x = newArray[newArray.length - 1].note.length - 1;
        const y = 1;

        newArray[newArray.length - 1].note = changePos(string, x, y);
        setSheet(newArray);
      } else {
        newArray[newArray.length - 1].intervals.push(inp);
        setSheet(newArray);
      }
    }
  }
  function removeChord() {
    setSheet((prev) => {
      const novoArray = [...prev.slice(0, -1)];
      return novoArray;
    });
  }

  function newLine() {
    if (sheet.length > 0) {
      const data = {
        id: uuidv4(),
        name: "verse",
        chords: [...sheet],
      };
      setVerses((prev) => [...prev, data]);
      setSheet([]);
    }
  }

  function editarNomePorId(id, novoNome) {
    for (let i = 0; i < verses.length; i++) {
      if (verses[i].id === id) {
        verses[i].name = novoNome;
        break; // Termina o loop após encontrar o objeto com o id correspondente
      }
    }
  }

  function editTitle(verse: NewTitle) {
    editarNomePorId(verse.id, verse.newName);
  }

  function postMusic() {
    console.log(title);
    console.log(verses);
    const postData = {
      name: title,
      sheets: verses,
    };

    fetch("http://ec2-18-231-159-123.sa-east-1.compute.amazonaws.com:5000/music", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return {
    notes,
    intervals,
    sheet,
    setSheet,
    addChord,
    removeChord,
    showKeyboard,
    setShowKeyboard,
    newLine,
    verses,
    editTitle,
    title,
    setTitle,
    editMode,
    setEditMode,
    postMusic,
  };
};

export default HomeViewController;
