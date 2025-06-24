import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";

export const Movie = () => {
  const moviesData = useLoaderData(); //to access the API data from the loader prop
  console.log(moviesData);
  return (
    <>
      <ul className="container grid grid-four-cols">
        {moviesData &&
          moviesData.Search.map((curMovie) => {
            return <Card key={curMovie.imdbID} curMovie={curMovie} />;
          })}
      </ul>
    </>
  );
};
