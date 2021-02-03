import axios from "axios"

export const GET_OWNERS_START = "GET_OWNERS_START"
export const GET_OWNERS_SUCCESS = "GET_OWNERS_SUCCESS"
export const GET_OWNERS_FAILURE = "GET_OWNERS_FAILURE"

export const GET_ITEMS_START = "GET_ITEMS_START"
export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS"
export const GET_ITEMS_FAILURE = "GET_ITEMS_FAILURE"

export const GET_INVENTORY_START = "GET_INVENTORY_START"
export const GET_INVENTORY_SUCCESS = "GET_INVENTORY_SUCCESS"
export const GET_INVENTORY_FAILURE = "GET_INVENTORY_FAILURE"

export const GET_OWNERS_INVENTORY_START = "GET_OWNERS_INVENTORY_START"
export const GET_OWNERS_INVENTORY_SUCCESS = "GET_OWNERS_INVENTORY_SUCCESS"
export const GET_OWNERS_INVENTORY_FAILURE = "GET_OWNERS_INVENTORY_FAILURE"

export const ADD_ITEM_START = "ADD_ITEM_START"
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS"
export const ADD_ITEM_FAILURE = "ADD_ITEM_FAILURE"

export const EDIT_ITEM_START = "EDIT_ITEM_START"
export const EDIT_ITEM_SUCCESS = "EDIT_ITEM_SUCCESS"
export const EDIT_ITEM_FAILURE = "EDIT_ITEM_FAILURE"

const headers = {
    Accept: "application/json",
    // Authorization: token
}

//Grabs all items available on the website.
export const getInventory = () => (dispatch) => {
    dispatch({type:GET_INVENTORY_START})
    axios.get(`https://african-marketplace-backend.herokuapp.com/items/`, { headers:headers } )
        .then(res=>{
            console.log("G.I. - Success - : ",res)
            dispatch({type:GET_INVENTORY_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log("G.I. - Failure - : ",err)
            dispatch({type: GET_INVENTORY_FAILURE, payload: err})
        })
}

//Grabs all items from one owner
export const getOwnerInventory = (id) => (dispatch) => {
    dispatch({type:GET_INVENTORY_START})
    axios.get(`https://african-marketplace-backend.herokuapp.com/items/${id}`, { headers:headers } )
        .then(res=>{
            console.log("G.I. - Success - : ",res)
            dispatch({type:GET_INVENTORY_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log("G.I. - Failure - : ",err)
            dispatch({type: GET_INVENTORY_FAILURE, payload: err})
        })
}
//Grabs all owners on the site
export const getOwners = () => (dispatch) => {
    dispatch({type: GET_OWNERS_START})
    axios.get('https://african-marketplace-backend.herokuapp.com/users')
        .then(res=>{
            
            dispatch({type:GET_OWNERS_SUCCESS, payload: res.data})
        })
        .catch(err=>{
            console.log(err)
            dispatch({type:GET_OWNERS_FAILURE, payload: err.message})
        })
}
//grabs all the items available on the site
export const getItems = () => (dispatch) => {
    dispatch({type: GET_ITEMS_START})
    axios.get("https://african-marketplace-backend.herokuapp.com/items")
        .then(res=>{
            dispatch({type: GET_ITEMS_SUCCESS, payload: res.data})
        })
        .catch(err=>{
            dispatch({type:GET_ITEMS_FAILURE, payload: err.data})
        })
}
//add an item to the logged in owner
export const addItem = (form) => (dispatch) => {
    dispatch({type: ADD_ITEM_START})
    axios.post("https://african-marketplace-backend.herokuapp.com/items", form)
        .then(res => {
            dispatch({type: ADD_ITEM_SUCCESS, payload: res})
        })
        .catch(err=>{
            dispatch({type: ADD_ITEM_FAILURE, payload: err})
        })
}

export const editItem = (id) => (dispatch) => {
    dispatch({type: EDIT_ITEM_START})
    axios.put(`https://african-marketplace-backend.herokuapp.com/items/${id}`, id)
        .then(res=>{
            console.log(res);
            dispatch({type: EDIT_ITEM_SUCCESS, payload: res.data})
        })
        .catch(err=>{
            console.log(err)
            dispatch({type: EDIT_ITEM_FAILURE, payload: err.message})
        })
}
