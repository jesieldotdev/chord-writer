import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import * as S from "./styles";

function App() {
  const notes = ["C", "D", "E", "F", "G", "A", "B"] as string[];
  
  const intervals = ['1', 'b3', '3', '4', 'b5', '5', 'b7', '7', '9', '11', '#11', '13'];

  const [sheet, setSheet] = useState<array>([]);
  const [actualNote, setAtualNote] = useState<string>();

  function addChord(chord) {
    setAtualNote(chord)
    setSheet((prev) => [...prev, chord]);
  }
  function removeChord(chord) {
    setSheet((prev) => {
      const novoArray = [...prev.slice(0, -1)];
      return novoArray;
    });
  }

  return (
    <>
      <p>Chord Writer</p>

      <S.SheetWrapper>
        {sheet.map((note) => (
          <S.BlockSheet className="sheetBlock">{note}</S.BlockSheet>
        ))}
      </S.SheetWrapper>
      <S.BottomInsert>
        {notes.map((note) => (
          <S.Block onClick={() => addChord(note)}>{note}</S.Block>
        ))}
        <S.Block onClick={() => removeChord()}>Rem</S.Block>
      </S.BottomInsert>
      <S.Int>
        {intervals.map((note) => (
          <S.BlockIntervals onClick={() => addChord(note)}>{note}</S.BlockIntervals>
        ))}
       
      </S.Int>
    </>
  );
}

export default App;