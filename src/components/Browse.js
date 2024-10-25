import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";



const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
  return (
    <div className="w-screen  no-scrollbar overflow-x-scroll">
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/*
        Main Container
          - VideoBackground
          - VideoTitle
        SecondaryConatiner
          - MovieList * n
          - Cards * n  

       */}
    </div>
  )
}

export default Browse;