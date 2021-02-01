import {GET_OWNERS_START, GET_OWNERS_SUCCESS, GET_OWNERS_FAILURE} from '../actions/ownersActions'
import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, 
    CREATE_USER_SUCCESS, CREATE_USER_START, CREATE_USER_FAILURE} from '../actions/loginActions'

const initialState = {
    isLoading: false,
    error: "",
    isLoggedIn: false,
    data:{},
}

export const initialReducer = (state=initialState, action ) => {
    switch(action.type){
        case GET_OWNERS_START:
            return{...state,
                isLoading: true,
            }
        case GET_OWNERS_SUCCESS:
            return{...state,
                isLoading: false,
                data:{...state.data,
                    stores: action.payload
                }
            }
        case GET_OWNERS_FAILURE:
            return{...state,
                isLoading: false,
                error:action.payload
            }
        case LOGIN_START:
            return{...state,
                isLoading: true
            }
        case LOGIN_SUCCESS:
            return{...state,
                isLoading: false,
                isLoggedIn: true,
                data:{...state.data,
                    ownerToken: action.payload
                }
            }
        case LOGIN_FAILURE:
            return{...state,
                isLoading: false,
                error:action.payload
            }
        case CREATE_USER_START:
            return{...state,
            isLoading: true}
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case CREATE_USER_FAILURE:
                return{...state,
                isLoading: false,}
        default:
            return state
    
    
        }
}