import * as types from "../type/type";


const initialState = {
        products:[],
        product:{},
}
const crudReducer = (state=initialState,action) => {
        switch (action.type) {
                case types.GET_DATA:
                        return{
                                ...state,
                                products:action.payload
                        }
                        break;

                case types.ADD_DATA:
                        return{
                                ...state
                        }
                        break;
        
                default:
                        return state
                        break;
        }
}
export default crudReducer;