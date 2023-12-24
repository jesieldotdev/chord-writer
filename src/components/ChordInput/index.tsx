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
      <S.IntervalInsert gridColls="repeat(6, 1fr)">
        {intervals.map((int) => (
          <S.ButtonSmall onClick={() => addChord(int, "interval")}>
            {int}
          </S.ButtonSmall>
        ))}
      </S.IntervalInsert>
      <S.SheetInsert gridColls="repeat(4, 1fr)">
        {notes.map((note) => (
          <S.Button onClick={() => addChord(note, "note")}>{note}</S.Button>
        ))}

        <S.Button onClick={() => removeChord()}>🗑️</S.Button>
      </S.SheetInsert>
    </>
  );
};

export default ChordInput;
