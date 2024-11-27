import { useEffect, useState } from "react";
import { VerseProps, Music } from "../../types";
import { enqueueSnackbar } from "notistack";
import { deleteMusicApi, fetchMusicsApi } from "../../api/services";
import { AiOutlineProfile, AiOutlineSetting } from "react-icons/ai";

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

  const options = [
    {
      render:

        <a href="/messages" >
          Preferências
        </a>,
      icon: <AiOutlineSetting size={24} />

    },
    {
      render: <a href="/messages" >
        Conta
      </a>
      ,
      icon: <AiOutlineProfile size={24} />

    },
  ].map((item, index) => ({ id: index, ...item }))

  return {
    data,
    deleteMusic,
    loading,
    options
  };
}
