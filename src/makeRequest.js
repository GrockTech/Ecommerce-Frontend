import axios from "axios";

export const makeRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers:{
        Authorization: "bearer " + process.env.REACT_APP_API_TOKEN, 
    }
})
/// make request hook enable us to use axios without writing process.env.