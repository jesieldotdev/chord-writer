import React, { useEffect, useRef, useContext } from "react";
import * as S from "./styles";
import { NewTitle, SheetProps, VerseProps } from "../../types";
import { Context } from "../../global/Context";
import EditTitle from "./Components/EditTitle";

interface ChordInputProps {
  chords: SheetProps[];
  verses: VerseProps[];
  editTitleFn: (verse: NewTitle) => any;
  showKeyboard: boolean;
  className?: string;
}

const ChordSheet = ({
  chords,
  verses,
  editTitleFn,
  showKeyboard,
  className,
}: ChordInputProps) => {
  const { theme } = useContext(Context);
  const [editVerseTitle, setEditVerseTitle] = React.useState<string>();
  const [editMode, setEditMode] = React.useState<boolean>(false);

  // Cria uma referência para o contêiner de rolagem
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Função para mover o scroll para o final
  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  };

  // Rola sempre que os versos mudarem
  useEffect(() => {
    scrollToBottom();
  }, [verses]);

  function editVerse(verseId: string) {
    setEditMode(true);
    setEditVerseTitle(verseId);
  }

  return (
    <S.Container
      ref={scrollContainerRef} // Adiciona a referência aqui
      className={` p-2 pb-8 pl-6 ${className} 
        fixed top-16 left-1/2 transform -translate-x-1/2 z-[1000] h-[300px] w-screen overflow-y-scroll
      `}
    >
      {verses && verses.length > 0 ? (
        <S.VerseContainer className="w-full flex flex-col">
          {verses.map((verse) => (
            <React.Fragment key={verse.id}>
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
              <S.Verse theme={theme} className="sheetBlock">
                {verse.chords?.map((inp) => (
                  <S.ChordItem
                    key={inp.note}
                    onClick={() => {
                      editMode ? setEditMode(false) : null;
                    }}
                    theme={theme}
                  >
                    {inp.note}
                    <label>
                      {inp.intervals.map((n, index) => (
                        <React.Fragment key={index}>
                          {index !== 0 && inp.intervals.length > index
                            ? "/"
                            : null}
                          {n}
                        </React.Fragment>
                      ))}
                    </label>
                  </S.ChordItem>
                ))}
              </S.Verse>
            </React.Fragment>
          ))}
        </S.VerseContainer>
      ) : null}
    </S.Container>
  );
};

export default ChordSheet;
