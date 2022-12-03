import { commonTypes } from "../constants";
import { initialState } from "./initalStates";

const CommonReducer = (state = initialState, action: any) => {
    if(!action || (action && !action.type)) return state;
    switch(action.type){
        case commonTypes.REQ: {
            return {
                ...state,
                commonLoader: true,
            }
        }
        case commonTypes.SUCCESS: {
            return {
                ...state,
                commonLoader: false,
            }
        }
        case commonTypes.FAILED: {
            return {
                ...state,
                commonLoader: false
            }
        }
        default: {
            return { ...state };
        }
    }
}

export default CommonReducer;