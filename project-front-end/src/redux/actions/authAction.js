import { REGISTER_FAIL, REGISTER_SUCCESS } from "./types"
import axios from 'axios'
export const registerUser = formData => async dispatch => {
    try {
        console.log(JSON.stringify(formData))
        const res = await axios.post('http://localhost:9021/microservices/signup', formData)

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }
        )
    }
    catch (err) {
        dispatch({
            type: REGISTER_FAIL
        })
    }

}