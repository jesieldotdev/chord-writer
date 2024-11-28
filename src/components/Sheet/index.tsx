import * as S from "./styles";
import { NewTitle, SheetProps, VerseProps } from "../../types";
import { useContext } from "react";
import { Context } from "../../global/Context";
import React from "react";
import EditTitle from "./Components/EditTitle";

interface ChordInputProps {
  chords: SheetProps[];
  // intervals: string
  verses: VerseProps[];
  editTitleFn: (verse: NewTitle) => any;
  showKeyboard: boolean
  className?: string
}

const ChordSheet = ({ chords, verses, editTitleFn, showKeyboard, className }: ChordInputProps) => {
  const { theme } = useContext(Context);
  const [editVerseTitle, setEditVerseTitle] = React.useState<string>();
  const [editMode, setEditMode] = React.useState<boolean>(false);

  function editVerse(verseId: string) {
    setEditMode(true);
    setEditVerseTitle(verseId);
  }


  return (
    <div className={`p-2 ${className}`}>
      {verses && verses.length > 0 ? (
        <S.VerseContainer>
          {verses.map((verse) => {
            return (
              <>
               {editMode && editVerseTitle === verse.id ? (
                    <EditTitle
                      editTitleFn={editTitleFn}
                      setShow={setEditMode}
                      value={verse}
                    />
                  ) : (
                    <label
                      onClick={() => editVerse(verse.id)}
                      className="verse-title"
                    >
                      {verse.name}
                    </label>
                  )}
                <S.Verse
                  key={verse.id}
                 
                  theme={theme}
                  className="sheetBlock"
                >
                  {/* {editMode && editVerseTitle === verse.id ? (
                    <EditTitle
                      editTitleFn={editTitleFn}
                      setShow={setEditMode}
                      value={verse}
                    />
                  ) : (
                    <label
                      onClick={() => editVerse(verse.id)}
                      className="title"
                    >
                      {verse.name}
                    </label>
                  )} */}
                  {verse.chords?.map((inp) => (
                    <S.ChordItem  
                    onClick={() => {
                      editMode ? setEditMode(false) : null;
                    }} theme={theme}>
                      {inp.note}
                      <label>
                        {inp.intervals.map((n, index) => {
                          return (
                            <>
                              {index !== 0 && inp.intervals.length > index
                                ? "/"
                                : null}
                              {n}
                            </>
                          );
                        })}
                      </label>
                    </S.ChordItem>
                  ))}
                </S.Verse>
              </>
            );
          })}
        </S.VerseContainer>
      ) : null}

      {/* { chords && chords.length > 0 ? (
        <S.SheetWrapper>
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
      : <S.Label>Toque na tela</S.Label>} */}
    </div>
  );
};

export default ChordSheet;
