import { useState } from "react";
import { SheetProps, VerseProps } from "../types";
import changePos from "../utils/changePositionOfString";

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

  const [sheet, setSheet] = useState<SheetProps[]>([]);
  const [verses, setVerses] = useState<any>([]);
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
        name: "verse",
        chords: [...sheet],
      };
      setVerses((prev) => [...prev, data]);
      setSheet([]);
    }
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
  };
};

export default HomeViewController;
