import axios from 'axios';
import *as types from '../type/type';

// *********crud action********

const get_data = (data) => {
        return {
                type:types.GET_DATA,
                payload:data
        }
}
export const pre_get_data = () => {
        return (dispatch) => {
                axios.get('tototototktototot')
                .then(res => {
                        dispatch(get_data(res.data.totoer))
                })
        }
}



// **********authentication area ************
const login =(data) => {
        return {
                type:types.LOGIN,
                payload:data
        }
}
export const pre_login = () => {
        return(dispatch) => {
                axios.get('lsdkfjlfjjjjdf/login')
                .then(res => {
                        dispatch(login(res.data))
                })
                .catch(err => console.log(err))
        }
}