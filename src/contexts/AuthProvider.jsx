import { auth } from '../firebase/firebase.init'
import { AuthContext } from './AuthContext'
import { useEffect, useState } from 'react'

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // console.log(loading, user)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateUser = updatedData => {
    return updateProfile(auth.currentUser, updatedData)
  }

  const logOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)

      if (currentUser?.email) {
        axios.post(`${import.meta.env.VITE_API_URL}/jwt`,{
          email:currentUser?.email,
        }).then(res=>console.log(res.data))
      }

      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
    updateUser,
  }
  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
}

export default AuthProvider
