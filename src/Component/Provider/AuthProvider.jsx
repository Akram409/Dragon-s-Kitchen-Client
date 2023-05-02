import React, { createContext, useState } from 'react';
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged, signInWithPopup, signOut  } from "firebase/auth";
import app from "../../firebase/firebase.config"
import { GoogleAuthProvider,GithubAuthProvider  } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser] = useState(null)
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(true)
    
    const Googleprovider = new GoogleAuthProvider();
    const GitHubprovider = new GithubAuthProvider();

    const handleGoogleLogin = () =>{
        signInWithPopup(auth,Googleprovider)
        .then(result =>{
            const user = result.user
            setUser(user)
            console.log(user)
        })
        .catch(error =>{
            setError(error.message)
            console.log(error)
        })
    }

    const handleGithHubLogin = () =>{
        signInWithPopup(auth,GitHubprovider)
        .then(result =>{
            const user = result.user
            setUser(user)
            console.log(user)
        })
        .catch(error =>{
            setError(error.message)
            console.log(error)
        })
    }
    const createUser = (name,photoUrl,email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const authInfo ={
        user,
        createUser,
        logIn,
        logOut,
        handleGoogleLogin,
        handleGithHubLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;