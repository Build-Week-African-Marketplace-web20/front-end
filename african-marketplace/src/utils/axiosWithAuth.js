import axios from 'axios'

export const axiosWithAuth = () => {

    // const token = localStorage.getItem('token')

    //Elizabeths api
    // [ N ] Working 

    return axios.create({
        baseURL: "https://african-marketplace-backend.herokuapp.com/",
        
    })

    //dumby API
    //[ Y ] Working
//     return axios.create({
//         baseURL: "https://reqres.in",
//         // headers: {Authorization: token}
//     })
}
// headers: {Authorization: token}