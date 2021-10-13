import { Reducer } from "react";
import { ModelBase } from "../../core/models/ModelBase";
import { IGenericTableState } from "./types";
export type GenericTableAction= {
    type: "pageCount" | "rowsPerPage" | "displayedData"| "orderBy"|"isAsc/toggle" | "isAsc/set";
    payload?: any;
}
export const createReducer = <T extends ModelBase>() =>{
    const  reducer: Reducer<IGenericTableState<T>, GenericTableAction> = (state: IGenericTableState<T>, action: GenericTableAction):  IGenericTableState<T> =>{
        const newState = { ...state };
        switch (action.type) {
            case ("pageCount"):
                newState.pageCount = action.payload;
                return newState;
            case ("rowsPerPage"):
                newState.rowsPerPage = action.payload;
                return newState;
            case ("displayedData"):
                newState.displayedData = action.payload;
                return newState;
            case ("orderBy"):
                newState.orderBy = action.payload;
                return newState;
            case ("isAsc/toggle"):
                newState.isAsc = !state.isAsc;
                return newState
            case ("isAsc/set"):
                newState.isAsc = true;
                return newState
    
        }
    
        return state;
    }

    return reducer;
}
