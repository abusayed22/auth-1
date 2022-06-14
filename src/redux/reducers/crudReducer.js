import * as types from "../type/type";


const initialState = {
        products:[],
        product:{}
}
const crudReducer = (state=initialState,action) => {
        switch (action.type) {
                case types.GET_DATA:
                        return{
                                ...state,
                                users:action.payload
                        }
                        break;
        
                default:
                        return state
                        break;
        }
}
export default crudReducer;