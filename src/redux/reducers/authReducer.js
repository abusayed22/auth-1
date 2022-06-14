import * as types from "../type/type";

const initialState = {
        login:false,
        token:'',
        email:'',
        password:'',
        name:''
}

const authReducer = (state=initialState,action) => {
        switch (action.type) {
                case types.LOGIN:
                        return {
                                state,
                                login:true,
                                token:action.payload.token,
                                email:action.payload.email,
                                name:action.payload.name
                        }
                        break;
        
                default:
                        return state
                        break;
        }
}
export default authReducer;