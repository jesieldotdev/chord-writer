import * as S from "./styles";
import { Context } from "../../global/Context";
import { SetStateAction, useContext } from "react";

interface ChordInputProps {
  notes: string[];
  intervals: string[];
  addChord: (inp: string, type: "note" | "interval") => any;
  removeChord: any;
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
}

const ChordInput = ({
  notes,
  intervals,
  addChord,
  removeChord,
  show,
  setShow
}: ChordInputProps) => {
  console.log(show)
  const { theme } = useContext(Context);
  if (show) {
    return (
      <S.Container>
        <S.IntervalInsert>
          {intervals.map((int) => (
            <S.ButtonSmall
            style={{
              width: 'max-content'
            }}
              theme={theme}
              key={int}
              onClick={() => addChord(int, "interval")}
            >
              {int}
            </S.ButtonSmall>
          ))}
          {/* <S.Button
          style={{
            marginLeft: 'auto'
          }}
            className="delete"
            theme={theme}
            onClick={() => removeChord()}
          >
            🗑️
          </S.Button> */}
        </S.IntervalInsert>
        <S.SheetInsert>
          {notes.map((note) => (
            <S.Button theme={theme} onClick={() => addChord(note, "note")}>
              {note}
            </S.Button>
          ))}

          <S.Button
          style={{
            marginLeft: 'auto'
          }}
            className="delete"
            theme={theme}
            onClick={() => removeChord()}
          >
            🗑️
          </S.Button>
          {/* <S.Button
            className="delete"
            theme={theme}
            onClick={() => setShow(false)}
          >
            Hide
          </S.Button> */}
        </S.SheetInsert>
      </S.Container>
    );
  }
};

export default ChordInput;
