import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact, contactData } from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
import { getMoviesData } from "./api/GetAPIData";
import { MovieDetails } from "./components/UI/MovieDetails";
import { getMovieDetails } from "./api/GetMovieDetails";
import { RegistrationForm } from "./pages/Registration";
import { SignUpForm } from "./pages/SignUp";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />, // Error page
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getMoviesData, // Load data from API
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: getMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData, // Action to be performed
        },
        {
          path: "/signin",
          element: <RegistrationForm />,
        },
        {
          path: "/signup",
          element: <SignUpForm />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
