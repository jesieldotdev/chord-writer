import { useContext, useEffect, useState } from "react";
import { Music, NewTitle, SheetProps } from "../../types";
import changePos from "../../utils/changePositionOfString";
import { v4 as uuidv4 } from "uuid";
import { enqueueSnackbar } from "notistack";
import { fetchMusicsApi, postMusicApi } from "../../api/services";
import Vibrate from "../../utils/vibrate";
import { AiOutlineProfile, AiOutlineSetting } from "react-icons/ai";
import { Context } from "../../global/Context";
import { stringArrayToObjArray } from "../../utils/arrayWithId";

const EditorViewController = () => {
  const notes = stringArrayToObjArray(["C", "D", "E", "F", "G", "A", "B"])
  const intervals = stringArrayToObjArray([
    "m", "M", "#", "b", "sus4", "dim", "5+", "6", "5b", "7", "7M", "9", "9b", "11", "13",
  ])

  const [title, setTitle] = useState<string>("Untitled");
  const [editMode, setEditMode] = useState<boolean>(false);
  const [sheet, setSheet] = useState<SheetProps[]>([]);
  const [verses, setVerses] = useState<any>([]);
  const [showKeyboard, setShowKeyboard] = useState<boolean>(true);
  const { theme } = useContext(Context);
  const [jsonInput, setJsonInput] = useState("");
  const [showJSONForm, setShowJSONForm] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const addChord = (name: string, type: "note" | "interval") => {
    setSheet((prevSheet) => {
      if (name === "/" && prevSheet.length > 0) {
        const lastChord = prevSheet[prevSheet.length - 1];
        
        if (!lastChord.note.includes("/")) {
          const updatedChord = { ...lastChord, note: `${lastChord.note}/` };
          return [...prevSheet.slice(0, -1), updatedChord];
        } else {
          return prevSheet; 
        }
      }
  
      
      if (type === "note") {
        if (prevSheet.length > 0 && prevSheet[prevSheet.length - 1].note.includes("/")) {
          const lastChord = prevSheet[prevSheet.length - 1];
          const [firstNote, _] = lastChord.note.split("/");
          const updatedLastChord = { 
            ...lastChord, 
            note: `${firstNote}/${name}` 
          };
          return [...prevSheet.slice(0, -1), updatedLastChord];
        } else {
          return [...prevSheet, { note: name, intervals: [] }];
        }
      }
  
      
      if (type === "interval" && prevSheet.length > 0) {
        const updatedSheet = [...prevSheet];
        const lastNote = updatedSheet[updatedSheet.length - 1];
        lastNote.intervals.push(name);
        return updatedSheet;
      }
  
      return prevSheet;
    });
  };
  
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

  
  function postMusicJson(postData: any) {
    postData.id = uuidv4(); 

    
    if (!postData.name || !postData.sheets) {
      enqueueSnackbar("O objeto precisa ter um nome e uma lista de sheets válidos.");
      return;
    }

    
    setTitle(postData.name);
    setVerses(postData.sheets);
    enqueueSnackbar("JSON adcionado com sucesso!", { variant: 'success' }); 
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

        <button onClick={() => {
          setShowDropdown(false)
          setShowJSONForm(!showJSONForm)}}  >
          Importar JSON
        </button>,
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



  const handleJsonSave = () => {
    try {
      
      console.log("JSON de entrada:", jsonInput);

      const cleanedJsonInput = jsonInput.replace(/\s+/g, ' ').trim();
      console.log("JSON limpo:", cleanedJsonInput); 

      const parsedData = JSON.parse(cleanedJsonInput);
      postMusicJson(parsedData);
    } catch (error) {
      console.error("Erro ao parsear o JSON:", error);
      enqueueSnackbar("Erro ao parsear o JSON. Verifique o formato.");
    }
  };

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
    options,
    jsonInput,
    handleJsonSave,
    showJSONForm,
    theme,
    setJsonInput,
    showDropdown,
    setShowDropdown
  };
};

export default EditorViewController;
