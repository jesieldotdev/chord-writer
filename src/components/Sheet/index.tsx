import * as S from "./styles";
import { SheetProps, VerseProps } from "../../types";
import { useContext } from "react";
import { Context } from "../../global/Context";

interface ChordInputProps {
  chords: SheetProps[];
  // intervals: string
  verses: VerseProps[];
}

const ChordSheet = ({ chords, verses }: ChordInputProps) => {
  const { theme } = useContext(Context);

  console.log(verses);

  return (
    <>
      {verses.length > 0 ? (
        <S.VerseContainer>
          {verses.map((verse) => {
            return (
              <>
                <S.Verse theme={theme}
                     
                      className="sheetBlock">
                  <label className="title">{verse.name}</label>
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
