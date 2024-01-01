import OpenViewController from "./viewController";
import * as S from "./styles";
import { FileEarmarkMusicFill, Plus } from "styled-icons/bootstrap";
import { Link } from "react-router-dom";

export default function OpenView() {
  const viewController = OpenViewController();

  return (
    <S.Container>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: 8,
          marginLeft: 8,
          marginTop: 16,
          marginBottom: 8,
          // width: 200
        }}
      >
        <label> Cifras</label>
        <Link to='/'><Plus style={{}} size={32} /></Link>
      </div>
      {viewController.data.map((music) => {
        return (
          <Link to={`/sheet/${music._id}`} key={music._id}>
            <S.Item>
              <S.IconLeft>
                <FileEarmarkMusicFill size={32} />
              </S.IconLeft>
              <div className="content">
                <label className="title">{music.name}</label>
                <label className="subtitle">{music.sheets.length} partes</label>
              </div>
            </S.Item>
          </Link>
        );
      })}
    </S.Container>
  );
}
