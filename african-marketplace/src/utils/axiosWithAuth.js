import axios from 'axios'

//Uncomment code when auth is setup

export const axiosWithAuth = () => {

    // const token = localStorage.getItem('token')
    return axios.create({
        baseURL: "https://african-marketplace-backend.herokuapp.com/",
        // headers: {Authorization: token}
    })
}
