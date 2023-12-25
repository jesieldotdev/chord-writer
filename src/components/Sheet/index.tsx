import * as S from "./styles";
import { SheetProps } from "../../types";
import { useContext } from "react";
import { Context } from "../../global/Context";

interface ChordInputProps {
  chords: SheetProps[];
  // intervals: string
}

const ChordSheet = ({ chords }: ChordInputProps) => {

  const {theme} = useContext(Context)

  return (
    <>
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
