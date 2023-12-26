import * as S from "./styles";
import { SheetProps, VerseProps } from "../../types";
import { useContext } from "react";
import { Context } from "../../global/Context";
import React from "react";
import EditTitle from "./Components/EditTitle";

interface ChordInputProps {
  chords: SheetProps[];
  // intervals: string
  verses: VerseProps[];
  editTitleFn: (verse: NewTitle) => any
}

const ChordSheet = ({ chords, verses, editTitleFn }: ChordInputProps) => {
  const { theme } = useContext(Context);
  const [editVerseTitle, setEditVerseTitle] = React.useState<string>();
  const [editMode, setEditMode] = React.useState<boolean>(false);

  function editVerse(verseId: string) {
    setEditMode(true);
    setEditVerseTitle(verseId);
  }

  return (
    <>
      {verses.length > 0 ? (
        <S.VerseContainer>
          {verses.map((verse) => {
            return (
              <>
                <S.Verse
                  key={verse.id}
                  // onClick={() => setEditMode(false)}
                  theme={theme}
                  className="sheetBlock"
                >
                  {editMode && editVerseTitle === verse.id ? (
                    <EditTitle editTitleFn={editTitleFn} setShow={setEditMode} value={verse} />
                  ) : (
                    <label
                      onClick={() => editVerse(verse.id)}
                      className="title"
                    >
                      {verse.name}
                    </label>
                  )}
                  {verse.chords?.map((inp) => (
                    <S.ChordItem theme={theme}>
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

      {chords.length > 0 ? (
        <S.SheetWrapper>
          {chords?.map((inp) => (
            <S.BlockSheet theme={theme} key={inp.note} className="sheetBlock">
              {inp.note}
              <label>
                {inp.intervals.map((n, index) => {
                  return (
                    <>
                      {index !== 0 && inp.intervals.length > index ? "/" : null}
                      {n}
                    </>
                  );
                })}
              </label>
            </S.BlockSheet>
          ))}
        </S.SheetWrapper>
      ) : (
        <S.Label>Type Chord</S.Label>
      )}
    </>
  );
};

export default ChordSheet;
