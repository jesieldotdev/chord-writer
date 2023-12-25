import * as S from "./styles";
import ChordButton from "../ChordButton";
import { Key, useEffect } from "react";

interface ChordInputProps {
  notes: string[];
  intervals: string[];
  addChord: (inp: string, type: "note" | "interval") => any;
  removeChord: any;
}

const ChordInput = ({
  notes,
  intervals,
  addChord,
  removeChord,
}: ChordInputProps) => {
  // useEffect(() => {
  //   const handleKeyDown = (event: any) => {
  //     if (notes.includes(event.key.toUpperCase())) {
  //       console.log(event.key);
  //       addChord(event.key.toUpperCase(), "note");
  //     }
  //     if (intervals.includes(event.key)) {
  //       console.log(event.key);
  //       addChord(event.key, "interval");
  //     }

  //     if (event.key === "Enter") {
  //       console.log("A tecla Enter foi pressionada!");
  //     }
  //   };

  //   document.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  return (
    <S.Container>
      <S.IntervalInsert>
        {intervals.map((int) => (
          <S.ButtonSmall  onClick={() => addChord(int, "interval")}>
            {int}
          </S.ButtonSmall>
        ))}
      </S.IntervalInsert>
      <S.SheetInsert>
        {notes.map((note) => (
          <S.Button onClick={() => addChord(note, "note")}>
            {note}
          </S.Button>
        ))}

        <S.Button onClick={() => removeChord()}>🗑️</S.Button>
      </S.SheetInsert>
    </S.Container>
  );
};

export default ChordInput;
