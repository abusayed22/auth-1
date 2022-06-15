import * as types from "../type/type";

const initialState = {
        login:true,
        token:'',
        email:'',
        password:'',
        name:''
}

const authReducer = (state=initialState,action) => {
        switch (action.type) {
                case types.LOGIN:
                        return {
                                ...state,
                                login:true,
                                token:action.payload,
                                email:action.payload,
                                name:action.payload
                        }
                        break;
        
                default:
                        return state
                        break;
        }
}
export default authReducer;