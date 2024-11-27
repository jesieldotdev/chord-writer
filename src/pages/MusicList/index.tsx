import OpenViewController from "./viewController";
import * as S from "./styles";
import { FileEarmarkMusicFill, Plus } from "styled-icons/bootstrap";
import { Link } from "react-router-dom";
import SwipeToDelete from "../../components/Swippe";
import React from "react";
import { Context } from "../../global/Context";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DropDownMenu from "../../components/Dropdown";
import { CiSquarePlus } from "react-icons/ci";

export default function MusicList() {
  const {options, loading , data,deleteMusic, } = OpenViewController();
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
        <Link
          style={{
            marginLeft: 'auto'
          }}
          to="/editor"
        >
          <CiSquarePlus
            style={{
              marginRight: 8,
            }}
            size={38}
          />
        </Link>
        <DropDownMenu options={options} />
      </div>

      {loading ? (
        <div>
          {/* <Skeleton circle width={100} height={100} containerClassName="avatar-skeleton" /> */}
          <Skeleton
            baseColor={theme.keyboardBackGround}
            borderRadius={8}
            // highlightColor={theme.backgroundFocus}
            style={{
              marginBottom: 8,
              marginLeft: 16,
              marginRight: 32,
            }}
            count={3}
            containerClassName="flex-1"
            height={56}
          />
        </div>
      ) : null}


      {data.length > 0 && data?.length > 0 ? (
        data?.map((music) => {

          return (
            <SwipeToDelete
              key={music._id}
              functionDelete={deleteMusic}
              music={music}
            >
              <Link to={`/${music._id}`} key={music._id}>
                <S.Item theme={theme}>
                  <S.IconLeft>
                    <FileEarmarkMusicFill size={32} />
                  </S.IconLeft>
                  <div className="content">
                    <label className="title">{music.name}</label>
                    <label className="subtitle">
                      {music?.sheets?.length}{" "}
                      {music?.sheets?.length > 1 ? "versos" : "verso"}
                    </label>
                  </div>
                </S.Item>
              </Link>
            </SwipeToDelete>
          );
        })
      ) : !loading ? (
        <S.EmptyComponent theme={theme}>
          Sem cifras por aqui, clique no icone de + para criar uma.
        </S.EmptyComponent>
      ) : null}


      {data.length > 0 ? (

        <S.EmptyComponent theme={theme}>
          Clique no icone de + para escrever uma cifra.
        </S.EmptyComponent>
      ) : null}
    </S.Container>
  );
}
