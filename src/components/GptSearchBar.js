import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector(store=>store.config.lang);
  return (
    <div className=' pt-[4%] flex justify-center'>
        <form className='w-1/2 bg-black opacity-90 grid grid-cols-12 '>
            <input type='text' className='p-4 m-2 col-span-9' placeholder={lang[langKey].gptSearchPlaceHolder}/>
            <button className=' col-span-3 m-2 py-2 px-4 bg-red-700 text-white rounded-lg'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar