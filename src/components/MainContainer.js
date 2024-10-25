import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    // early return bcz the redux store is null when initial excecution of the store
    if(!movies) return; 
    const mainMovie = movies[0];
   
    const { original_title, overview, id } = mainMovie;
  return (
    <div className="overflow-x-scroll">
        <VideoTitle title={original_title} overview ={overview}/>
        <VideoBackground movieId={id}/>   
    </div>
  )
}

export default MainContainer