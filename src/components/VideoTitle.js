

const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-[23%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/4">{overview}</p>
      <div className="">
          <button className="bg-white text-black p-2 px-12 text-xl rounded-sm font-semibold hover:bg-opacity-80">
             Play 
            </button>
          <button className="mx-2 bg-gray-500 text-white bg-opacity-50 p-2 px-10 text-lg rounded-sm hover:bg-opacity-40">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;