import * as S from "./styles";
import { Context } from "../../global/Context";
import { useContext } from "react";
import {
  Backspace,
  KeyboardHide,
  KeyboardReturn,
} from "@styled-icons/material-rounded";
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
  const { theme } = useContext(Context);
  if (show) {
    return (
      <S.Container theme={theme}>
        <S.IntervalInsert>
          {intervals.map((int) => (
            <S.ButtonSmall

              style={{
                width: "max-content",
              }}
              theme={theme}
              key={int.id}
              onClick={() => addChord(int.name, "interval")}
            >
              {int.name}
            </S.ButtonSmall>
          ))}
          <S.ButtonSmall

            style={{
              width: "max-content",
            }}
            theme={theme}
    
            onClick={() => addChord('/', "note")}
          >
            /

          </S.ButtonSmall>

        </S.IntervalInsert>
        <S.SheetInsert>
          {notes.map((note) => (
            <S.Button key={note.id} theme={theme} onClick={() => addChord(note.name, "note")}>
              {note.name}
            </S.Button>
          ))}
          <S.Button theme={theme}>
            <KeyboardHide
              onClick={() => setShow(!show)}
              // color={theme.text}
              color={theme.text}
              size={24}
            />
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
          <S.Button
            style={
              {
                // marginRight: "auto",
              }
            }
            // className="delete"
            theme={theme}
            onClick={() => newLine()}
          >
            <KeyboardReturn color={theme.text} size={24} />
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
