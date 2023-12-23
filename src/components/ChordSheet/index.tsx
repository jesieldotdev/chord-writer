import * as S from "./styles";
import ChordButton from "../ChordButton";

interface ChordInputProps {
  chords: string[];
  // intervals: string
}

const ChordSheet = ({ chords }: ChordInputProps) => {
  return (
    <>
      {chords.length > 0 ? (
        <S.SheetWrapper>
          {chords?.map((note) => (
            <S.BlockSheet className="sheetBlock">{note}</S.BlockSheet>
          ))}
        </S.SheetWrapper>
      ) : (
        <S.Label>Type Chord</S.Label>
      )}
    </>
  );
};

export default ChordSheet;
