import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail(props) {
  const id = props.params.id;

  return (
    <div>
      <h3>영화 상세 정보</h3>
      <Suspense fallback={<h1>영화 정보 로딩 중...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h4>비디오</h4>
      <Suspense fallback={<h1>비디오 로딩 중...</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
