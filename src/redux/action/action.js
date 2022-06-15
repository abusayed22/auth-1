import axios from 'axios';
import *as types from '../type/type';

// *********crud action********

const get_data = (data) => {
        return {
                type:types.GET_DATA,
                payload:data
        }
}
export const pre_get_data = (token) => {
        return (dispatch) => {

                axios.interceptors.request.use(config => {
                        config.headers.Authorization = token ? `Bearer ${token}` : ''
                        return config
                    });
                axios.get('/api/products')
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
export const pre_login = (user) => {
        return(dispatch) => {
                axios.post('/api/login',user)
                .then(res => {
                        if(res.data.status === 200){
                                dispatch(login(res.data))
                                localStorage.setItem('user',JSON.stringify(res.data))
                        }
                        
                })
                .catch(err => console.log(err))
        }
}

export const set_user = (user) => {
        return{
                type: types.SET_USER,
                payload: user
        }
}


const logout = () => {
        return{
                type: types.LOGOUT
        }
}

export const pre_logout = (token) => {
        return dispatch => {
                axios.interceptors.request.use(config => {
                        config.headers.Authorization = token ? `Bearer ${token}` : ''
                        return config
                    });

                    axios.post('/api/logout').then(res => {
                        if(res.data.status === 200){
                                dispatch(logout())
                                localStorage.removeItem('uesr')
                        }
                    })
            
        }
}


const add_product = () => {
        return {
                type: types.ADD_DATA
        }
}

export const pre_add_product = (token,product) => {

        return dispatch => {
                axios.interceptors.request.use(config => {
                        config.headers.Authorization = token ? `Bearer ${token}` : ''
                        return config
                    });

                    axios.post('/api/products',product).then(res => {
                        if(res.data.status === 200){
                                dispatch(add_product())
                        }
                        if(res.data.status === 422){
                                alert('Some filed is not fill');
                        }
                    })
                    .catch(err => console.log(err))
        }
}