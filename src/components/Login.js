import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import {  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null); 
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick =()=>{
        //Validate the form data
        const errmsg = checkValidData(email.current.value, password.current.value);

        setErrorMessage(errmsg);
        if(errmsg) return;

        //Sign In  Signup Logic
        if(!isSignInForm){
          //Sign Up Logic
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            
            const user = userCredential.user;
            
            updateProfile(user, {
              displayName: name.current.value , photoURL: "https://avatars.githubusercontent.com/u/146085267?v=4",
            }).then(() => {
              
              // Updating store once again
              const{ uid, email, displayName , photoURL} = auth.currentUser;
              dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
               navigate("/browse");
            }).catch((error) => {
              // An error occurred
              setErrorMessage(error.errmsg);
            });
             
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode +"-"+ errorMessage)
          });
        }else{
          // Sign In Logic
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
           navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
             setErrorMessage(errorCode +"-"+ errorMessage);
          });
        
        }

  }
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
}
  return (
    <div>
      <Header/>
      <div className="absolute">
          <img src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg" alt="bglogo"/>
      </div>
      <form onSubmit={(e)=>{e.preventDefault()}} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-65">
        <h1 className="font-bold text-4xl py-4 mb-3">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full  bg-black opacity-40" />)}
        <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-black opacity-40" />
        <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full  bg-black opacity-40" />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}
        >{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login