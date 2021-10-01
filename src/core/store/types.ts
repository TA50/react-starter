import { Feedback } from './../services/Feedback/Feedback';

import { AppError } from "../types/errors";
import {  Store } from "redux";


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = {
	common: CommonState;
	data: DataState;
};
export type Action = {
	type: string;
	payload?: any;
};

export type AppStore = Store<RootState, Action>;
// Common

export type CommonState = {
	error: AppError | null;
	feedback:Feedback | null;
};

export enum CommonActionType {
	ThrowError = "common/THROW_ERROR",
	DismissError = "common/DISMISS_ERROR",
	PushFeedback = "common/PUSH_FEEDBACK",
	RemoveFeedback = "common/REMOVE_FEEDBACK"
}

export type CommonAction = Action & {
	type: CommonActionType;
	payload: AppError | Feedback |null;
};


// Data
export enum DataActionType { 
}
export type DataState = { 
} 
export type DataAction = Action & { 
	type: DataActionType,
	// payload: typepfData | null;
}

// Feedback