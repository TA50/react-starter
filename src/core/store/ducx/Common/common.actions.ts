import { AppError } from "../../../types/errors";
import { CommonAction, CommonActionType } from "../../types";
// Errors
export const throwError = (error: AppError): CommonAction => {
	return {
		type: CommonActionType.ThrowError,
		payload: error,
	};
};
export const dismissError = () => {
	return {
		type: CommonActionType.DismissError,
		payload: null,
	};
};
