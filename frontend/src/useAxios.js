import axios from 'axios';

export default function useAxios() {
  const myAxios = axios.create({
    baseURL: 'https://backend.withchat.site/',
    headers: {
      Authorization: `Bearer ${
        typeof window !== 'undefined' ? localStorage.getItem('accessToken') : ''
      }`,
    },
  });
  return [myAxios];
}
