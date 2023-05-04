import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
 
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);


  const Googleprovider = new GoogleAuthProvider();
  const GitHubprovider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    return signInWithPopup(auth, Googleprovider)
      
  };

  const handleGithHubLogin = () => {
    return signInWithPopup(auth, GitHubprovider)

  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUser = (name, photoUrl) => {
    setLoading(true);
    return updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    logOut,
    updateUser,
    handleGoogleLogin,
    handleGithHubLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
