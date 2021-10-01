import { DataState, DataAction, DataActionType } from "../../types";
const initialState: DataState = {

};
const dataReducer = (
    state = initialState,
    action: DataAction
): DataState => {
    const newState = { ...state };
    switch (action.type) {
        default:
            return state;
    }
};

export default dataReducer;
