import { CommonState, CommonAction, CommonActionType } from "../../types";
const initialState: CommonState = {
	error: null,
};
const commonReducer = (
	state = initialState,
	action: CommonAction
): CommonState => {
	const newState = { ...state };
	switch (action.type) {
		// Errors
		case CommonActionType.ThrowError:
			newState.error = action.payload;
			return newState;
		case CommonActionType.DismissError:
			newState.error = null;
			return newState;

		default:
			return state;
	}
};

export default commonReducer;
