import { VerseProps } from "../types";

export function fetchMusicsApi() {
  return fetch(
    "http://ec2-18-231-159-123.sa-east-1.compute.amazonaws.com:5000/"
  )
    .then((response) => {
      if (!response.ok) throw new Error("Erro na requisição");
      return response.json();
    })
    .catch((error) => console.log(error));
}

export function deleteMusicApi(musicId: string) {
  return fetch(
    `http://ec2-18-231-159-123.sa-east-1.compute.amazonaws.com:5000/music/${musicId}`,
    {
      method: "DELETE",
    }
  )
    .then((response) => {
      if (!response.ok) throw new Error("Erro na requisição");
      return response.json();
    })
    .catch((error) => console.log(error));
}

export function postMusicApi(title: string, verses: VerseProps[]) {
  const postData = {
    name: title,
    sheets: verses,
  };

  return fetch(
    "http://ec2-18-231-159-123.sa-east-1.compute.amazonaws.com:5000/music",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    }
  )
    .then((response) => {
      if (!response.ok) throw new Error("Erro na requisição");
      return response.json();
    })
    .catch((error) => console.log(error));
}

export function getMusicById(id: string) {
  return fetch(
    `http://ec2-18-231-159-123.sa-east-1.compute.amazonaws.com:5000/music/${id}`
  )
    .then((response) => {
      if (!response.ok) throw new Error("Erro na requisição");
      return response.json();
    })
    .catch((error) => console.log(error));
}
