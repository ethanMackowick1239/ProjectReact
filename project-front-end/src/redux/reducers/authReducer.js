import {REGISTER_SUCCESS} from '../actions/types'
const initialState = {
token : localStorage.getItem('token'),
isAuthenticated : false,
loading : true,
user:null
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

    case REGISTER_SUCCESS:
        return { ...state, ...payload,
        isAuthenticated:false}

    default:
        return state
    }
}