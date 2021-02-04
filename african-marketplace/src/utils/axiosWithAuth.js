import axios from 'axios'

//Uncomment code when auth is setup

export const axiosWithAuth = () => {

    const token = localStorage.getItem('token')
    return axios.create({
        headers: {Authorization: token},
        // Elizabeth API
        // baseURL: "https://african-marketplace-backend.herokuapp.com/",
        //JW API
        baseURL: "https://africanmarket-jk.herokuapp.com/api/"
    })
}
