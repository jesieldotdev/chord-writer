import ChordInput from "../components/ChordInput";
import ChordSheet from "../components/ChordSheet";
import * as S from "./styles";
import HomeViewController from "./viewController";

const Home = () => {
  const viewController = HomeViewController();

  console.log(viewController.notes);

  return (
    <S.Container>
      <S.Title>Chord Writter</S.Title>
      <ChordSheet chords={viewController.sheet} />

      <ChordInput
      
        addChord={viewController.addChord}
        removeChord={viewController.removeChord}
        notes={viewController.notes}
        intervals={viewController.intervals}
      />
    </S.Container>
  );
};

export default Home;
