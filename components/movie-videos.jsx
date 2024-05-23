import { API_URL } from "../app/(home)/page";

async function getVideos(id) {
  console.log(`비디오 불러오기: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  throw new Error("그냥 에러");
  //   const response = await fetch(`${API_URL}/${id}/videos`);
  //   return await response.json();
}

export default async function MovieVideos({ id }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
