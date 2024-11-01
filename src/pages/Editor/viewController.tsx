import { useEffect, useState } from "react";
import { Music, NewTitle, SheetProps } from "../../types";
import changePos from "../../utils/changePositionOfString";
import { v4 as uuidv4 } from "uuid";
import { enqueueSnackbar } from "notistack";
import { fetchMusicsApi, postMusicApi } from "../../api/services";
import Vibrate from "../../utils/vibrate";
import { AiOutlineProfile, AiOutlineSetting } from "react-icons/ai";

const EditorViewController = () => {
  const notes = ["C", "D", "E", "F", "G", "A", "B"] as string[];
  const intervals = [
    "m", "M", "#", "b", "sus4", "dim", "5+", "6", "5b", "7", "7M", "9", "9b", "11", "13",
  ];

  const [title, setTitle] = useState<string>("Untitled");
  const [editMode, setEditMode] = useState<boolean>(false);
  const [sheet, setSheet] = useState<SheetProps[]>([]);
  const [verses, setVerses] = useState<any>([]);
  const [showKeyboard, setShowKeyboard] = useState<boolean>(true);

  function addChord(inp: string, type: "note" | "interval") {
    Vibrate();
    if (type === "note") {
      const data = { note: inp, intervals: [] };
      setSheet((prev) => [...prev, data]);
    } else {
      const newArray = [...sheet];
      const third = ["m", "M"];
      const tensions = ["7", "9", "11", "13"];
      const clefs = ["#", "b"];

      if (third.includes(inp)) {
        newArray[newArray.length - 1].note = `${newArray[newArray.length - 1].note}${inp}`;
        setSheet(newArray);
      } else if (tensions.includes(inp)) {
        newArray[newArray.length - 1].intervals.push(inp);
        setSheet(newArray);
      } else if (clefs.includes(inp)) {
        newArray[newArray.length - 1].note = `${newArray[newArray.length - 1].note}${inp}`;
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
    setSheet((prev) => prev.slice(0, -1));
  }

  function newLine() {
    if (sheet.length > 0) {
      const data = { id: uuidv4(), name: "verse", chords: [...sheet] };
      setVerses((prev) => [...prev, data]);
      setSheet([]);
    }
  }

  function editarNomePorId(id: string, novoNome: string) {
    for (let i = 0; i < verses.length; i++) {
      if (verses[i].id === id) {
        verses[i].name = novoNome;
        break;
      }
    }
  }

  function editTitle(verse: NewTitle) {
    editarNomePorId(verse.id, verse.newName);
  }

// EditorViewController.js
function postMusicJson(postData: any) {
  postData.id = uuidv4(); // Adiciona uma chave única

  // Validação do objeto antes de adicionar
  if (!postData.name || !postData.sheets) {
    enqueueSnackbar("O objeto precisa ter um nome e uma lista de sheets válidos.");
    return;
  }

  // Atualiza o estado do editor com os dados do JSON
  setTitle(postData.name);
  setVerses(postData.sheets);
  enqueueSnackbar("JSON adcionado com sucesso!", {variant: 'success'}); // Mensagem de sucesso
}



  function postMusic() {
    const postData = {
      name: title,
      sheets: verses,
    };

    return fetchMusicsApi().then((res: Music[]) => {
      let counter = 1;
      let newTitle = title;

      while (res.some((sheet) => sheet.name === newTitle)) {
        newTitle = `${title} ${counter}`;
        counter += 1;
      }

      postData.name = newTitle;

      postMusicApi(postData)
        .then((res) => {
          console.log(res);
          enqueueSnackbar("Salvo com sucesso");
        })
        .catch((error) => {
          enqueueSnackbar(`Erro: ${error.message}`);
          console.log(error);
        });
    });
  }

  const options = [
    {
      render:

        <a href="/messages" >
          Importar JSON
        </a>,
      icon: <AiOutlineSetting size={24} />

    },
    {
      render: <a href="/messages" >
        Conta
      </a>
      ,
      icon: <AiOutlineProfile size={24} />

    },
  ].map((item, index) => ({ id: index, ...item }))

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
    postMusicJson,
    options
  };
};

export default EditorViewController;
