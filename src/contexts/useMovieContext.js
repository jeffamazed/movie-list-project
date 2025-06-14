import MovieContext from "./MovieContext";
import { useContext } from "react";

const useMovieContext = () => useContext(MovieContext);

export default useMovieContext;
