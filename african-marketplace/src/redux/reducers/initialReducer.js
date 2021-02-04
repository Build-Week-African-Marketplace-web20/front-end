import {
    GET_INVENTORY_START, GET_INVENTORY_SUCCESS, GET_INVENTORY_FAILURE, 
    GET_OWNERS_START, GET_OWNERS_SUCCESS, GET_OWNERS_FAILURE,
    GET_OWNERS_INVENTORY_START, GET_OWNERS_INVENTORY_SUCCESS, GET_OWNERS_INVENTORY_FAILURE,
    GET_ITEMS_START, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE, 
    ADD_ITEM_START, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE
    } from '../actions/ownersActions'
import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, 
    LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    CREATE_USER_SUCCESS, CREATE_USER_START, CREATE_USER_FAILURE
    } from '../actions/loginActions'

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
                isLoading: false
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
                error:action.payload
            }
        case LOGOUT_START:
            return{
                ...state,
                isLoading: true
            }
        case LOGOUT_SUCCESS:
            return{
                ...state,
                isLoading: false,
                isLoggedIn: false,  
            }
       
        case LOGOUT_FAILURE:
            return{
                ...state,
                isLoading: false,
                isLoggedIn: false,
                error:action.payload
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
                error: action.payload
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
                error:action.payload
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
                error: action.payload
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
                    owner:{...state.data.owner,
                        inventory:[...state.data.owner.inventory,
                            action.payload]
                        }
                    }
            }
        case ADD_ITEM_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state
    
    
        }
}