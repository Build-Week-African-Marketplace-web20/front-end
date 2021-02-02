import { GET_INVENTORY_START, GET_INVENTORY_FAILURE, GET_INVENTORY_SUCCESS } from '../redux/actions/ownersActions'
import {axiosWithAuth} from './axiosWithAuth'

export const getInventory = (id) => (dispatch)=> {
    dispatch({type: GET_INVENTORY_START})   
    //[ Y ] Working
    return axiosWithAuth().get(`/api/users?/page=${id}`)
        
        .then( res => {
            console.log('getInv: res',res)
            dispatch({type: GET_INVENTORY_SUCCESS, payload: res})
        })
        .catch( err => {
            console.log('getInv: res',err)
            dispatch({type: GET_INVENTORY_FAILURE, payload: err})
        }) 

    //Elizabeth API
    // [ N ] Working
    // return axiosWithAuth().get(`/users/${id}`)
    //     .then( res => {
    //         console.log('getInv: res',res)
    //     })
    //     .catch( err => {
    //         console.log('getInv: res',err)
    //     }) 
    //call for dumbyapi
}