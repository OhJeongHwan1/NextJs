import { API_URL } from "../app/(home)/page";

async function getMovie(id) {
  console.log(`영화 불러오기: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}`);
  console.log(`영화 끝!!: ${Date.now()}`);
  return await response.json();
}

export default async function MovieInfo({ id }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
