import { useEffect, useState } from "react";
import { VerseProps, Music } from "../../types";
import { enqueueSnackbar } from "notistack";

export default function OpenViewController() {
  const [data, setData] = useState<Music[]>([]);

  function fetchMusics(){
    fetch("http://ec2-18-231-159-123.sa-east-1.compute.amazonaws.com:5000/")
    .then((response) => {
      if (!response.ok) throw new Error("Erro na requisição");
      return response.json();
    })
    .then((data) => setData(data))
    .catch((error) => console.log(error));
  }

  useEffect(() => {
   fetchMusics()
  }, []);

  function deleteMusic(music: Music) {
    fetch(
      `http://ec2-18-231-159-123.sa-east-1.compute.amazonaws.com:5000/music/${music}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        fetchMusics()
        enqueueSnackbar("Deletado com sucesso!");
      })
      .catch((error) => {
        console.error("Error:", error);
        enqueueSnackbar({
          message: error,
          variant: "warning",
        });
      });
  }

  return {
    data,
    deleteMusic,
  };
}
