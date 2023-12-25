import * as S from "./styles";
import { Context } from "../../global/Context";
import { useContext } from "react";

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
  const { theme } = useContext(Context);

  return (
    <S.Container>
      <S.IntervalInsert>
        {intervals.map((int) => (
          <S.ButtonSmall theme={theme} key={int} onClick={() => addChord(int, "interval")}>
            {int}
          </S.ButtonSmall>
        ))}
      </S.IntervalInsert>
      <S.SheetInsert>
        {notes.map((note) => (
          <S.Button theme={theme} onClick={() => addChord(note, "note")}>
            {note}
          </S.Button>
        ))}

        <S.Button theme={theme} onClick={() => removeChord()}>
          🗑️
        </S.Button>
      </S.SheetInsert>
    </S.Container>
  );
};

export default ChordInput;
