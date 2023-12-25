import * as S from "./styles";
import { Context } from "../../global/Context";
import { useContext } from "react";
import { Backspace, KeyboardReturn } from "@styled-icons/material-rounded";
import { ChordInputProps } from "./ChordInputProps";

const ChordInput = ({
  notes,
  intervals,
  addChord,
  removeChord,
  show,
  setShow,
  newLine,
}: ChordInputProps) => {
  console.log(show);
  const { theme } = useContext(Context);
  if (show) {
    return (
      <S.Container>
        <S.IntervalInsert>
          {intervals.map((int) => (
            <S.ButtonSmall
              style={{
                width: "max-content",
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
              marginRight: "auto",
            }}
            // className="delete"
            theme={theme}
            onClick={() => newLine()}
          >
            <KeyboardReturn color={theme.text} size={24} />
          </S.Button>
          <S.Button
            style={{
              marginLeft: "auto",
            }}
            // className="delete"
            theme={theme}
            onClick={() => removeChord()}
          >
            <Backspace color={theme.text} size={24} />
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
