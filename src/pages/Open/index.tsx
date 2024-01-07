import OpenViewController from "./viewController";
import * as S from "./styles";
import { FileEarmarkMusicFill, Plus } from "styled-icons/bootstrap";
import { Link } from "react-router-dom";
import SwipeToDelete from "../../components/Swippe";
import React from "react";
import { Context } from "../../global/Context";

export default function OpenView() {
  const viewController = OpenViewController();
  const { theme } = React.useContext(Context);
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

      {viewController?.data.length > 0 && viewController?.data?.length > 0 ? (
        viewController?.data?.map((music) => {
          return (
            <SwipeToDelete
              key={music._id}
              functionDelete={viewController.deleteMusic}
              music={music}
            >
              <Link to={`/sheet/${music._id}`} key={music._id}>
                <S.Item theme={theme}>
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
        })
      ) : (
        <S.EmptyComponent theme={theme}>Sem cifras por aqui, clique no icone de + para criar uma.</S.EmptyComponent>
      )}
    </S.Container>
  );
}
