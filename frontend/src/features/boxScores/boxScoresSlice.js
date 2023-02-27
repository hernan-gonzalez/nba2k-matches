import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import boxScoresService from './boxScoresService'

const initialState = {
    boxScores: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Create new ticket
export const createBoxScore = createAsyncThunk('boxScores/create', async (boxScoreData, thunkApi) => {
    try {
        const token = thunkApi.getState().auth.user.token
        return await boxScoresService.createBoxScore(boxScoreData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})

//Get user tickets
export const getBoxScores = createAsyncThunk('boxScores/getAll', async (_, thunkApi) => {
    try {
        const token = thunkApi.getState().auth.user.token
        return await boxScoresService.getBoxScores(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})

//Get boxscore
export const getBoxScore = createAsyncThunk('boxScores/get', async (ticketId, thunkApi) => {
    try {
        const token = thunkApi.getState().auth.user.token
        return await boxScoresService.getBoxScore(ticketId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})

//Get player record

export const getPlayerRecord = createAsyncThunk('boxScores/record', async (_, thunkApi) => {
    try {
        const token = thunkApi.getState().auth.user.token
        return await boxScoresService.getPlayerRecord(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})


export const boxScoresSlice = createSlice({
    name: 'boxScores',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createBoxScore.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createBoxScore.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(createBoxScore.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getBoxScores.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getBoxScores.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.boxScores = action.payload
            })
            .addCase(getBoxScores.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getBoxScore.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getBoxScore.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.ticket = action.payload
            })
            .addCase(getBoxScore.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }

})

export const { reset } = boxScoresSlice.actions
export default boxScoresSlice.reducer