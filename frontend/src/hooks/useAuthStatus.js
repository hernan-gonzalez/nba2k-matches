import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getLocalUser } from "../features/auth/authSlice"

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

    const { user } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    useEffect(() => { dispatch(getLocalUser()) }, [dispatch]);

    useEffect(() => {
        if (user) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }

        setCheckingStatus(false)
    }, [user])

    return { loggedIn, checkingStatus }
}

