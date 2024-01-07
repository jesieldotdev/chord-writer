import { useEffect, useState } from "react";
import { VerseProps, Music } from "../../types";
import { enqueueSnackbar } from "notistack";
import { deleteMusicApi, fetchMusicsApi } from "../../api/services";

export default function OpenViewController() {
  const [data, setData] = useState<Music[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    fetchMusicsApi()
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
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
    loading,
  };
}
