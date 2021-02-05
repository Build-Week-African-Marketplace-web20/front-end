import {
    GET_INVENTORY_START, GET_INVENTORY_SUCCESS, GET_INVENTORY_FAILURE, 
    GET_OWNERS_START, GET_OWNERS_SUCCESS, GET_OWNERS_FAILURE,
    GET_OWNERS_INVENTORY_START, GET_OWNERS_INVENTORY_SUCCESS, GET_OWNERS_INVENTORY_FAILURE,
    
    ADD_ITEM_START, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE, EDIT_ITEM_START, EDIT_ITEM_SUCCESS, EDIT_ITEM_FAILURE
    } from '../actions/ownersActions'
import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, 
    LOGOUT,
    CREATE_USER_SUCCESS, CREATE_USER_START, CREATE_USER_FAILURE
    } from '../actions/loginActions'
import { Form } from 'reactstrap'

const initialState = {
    isLoading: false,
    error: "",
    isLoggedIn: false,
    data:{
        owner: {
            inventory: []
            },
        allOwners: [],
        siteInventory: [],
    },
}

export const initialReducer = (state=initialState, action ) => {
    switch(action.type){
        case CREATE_USER_START:
            return{
                ...state,
                isLoading: true
        }
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case CREATE_USER_FAILURE:
                return{
                    ...state,
                isLoading: false,
                error:{...state.error,
                    userFailure: action.payload}
            }
        case LOGIN_START:
            return{
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isLoading: false,
                isLoggedIn: true,
                data:{...state.data,
                    owner: action.payload
                }
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                isLoading: false,
                error:{...state.error,
                    loginFailure: action.payload}
            }
        case LOGOUT:
            return{
                ...state,
                isLoading: true,
                isLoggedIn: false, 
            }
        case GET_OWNERS_START:
            return{
                ...state,
                isLoading: true,
            }
        case GET_OWNERS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data:{...state.data,
                    allOwners: action.payload}
                }
        case GET_OWNERS_FAILURE:
            return{
                ...state,
                isLoading: false,
                error:{...state.error,
                    ownersFailure: action.payload}
            }
        case GET_INVENTORY_START:
            return{
                ...state,
                isLoading: true,
            }
        case GET_INVENTORY_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data:{...state.data,
                    siteInventory: action.payload
                }
            }
        case GET_INVENTORY_FAILURE:
            return{
                ...state,
                isLoading: false,
                error:{...state.error,
                    inventoryFailure: action.payload}
            }
        case GET_OWNERS_INVENTORY_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_OWNERS_INVENTORY_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data: {...state.data,
                    owner: {...state.data.owner,
                        inventory: action.payload
                        }
                    }
                }
        case GET_OWNERS_INVENTORY_FAILURE:
            return{
                ...state,
                isLoading: false,
                error:{...state.error,
                    ownerInventoryFailure: action.payload}
            }
        case ADD_ITEM_START:
            return{
                ...state,
                isLoading: true,
            }
        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data:{...state.data,
                    siteInventory: state.data.siteInventory.concat(action.payload)
                }
            }
        case ADD_ITEM_FAILURE:
            return{
                ...state,
                isLoading: false,
                error:{...state.error,
                    itemFailure: action.payload}
            }
        case EDIT_ITEM_START:
            return{
                ...state,
                isLoading: true,
            }
        case EDIT_ITEM_SUCCESS:
          
            return{
                ...state,
                // isLoading: false,
                // data:{...state.data,

                //     siteInventory: state.data.siteInventory.map(
                //             (item) => {
                //                 console.log(item.id, "===", action.payload.id)
                //                 if(item.id === action.payload.id){
                //             return {
                //                 ...item,
                //                 name:action.payload.name,
                //                 price:action.payload.price,
                //                 category:action.payload.category,
                //                 location:action.payload.location,
                //                 }
                //             }
                //             else{
                //                 return {...item}
                //             }
                //         })
                //     }
                }

        case EDIT_ITEM_FAILURE:
            return{}

        default:
            return state
    
    
        }
}