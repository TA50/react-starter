import { DataState, DataAction, DataActionType } from "../../types";
const initialState: DataState = {
    owner: null
};
const dataReducer = (
    state = initialState,
    action: DataAction
): DataState => {
    const newState = { ...state };
    switch (action.type) {

        case DataActionType.SetOwner:
            newState.owner = action.payload;
            return newState;
        case DataActionType.ClearOwner:
            newState.owner = null;
            return newState;

        default:
            return state;
    }
};

export default dataReducer;
