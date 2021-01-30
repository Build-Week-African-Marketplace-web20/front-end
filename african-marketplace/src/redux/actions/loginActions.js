import axios from 'axios'


export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const CREATE_USER_START = "CREATE_USER_START"
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS"
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE"



const headers = {
    Accept: "application/json"
}

export const createUser = (form)=>(dispatch) => {
    console.log("createUser Action fired")
    dispatch({type:CREATE_USER_START})
    axios.post("https://african-marketplace-backend.herokuapp.com/users",  form)
        .then(res=>{
            console.log(res)
            localStorage.setItem("token", "PLACEHOLDER")
            dispatch({type: CREATE_USER_SUCCESS, payload: res})
        })
        .catch(err=>{
            console.log(err)
            localStorage.setItem("token", "FAILURE")
            dispatch({type:CREATE_USER_FAILURE, payload: err})
        })
}



export const getLogin = (form) => (dispatch) => {
    dispatch({type:LOGIN_START})
    axios.post( "https://african-marketplace-backend.herokuapp.com/users",  form )
        .then(res=>{
            console.log("Login Success: ", res)
            localStorage.setItem("token", "token")
            dispatch({type:LOGIN_SUCCESS, payload: res})
            
        })
        .catch(err=>{
            console.log("Login Failure: ", err)
            dispatch({type:LOGIN_FAILURE , payload: err.message})
        })
}