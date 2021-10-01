import { Feedback } from "../../../services/Feedback/Feedback";
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
export const pushFeedback = (feedback:Feedback) => {
	return {
		type: CommonActionType.PushFeedback,
		payload: feedback,
	};
};
export const removeFeedback = () => {
	return {
		type: CommonActionType.RemoveFeedback,
		payload: null,
	};
};
