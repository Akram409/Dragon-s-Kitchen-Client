import React, { createContext, useState } from 'react';
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged  } from "firebase/auth";
import app from "../../firebase/firebase.config"
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    
    const createUser = (name,photoUrl,email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo ={
        user,
        createUser,
        logIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;