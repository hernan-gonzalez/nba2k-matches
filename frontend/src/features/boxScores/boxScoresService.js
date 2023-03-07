import axios from "axios"

const API_URL = process.env.REACT_APP_BACKEND_HOST + '/api/boxscore'

//Create new boxScore
const createBoxScore = async (boxScoreData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, boxScoreData, config)

    return response.data
}

//Get BoxScores
const getBoxScores = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

//Get BoxScores
const getBoxScoresPaginated = async (page, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            page: page
        }
    }

    const response = await axios.get(API_URL + "/paginated", config)

    return response.data
}

//Get boxScore
const getBoxScore = async (boxScoreID, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL + boxScoreID, config)

    return response.data
}

//Get Record
const getPlayerRecord = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL + '/record', config)

    return response.data
}



const boxScoresService = {
    createBoxScore,
    getBoxScores,
    getBoxScore,
    getPlayerRecord,
    getBoxScoresPaginated
}

export default boxScoresService;