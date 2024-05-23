import Movie from "../../components/movie";
import stlyes from "../../styles/home.module.css";

export const metadata = {
  title: "홈",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  //await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  console.log("실행");
  return json;
}

export default async function HomePage() {
  // async 컴포넌트 여야 함.
  const movies = await getMovies();
  return (
    <div className={stlyes.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
