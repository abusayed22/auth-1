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
                axios.get('http://127.0.0.1:8000/api/products')
                .then(res => {
                        dispatch(get_data(res.data.products))
                })
                .catch(err => console.log(err))
        }
}



// **********authentication area ************
const login =(data) => {
        return {
                type:types.LOGIN,
                payload:data
        }
}
export const pre_login = (login) => {
        return(dispatch) => {
                axios.get('http://127.0.0.1:8000/api/login/',login)
                .then(res => {
                        dispatch(login(res.data))
                        localStorage.setItem('login',JSON.stringify(res.data))
                })
                .catch(err => console.log(err))
        }
}