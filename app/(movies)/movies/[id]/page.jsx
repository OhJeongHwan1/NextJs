export default function MovieDetail(props) {
  console.log(props);
  const id = props.params.id;
  return <h1>영화 {id}</h1>;
}
