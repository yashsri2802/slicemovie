import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    // navigate("/")
    navigate(-1);
  };
  if (error.status === 404) {
    return (
      <section className="error-section">
        <div id="error-text">
          <figure>
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
            />
          </figure>
          <div className="text-center">
            <p className="p-a">
              The page you are looking for could not be found :(
            </p>
          </div>
          <br />
          <button className="btn" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </section>
    );
  }
  console.log(error);
};
