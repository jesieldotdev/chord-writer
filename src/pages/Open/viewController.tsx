import { useEffect, useState } from "react";
import { VerseProps, Music } from "../../types";
import { enqueueSnackbar } from "notistack";
import { deleteMusicApi, fetchMusicsApi } from "../../api/services";

export default function OpenViewController() {
  const [data, setData] = useState<Music[]>([]);

  useEffect(() => {
    fetchMusicsApi().then((data) => setData(data));
  }, []);

  function deleteMusic(music: Music) {
    deleteMusicApi(music).then((res) => {
      console.log(res);
      enqueueSnackbar("sucess");
      fetchMusicsApi().then((data) => setData(data));
    });
  }

  return {
    data,
    deleteMusic,
  };
}
