import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_HOST + '/api/users'

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// Logout user
const logout = () => localStorage.removeItem('user')


//Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + '/login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

//Get users
const getUsers = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

const authService = {
    register,
    logout,
    login,
    getUsers
}

export default authService