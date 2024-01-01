import OpenViewController from "./viewController";
import * as S from "./styles";
import { FileEarmarkMusicFill } from "styled-icons/bootstrap";
import { Link } from "react-router-dom";

export default function OpenView() {
  const viewController = OpenViewController();

  console.log(viewController.data);

  return (
    <S.Container>
      <p>Sheets</p>
      {viewController.data.map((sheet) => {
        return (
          <Link to={`/sheet/${sheet._id}`} key={sheet._id}>
          <S.Item>
            <S.IconLeft>
              <FileEarmarkMusicFill size={32} />
            </S.IconLeft>
            <div className="content">
            <label className="title">{sheet.name}</label>
            <label className="subtitle">{sheet.chords.length} partes</label>
            </div>
          </S.Item>
          </Link>
        );
      })}
    </S.Container>
  );
}
