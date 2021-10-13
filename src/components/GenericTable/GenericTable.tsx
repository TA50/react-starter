import * as React from "react";
import {genericTableStyles} from "./genericTable.styles";
import { Container, TableRow,TableCell, Grid, Table, TableBody, TableContainer, TableHead, TablePagination, TableSortLabel, Button, ButtonGroup, Box } from "@mui/material";
import { IGenericTableProps } from ".";
import { descendingComparator, stablizeSort, convertDataToCsvFormat, arraysIntersection } from "./helper-functions";
import { CSVLink } from "react-csv";
import { useLocation } from 'react-router';
import { ModelBase } from '../../core/models/ModelBase';
import { createReducer } from "./genericTable.reducer";
import { IGenericTableState } from './types';
import { GenericTableViewModel } from './GenericTableViewModel';

const GenericTable = <TItem extends ModelBase,>(props: React.PropsWithChildren<IGenericTableProps<TItem>>) => {
    // const classes = useStyles();
    
    const initialState:  IGenericTableState<TItem> = {
        isAsc: true,
        pageCount: 0, 
        rowsPerPage: 5, 
        displayedData: [...props.data],
        orderBy: null
    }
    const [state, dispatch] = React.useReducer(createReducer<TItem>(), initialState);
    const location = useLocation();
    
    const vm = new GenericTableViewModel<TItem>(props, state, dispatch);
   
    function buildFilters() {
        if(! props.filters){
            return null;
        }
        return props.filters.map((filter, i) => {
            return(<Box sx={genericTableStyles.filters}>

                <filter.component<TItem>
                    key={i}
                    select={filter.selectFn}
                    array={[...props.data]}
                    getResultFunction={(getResult) => vm.addGetFilterResultFilter(getResult)}
                />
            </Box>)
        })
    }


    const addExportButton = () => {
        if (props.disableExportButton) {
            return null;
        }
        return (<Button variant="contained" color="primary">
            <CSVLink
                filename={location.pathname.split("/")[-1] || "results" + ".csv"}
                style = {{
                    ... genericTableStyles.csvLink as any
                }}
                headers={props.headCells.map(h => h.label)}
                data={convertDataToCsvFormat<TItem>(state.displayedData, props.headCells)}>
                export
            </CSVLink>
        </Button>);
    }
    return (
        <Container disableGutters className={props.classes} sx={genericTableStyles.root}>
           
            <div>
                {buildFilters()}
            </div>

            <Grid container >
                <Grid item xs></Grid>
                <Grid container item xs={6} md={4}  sx={genericTableStyles.filterActions}>
                    <ButtonGroup disableElevation>
                        <Button onClick={() => vm.stablizeFilter()} variant="outlined">Apply Filters</Button>
                        {addExportButton()}
                    </ButtonGroup>
                </Grid>

            </Grid>
            <TableContainer sx={genericTableStyles.table}>
                <Table aria-label="genric table">
                    <TableHead>
                        <TableRow>
                            {props.headCells.map((headCell, i) =>
                                <TableCell key={i} component="th" align={headCell.align || "left"}>
                                    <TableSortLabel
                                        active={state.orderBy === i}
                                        direction={state.isAsc ? "asc" : "desc"}
                                        onClick={() => vm.createSortHandler(i)}
                                    >
                                        {headCell.label}
                                    </TableSortLabel>
                                </TableCell>
                            )
                            }

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {vm.getTableDate()}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={props.data.length}
                    rowsPerPage={state.rowsPerPage}
                    page={state.pageCount}
                    onPageChange={vm.handleChangePageCount}
                    onRowsPerPageChange={vm.handleChangeRowsPerPage}
                />
            </TableContainer>
        </Container>

    );
};

export { GenericTable };