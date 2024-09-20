import { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import useAxios, { AxiosSource } from '../Hooks/useAxios';

export const ContextSource = createContext()
const ContextAPI = ({ children }) => {
    const [user, setuser] = useState();
    const [loading, setloading] = useState(true);
    const axiosLink = useAxios(AxiosSource)
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
    const logOut = () => {
        setloading(true)
        return signOut(auth)
    }


    useEffect(() => {
        return onAuthStateChanged(auth, (customer) => {
            setuser(customer)
            setloading(false)
            if (customer) {
                axiosLink.post("jwt", { email: customer.email })
                    .then(res => {
                        console.log(res);

                    })
                    .catch(err => {
                        console.log(err);

                    })
            }
            // if (customer) {
            //     
            // }
            // else{
            //     setuser('')
            //     setloading(true)
            // }
        })
    }, [auth, setloading]);
    const value = { handleProfile, handelRegister, handlelogIn, logOut, user, loading }
    return <ContextSource.Provider value={value}>{children}</ContextSource.Provider>
};

export default ContextAPI;