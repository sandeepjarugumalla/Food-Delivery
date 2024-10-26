import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"
import { BG_URL } from "../utils/constants"

const GptSearch = () => {
  return (
    <div>
        <div className="fixed -z-10">
          <img src={BG_URL} className="w-screen" alt="bglogo"/>
       </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>  
    </div>
  )
}

export default GptSearch