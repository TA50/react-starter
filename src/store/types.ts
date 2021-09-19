
import { AppError } from "../types/errors";
import {  Store } from "redux";
import { Owner } from "../models";

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
};

export enum CommonActionType {
	ThrowError = "common/THROW_ERROR",
	DismissError = "common/DISMISS_ERROR",
}

export type CommonAction = Action & {
	type: CommonActionType;
	payload: AppError | null;
};


// Data
export enum DataActionType { 
	SetOwner = "data/SET_OWNER",
	ClearOwner="data/CLEAR_OWNER"
}
export type DataState = { 
	owner: Owner | null;
} 
export type DataAction = Action & { 
	type: DataActionType,
	payload: Owner | null;
}