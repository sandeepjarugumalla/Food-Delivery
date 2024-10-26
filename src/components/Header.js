import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO} from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector(store=> store.gpt.showGptSearch);
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
  };
  useEffect(()=>{
   const unsubsribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          const{ uid, email, displayName , photoURL} = user;
          dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
          navigate("/browse");
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
        }
      });
      //Unsubscribe when component unmounts
        return ()=>unsubsribe();
   },[]);
   const handleGptSearchClick = ()=>{
      //Toggle GPT Search 
      dispatch(toggleGPTSearchView());
   }
   const handleLanguageChange=(e)=>{
      dispatch(changeLanguage(e.target.value));
   }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img  className="w-44" src={LOGO} alt="logo"/>
   {user && (<div className="flex p-2">
          { showGptSearch && (<select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
            {
              SUPPORTED_LANGUAGES.map(lang =>  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
            }
             
          </select>)}
        <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-sm" onClick={handleGptSearchClick}
        >{ showGptSearch ? "Home Page": "GPT Search"}</button>
         <img className="w-12 h-13 p-2 " alt="usericon" src={user?.photoURL}/>
        <button onClick={handleSignOut} className="font-bold text-white">(SignOut)</button>
    </div>)}
    </div>

  )
}

export default Header;