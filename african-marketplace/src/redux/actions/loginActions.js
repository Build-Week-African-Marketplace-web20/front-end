import axios from 'axios'
import {axiosWithAuth} from '../../utils/axiosWithAuth'


export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const LOGOUT = "LOGOUT"
export const LOGOUT_START = "LOGOUT_START"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const LOGOUT_FAILURE = "LOGOUT_FAILURE"

export const CREATE_USER_START = "CREATE_USER_START"
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS"
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE"



const headers = {
    Accept: "application/json"
}
//create a new user on the database
export const createUser = (form)=>(dispatch) => {
    // console.log("createUser Action fired", form)
    dispatch({type:CREATE_USER_START})
    // axios.post("https://african-marketplace-backend.herokuapp.com/register",  form)
    axiosWithAuth().post("/auth/register", form)
        .then(res=>{
            // console.log(res)
            dispatch({type: CREATE_USER_SUCCESS, payload: res})
        })
        .catch(err=>{
            console.log(err)
            dispatch({type:CREATE_USER_FAILURE, payload: err})
        })
}


//login the user and set token to localstorage
export const getLogin = (form) => (dispatch) => {
    dispatch({type:LOGIN_START})
    // console.log("getLogin Fired: ",form)
    // axios.post( "https://african-marketplace-backend.herokuapp.com/login",  form )
    axiosWithAuth().post("/auth/login", form)
        .then(res=>{
            // console.log("Login Success: ", res)
            localStorage.setItem("token", res.data.token)
            dispatch({type:LOGIN_SUCCESS, payload: res.data})
            
        })
        .catch(err=>{
            console.log("Login Failure: ", err)
            dispatch({type:LOGIN_FAILURE , payload: err})
        })
}
//logout the user and remove token from localstorage
export const getLogout = ()=>(dispatch) =>{
    dispatch({type:LOGOUT})
    localStorage.removeItem("token")
    // axios.get('https://african-marketplace-backend.herokuapp.com/logout')
    //     .then(res=>{
    //         // console.log(res);
    //         localStorage.removeItem("token")
    //         dispatch({type:LOGOUT_SUCCESS, payload: res})
            
    //     })
    //     .catch(err=>{
    //         console.log(err);
    //         localStorage.removeItem("token")
    //         dispatch({type:LOGOUT_FAILURE, payload: err})
            
    //     })
}
