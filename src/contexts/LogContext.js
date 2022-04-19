import React from 'react';
import { auth } from '../firebase'

const LogContext = React.createContext()

export const useLog = () => {
    return React.useContext(LogContext)
}

export const LogProvider = ({ children }) => {

    const [user, setUser] = React.useState()
    const [loading, setLoading] = React.useState(true)


    const resetHasla = (email) => {

        return auth.sendPasswordResetEmail(email)
    }
    

    const logIn = (email, password, click) => {

        return auth.signInWithEmailAndPassword(email,password)
        .then((userCredential) => {
            setUser(userCredential.user);
            click()
          })

    }
    
    const signUp = (email, password, click) => {
   
        return auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            setUser(userCredential.user)
            click()
          }).catch((error) => {
            if(error.code === 'auth/email-already-in-use'){
                error.code = 'Taki user już istnieje'
            }
            throw (new Error(error.code));
          });
         
    }

    const logOut = () => {
        return auth.signOut()
    }


    React.useEffect(() => {
        
        const unsubscribe = auth.onAuthStateChanged(uzytkownik => {
            setUser(uzytkownik)
            setLoading(false)
        })

        return unsubscribe
    })



    const value = {
        user,
        signUp,
        logIn,
        logOut,
        resetHasla
    }

    return (
        <LogContext.Provider value={value}>
            {!loading && children}
        </LogContext.Provider>
    );
}
