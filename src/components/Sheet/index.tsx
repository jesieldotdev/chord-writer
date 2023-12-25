import * as S from "./styles";
import { SheetProps } from "../../types";

interface ChordInputProps {
  chords: SheetProps[];
  // intervals: string
}

const ChordSheet = ({ chords }: ChordInputProps) => {
  return (
    <>
      {chords.length > 0 ? (
        <S.SheetWrapper>
          {chords?.map((inp) => (
            <S.BlockSheet key={inp.note} className="sheetBlock">
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
