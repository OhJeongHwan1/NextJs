import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
// 동적 페이지는 메타데이터도 prop 으로 받는다.
export async function generateMetadata(props) {
  const movie = await getMovie(props.params.id);
  // 이러한 구조가 좋지 않다고 생각할 수 있음.
  // 왜내면 api 를 두 번 호출한다고 여길 수 있어.
  // 하지만 next js 에서는 자동으로 캐싱하기 때문에
  // 한 번만의 api 호출을 진행함.
  return {
    title: `${movie.title}`,
  };
}

export default async function MovieDetail(props) {
  const id = props.params.id;

  return (
    <div>
      <Suspense fallback={<h1>영화 정보 로딩 중...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>비디오 로딩 중...</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
