import * as S from "./styles";
import ChordButton from "../ChordButton";

interface ChordInputProps {
  notes: string[];
  intervals: string[];
  addChord: any;
  removeChord: any;
}

const ChordInput = ({
  notes,
  intervals,
  addChord,
  removeChord,
}: ChordInputProps) => {
  return (
    <>
    <S.SheetInsert gridColls='repeat(4, 1fr)'>
      {notes.map((note) => (
        <S.Button onClick={() => addChord(note)}>{note}</S.Button>
      ))}
   
      <S.Button onClick={() => removeChord()}>🗑️</S.Button>

    </S.SheetInsert>
    <S.IntervalInsert gridColls="repeat(6, 1fr)">
    {intervals.map((int) => (
        <S.ButtonSmall onClick={() => addChord(int)}>{int}</S.ButtonSmall>
      ))}
    </S.IntervalInsert>
    </>
  );
};

export default ChordInput;
