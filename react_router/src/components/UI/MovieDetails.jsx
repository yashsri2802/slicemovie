import { NavLink, useLoaderData } from "react-router-dom";
import "../UI/Card.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const MovieDetails = () => {
  const movieData = useLoaderData();

  const {
    Actors,
    Poster,
    Title,
    Runtime,
    Genre,
    Type,
    Year,
    Plot,
    BoxOffice,
    Awards,
    imdbRating,
  } = movieData;

  const totalMinutes = parseInt(Runtime?.replace("min", "")) || 0;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const formattedTime = `${hours}hr ${minutes}min`;

  return (
    <section className="movie-details-wrapper">
      <div className="movie-card">
        <div className="poster-section">
          <img src={Poster} alt={Title} className="poster-image" />
        </div>
        <div className="details-section">
          <h1 className="movie-title">{Title}</h1>
          <p className="movie-plot">{Plot}</p>

          <ul className="movie-info">
            <li>
              <i className="fas fa-film"></i> <strong>Genre:</strong> {Genre}
            </li>
            <li>
              <i className="fas fa-clock"></i> <strong>Duration:</strong>{" "}
              {formattedTime}
            </li>
            <li>
              <i className="fas fa-award"></i> <strong>Awards:</strong> {Awards}
            </li>
            <li>
              <i className="fas fa-star"></i> <strong>IMDb:</strong>{" "}
              {imdbRating}
            </li>
            <li>
              <i className="fas fa-money-bill-wave"></i>{" "}
              <strong>Box Office:</strong> {BoxOffice}
            </li>
            <li>
              <i className="fas fa-calendar-alt"></i> <strong>Year:</strong>{" "}
              {Year}
            </li>
            <li>
              <i className="fas fa-tags"></i> <strong>Type:</strong> {Type}
            </li>
            <li>
              <i className="fas fa-users"></i> <strong>Cast:</strong> {Actors}
            </li>
          </ul>

          <NavLink to="/movie" className="back-btn">
            <i className="fas fa-arrow-left"></i> Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};
