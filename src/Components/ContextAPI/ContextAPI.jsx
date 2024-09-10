import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const ContextSource = createContext()
const ContextAPI = ({ children }) => {
    const [user, setuser] = useState();
    const [loading, setloading] = useState(true);
    const auth = getAuth(app)
    const handelRegister = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleProfile = (photo, name) => {
        setloading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const handlelogIn = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handlelogOut = () => {
        setloading(true)
        return signOut(auth)
    }


    useEffect(() => {
        return onAuthStateChanged(auth, (customer) => {
          setloading(false)
            if (customer) {
                setuser(customer)
            }
        })
    }, [auth, setloading]);
    const value = { handleProfile, handelRegister, handlelogIn, handlelogOut, user, loading }
    return <ContextSource.Provider value={value}>{children}</ContextSource.Provider>
};

export default ContextAPI;