import OpenViewController from "./viewController";
import * as S from "./styles";
import { FileEarmarkMusicFill, Plus } from "styled-icons/bootstrap";
import { Link } from "react-router-dom";
import SwipeToDelete from "../../components/Swippe";

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
        <Link to="/">
          <Plus style={{}} size={32} />
        </Link>
      </div>

      {/* <SwipeToDelete >Test</SwipeToDelete> */}

      {viewController.data.map((music) => {
        return (
          <SwipeToDelete key={music._id} functionDelete={viewController.deleteMusic} music={music}>
            <Link to={`/sheet/${music._id}`} key={music._id}>
              <S.Item>
                <S.IconLeft>
                  <FileEarmarkMusicFill size={32} />
                </S.IconLeft>
                <div className="content">
                  <label className="title">{music.name}</label>
                  <label className="subtitle">
                    {music.sheets.length}{" "}
                    {music.sheets.length > 1 ? "versos" : "verso"}
                  </label>
                </div>
              </S.Item>
            </Link>
          </SwipeToDelete>
        );
      })}
    </S.Container>
  );
}
