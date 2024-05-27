
import Header from "./Header";
import { useState,useRef } from "react";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser} from '../utils/userSlice';
const Login = () => {
    const [isSignInForm, setIsSignForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const name= useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toggleSignInForm=()=>{
        setIsSignForm(!isSignInForm);
    }
    const handleButtonClick=()=>{
        //Validate the form
        const message = checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message) return;
        if(!isSignInForm){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name.current.value,
                photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(() => {
                // Profile updated!
                const {uid,email,displayName,photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
               navigate("/browse")
              }).catch((error) => {
                // An error occurred
             setErrorMessage(error)
              });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
        });

            //Sign Up Logic
        }
        else{
            //Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/browse");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);


            });
        }
    }
    return (
        <div>
            <Header/>
            <div className="absolute">
            <img alt="logo" src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg"/>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In":"Sign Up"}</h1>
                {!isSignInForm
                && <input ref={name}
                type="text" 
                placeholder="Full Name" 
                className="p-4 my-2 w-full bg-gray-700"/>}
                <input ref={email}
                type="text" 
                placeholder="Email Address"
                className="p-4 my-2 w-full bg-gray-700"/>               
                <input ref={password}
                type="password" 
                placeholder="Password" 
                className="p-4 my-4 w-full bg-gray-700"/>
                <p className="text-red-500 font-bold text-lg py-4">{errorMessage}</p>
                <button 
                className="bg-red-700 p-4 my-6 w-full rounded-lg"
                onClick={handleButtonClick}
                >{isSignInForm ? "Sign In":"Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                {isSignInForm ? "New to Netflix? Sign Up Now":"Already Registered? Sign In Now"}
                </p>
            </form>
        </div>
    );
};
export default Login