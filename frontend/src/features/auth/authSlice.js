import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

//Get user from localstorage
let user = JSON.parse(localStorage.getItem('user'))
const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
        return null;
    }
};

const isTokenExpired = (user) => {
    const decodedJwt = parseJwt(user.token);
    return decodedJwt.exp * 1000 < Date.now();

}

const initialState = {
    user: user ? user : null,
    users: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const register = createAsyncThunk('auth/register', async (user, thunkApi) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})

export const login = createAsyncThunk('auth/login', async (user, thunkApi) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})

export const getUsers = createAsyncThunk('auth/users', async (_, thunkApi) => {
    try {
        const token = thunkApi.getState().auth.user.token
        return await authService.getUsers(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})

//Logout user
export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
})


export const getLocalUser = createAsyncThunk('auth/getLocalUser', async () => {
    user = JSON.parse(localStorage.getItem('user'))
})
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.user = null
                state.message = action.payload
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.user = null
                state.message = action.payload
            })
            .addCase(getUsers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.users = action.payload
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.users = []
                state.message = action.payload
            })
            .addCase(getLocalUser.fulfilled, (state, action) => {
                state.user = user && !isTokenExpired(user) ? user : null
            })
    }
})

export const { reset } = authSlice.actions
export default authSlice.reducer