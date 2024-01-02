import { PostDataProps } from "../types";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_LOCAL = import.meta.env.VITE_API_LOCAL_URL;
const API_EXTERNAL = import.meta.env.VITE_API_EXTERNAL_URL;

export function fetchMusicsApi() {
  return fetch(API_EXTERNAL, {
    headers: {
      "x-api-key": API_KEY,
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error("Erro na requisição");
      return response.json();
    })
    .catch((error) => console.log(error));
}

export function deleteMusicApi(musicId: string) {
  return fetch(`${API_EXTERNAL}/music/${musicId}`, {
    method: "DELETE",
    headers: {
      "x-api-key": API_KEY,
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error("Erro na requisição");
      return response.json();
    })
    .catch((error) => console.log(error));
}

export function getMusicById(id: string) {
  return fetch(`${API_EXTERNAL}/music/${id}`, {
    headers: {
      "x-api-key": API_KEY,
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error("Erro na requisição");
      return response.json();
    })
    .catch((error) => console.log(error));
}
export function postMusicApi(postData: PostDataProps) {
  return fetch(`${API_EXTERNAL}/music`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
    body: JSON.stringify(postData),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Erro na requisição");
      return response.json();
    })
    .catch((error) => console.log(error));
}
