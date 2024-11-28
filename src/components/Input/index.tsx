import * as S from "./styles";
import { Context } from "../../global/Context";
import { useContext, useState } from "react";
import {
  Backspace,
  KeyboardHide,
  KeyboardReturn,
  Minimize,
} from "@styled-icons/material-rounded";
import { ChordInputProps } from "./ChordInputProps";
import { CiMaximize1, CiMinimize1, CiMinimize2 } from "react-icons/ci";

const ChordInput = ({
  notes,
  intervals,
  addChord,
  removeChord,
  show,
  setShow,
  newLine,
  chords,
  showKeyboard
}: ChordInputProps) => {
  const { theme } = useContext(Context);
  const [minimize, setMinimize] = useState<boolean>(false)

  const keyboard_command_style = 'px-3 py-4'

  if (show) {
    return (
      <S.Container theme={theme}>
        {chords && chords.length > 0 ? (
          <S.SheetWrapper theme={theme}>
            {chords?.map((chord) => (
              <S.BlockSheet theme={theme} key={chord.note} className="sheetBlock px-4 py-2">
                {chord.note}
                <label>
                  {chord.intervals.map((n, index) => {
                    return (
                      <>
                        {index !== 0 && chord.intervals.length > index ? "/" : null}
                        {n}

                      </>
                    );
                  })}
                </label>
              </S.BlockSheet>
            ))}
          </S.SheetWrapper>
        ) : showKeyboard ?
          <S.Label>Digite um acorde</S.Label>
          : <S.Label>Toque na tela</S.Label>}
        <S.IntervalInsert 
        
        className={`my-2 flex justify-between gap-2  ${minimize ? 'overflow-x-scroll' : 'flex-wrap' }` }>

          {intervals.map((int) => (
            <S.ButtonSmall

              theme={theme}
              key={int.id}
              onClick={() => addChord(int.name, "interval")}
            >
              {int.name}
            </S.ButtonSmall>
          ))}
          <S.ButtonSmall


            theme={theme}

            onClick={() => addChord('/', "note")}
          >
            /

          </S.ButtonSmall>

        </S.IntervalInsert>

        <S.SheetInsert>
          <div className="flex  justify-between w-full gap-1 mb-2">
            {notes.map((note) => (
              <S.Button

                className="px-4 py-4"
                key={note.id} theme={theme} onClick={() => addChord(note.name, "note")}>
                {note.name}
              </S.Button>
            ))}
          </div>
          <div className="flex justify-between w-full">
            <S.Button
              className={keyboard_command_style}
              theme={theme}>
              <KeyboardHide
                onClick={() => setShow(!show)}
                // color={theme.text}
                color={theme.text}
                size={24}
              />
            </S.Button>
            <S.Button
              className={keyboard_command_style + ' ml-2'}
              theme={theme}
              onClick={() => setMinimize(!minimize)}

            >

              {
                minimize ? <CiMinimize1
                  // color={theme.text}
                  color={theme.text}
                  size={24}
                /> : <CiMaximize1

                  // color={theme.text}
                  color={theme.text}
                  size={24}
                />
              }

            </S.Button>

            <div className="flex w-full gap-2">
              <S.Button
                className={`ml-auto ${keyboard_command_style}`}
                theme={theme}
                onClick={() => removeChord()}
              >
                <Backspace color={theme.text} size={24} />
              </S.Button>

              <S.Button
                className={keyboard_command_style}
                theme={theme}
                onClick={() => newLine()}
              >
                <KeyboardReturn color={theme.text} size={24} />
              </S.Button>
            </div>
          </div>

        </S.SheetInsert>
      </S.Container>
    );
  }
};

export default ChordInput;
