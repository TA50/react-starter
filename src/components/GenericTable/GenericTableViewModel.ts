import React from "react";
import { ModelBase } from "../../core/models/ModelBase";
import { GenericTableAction } from "./genericTable.reducer";
import { descendingComparator,stablizeSort,  arraysIntersection } from "./helper-functions";
import { IGenericTableProps, IGenericTableState } from "./types";
export class GenericTableViewModel<TItem extends ModelBase>{
    getResultFunctions: (() => TItem[])[] = [];


    constructor(private props: IGenericTableProps<TItem>,
        private currentState: IGenericTableState<TItem>,
        private dispatch: React.Dispatch<GenericTableAction>
    ) { }


    handleChangePageCount = (event: unknown, newPageCount: number) => {
        this.dispatch({
            type: "pageCount",
            payload: newPageCount
        });

        if (this.props.handlePageCountChanged) {

            this.props.handlePageCountChanged(newPageCount)
        }
    };


    handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const rowsPerPage = parseInt(event.target.value, 10);
        if (this.props.handleChangeRowsPerPage) {
            this.props.handleChangeRowsPerPage(rowsPerPage);
        }
        this.dispatch({
            type: "rowsPerPage",
            payload: rowsPerPage
        });
        this.dispatch({
            type: "pageCount",
            payload: 0
        });
    };


    getSortFunction = (index: number | null) => {
        if (index === null) {
            return null;
        }
        const headCell = this.props.headCells[index];
        if (headCell) {
            const sortFunction = headCell.sortFunction;
            if (sortFunction) {
                return sortFunction
            } else {
                return (a: TItem, b: TItem) => descendingComparator<TItem>(a, b, headCell.select);
            }
        }
        return null;
    }


    createSortHandler = (index: number) => {
        if (this.currentState.orderBy === index) {
            this.dispatch({
                type: "isAsc/toggle",
            });
        } else {
            this.dispatch({
                type: "isAsc/set",
            });
            this.dispatch({
                type: "orderBy",
                payload: index
            });

        }
    }

    addGetFilterResultFilter = (fn: () => TItem[]) => {
        // if (getResultFunctions.length < props.filters.length) {
        this.getResultFunctions.push(fn);
        // }    
    }



    stablizeFilter = () => {
        const filterResults = this.getResultFunctions.map(getFilterResult => getFilterResult())
        const result = arraysIntersection<TItem>(filterResults, (a, b) => a.id == b.id);
        this.dispatch({
            type: "displayedData",
            payload: [...result]
        })

    }
    getTableDate() {
        return stablizeSort<TItem>(this.currentState.displayedData,
            this.getSortFunction(this.currentState.orderBy), this.currentState.isAsc)
            .slice(
                this.currentState.pageCount * this.currentState.rowsPerPage,
                this.currentState.pageCount * this.currentState.rowsPerPage
                + this.currentState.rowsPerPage
            )
            .map(this.props.rowTemplate)
    }


}