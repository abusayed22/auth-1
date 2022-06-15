import * as types from "../type/type";

const initialState = {
        status:false,
        token:'',
        email:'',
        name:'',
}

const authReducer = (state=initialState,action) => {
        switch (action.type) {
                case types.LOGIN:
                        return {
                                ...state,
                                status:true,
                                token:action.payload.token,
                                email:action.payload.email,
                                name:action.payload.name,
                        }
                        break;

                case types.SET_USER:
                        return {
                                ...state,
                                status:true,
                                token:action.payload.token,
                                email:action.payload.email,
                                name:action.payload.name,
                        }
                        break;

                        case types.LOGOUT:
                                return {
                                        ...state,
                                        status:false,
                                        token:'',
                                        email:'',
                                        name:'',
                                }
                                break;
        
                default:
                        return state
                        break;
        }
}
export default authReducer;