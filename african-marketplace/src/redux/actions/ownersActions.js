import axios from "axios"

export const GET_OWNERS_START = "GET_OWNERS_START"
export const GET_OWNERS_SUCCESS = "GET_OWNERS_SUCCESS"
export const GET_OWNERS_FAILURE = "GET_OWNERS_FAILURE"

const headers = {
    Accept: "application/json",
    // Authorization: token
}
export const getOwners = () => (dispatch) => {
    dispatchEvent({type:GET_OWNERS_START})
    axios
        .get("", { headers:headers } )
        .then(res=>{
            console.log("G.O. - Success - : ",res)
            dispatch({type:GET_OWNERS_SUCCESS, payload: res})
        })
        .catch(err => {
            console.log("G.O. - Failure - : ",err)
            dispatch({type: GET_OWNERS_FAILURE, payload: err})
        })
}