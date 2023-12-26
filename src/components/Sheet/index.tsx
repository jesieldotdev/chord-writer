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
}



const ChordSheet = ({ chords, verses }: ChordInputProps) => {
  const { theme } = useContext(Context);
  const [editVerseTitle, setEditVerseTitle] = React.useState<string>();

  function editVerse(verseId: string){
    setEditVerseTitle(verseId)


  }


  return (
    <>
      {verses.length > 0 ? (
        <S.VerseContainer>
          {verses.map((verse) => {
            return (
              <>
                <S.Verse theme={theme} className="sheetBlock">
                  {editVerseTitle !== verse.id ? (
                    <label onClick={()=> setEditVerseTitle(verse.id)} className="title">{verse.name}</label>
                  ) : (
                    <EditTitle value={verse.name} />
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
