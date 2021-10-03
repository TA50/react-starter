import * as React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import useStyles from "./genericTable.styles";
import { Container, Paper, Grid, Table, TableBody, TableContainer, TableHead, TablePagination, TableSortLabel, Button, ButtonGroup } from "@material-ui/core";
import SearchField from './SearchField/SearchField';
import { IGenericTableProps } from ".";
import { descendingComparator, stablizeSort, convertDataToCsvFormat, arraysIntersection } from "./helper-functions";
import { CSVLink } from "react-csv";
import { useLocation } from 'react-router';
import { ModelBase } from '../../core/models/ModelBase';

const GenericTable = <TItem extends ModelBase,>(props: React.PropsWithChildren<IGenericTableProps<TItem>>) => {
    const classes = useStyles();
    const location = useLocation();
    const getResultFunctions: (() => TItem[])[] = [];
    /********** States *********/
    const [pageCount, setPageCount] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [displayedData, setDisplayedData] = React.useState<TItem[]>([...props.data]);
    const [isAsc, setIsAsc] = React.useState<boolean>(true);
    const [orderBy, setOrderBy] = React.useState<number | null>(null);

    // Pagination
    const handleChangePageCount = (event: unknown, newPageCount: number) => {
        setPageCount(newPageCount);
        if (props.handlePageCountChanged) {

            props.handlePageCountChanged(newPageCount)
        }
    };
    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const rowsPerPage = parseInt(event.target.value, 10);
        if (props.handleChangeRowsPerPage) {
            props.handleChangeRowsPerPage(rowsPerPage);
        }
        setRowsPerPage(rowsPerPage);
        setPageCount(0);
    };
    const getSortFunction = (index: number | null) => {
        if (index === null) {
            return null;
        }
        const headCell = props.headCells[index];
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


    const createSortHandler = (index: number) => {
        if (orderBy === index) {
            setIsAsc(!isAsc);
        } else {
            setOrderBy(index);
            setIsAsc(true);
        }
    }

    const addGetFilterResultFilter = (fn: () => TItem[]) => {
        // if (getResultFunctions.length < props.filters.length) {
        getResultFunctions.push(fn);
        // }    
    }
    function buildFilters() {
        return props.filters.map((filter, i) => {
            return(<div className={classes.filters}>

                <filter.component<TItem>
                    key={i}
                    select={filter.selectFn}
                    array={[...props.data]}
                    getResultFunction={(getResult) => addGetFilterResultFilter(getResult)}
                />
            </div>)
        })
    }

    const stablizeFilter = () => {
        const filterResults = getResultFunctions.map(getFilterResult => getFilterResult())
        const result = arraysIntersection<TItem>(filterResults, (a, b) => a._id == b._id);
        console.log(getResultFunctions)
        setDisplayedData([...result]);
    }


    const addExportButton = () => {
        if (props.disableExportButton) {
            return null;
        }
        return (<Button variant="contained" color="primary">
            <CSVLink
                filename={location.pathname.split("/")[-1] || "results" + ".csv"}
                className={classes.csvLink}
                headers={props.headCells.map(h => h.label)}
                data={convertDataToCsvFormat<TItem>(displayedData, props.headCells)}>
                export
            </CSVLink>
        </Button>);
    }
    return (
        <Container disableGutters className={props.classes + "  " + classes.root}>
            {/* {buildSearchField()} */}
            <div>
                {buildFilters()}
            </div>

            <Grid container >
                <Grid item xs></Grid>
                <Grid container item xs={6} md={4} className={classes.filterActions}>
                    <ButtonGroup disableElevation>
                        <Button onClick={() => stablizeFilter()} variant="outlined">Apply Filters</Button>
                        {addExportButton()}
                    </ButtonGroup>
                </Grid>

            </Grid>
            <TableContainer className={classes.table}>
                <Table aria-label="genric table">
                    <TableHead>
                        <TableRow>
                            {props.headCells.map((headCell, i) =>
                                <TableCell key={i} component="th" align={headCell.align || "left"}>
                                    <TableSortLabel
                                        active={orderBy === i}
                                        direction={isAsc ? "asc" : "desc"}
                                        onClick={() => createSortHandler(i)}
                                    >
                                        {headCell.label}
                                    </TableSortLabel>
                                </TableCell>
                            )
                            }

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stablizeSort<TItem>(displayedData, getSortFunction(orderBy), isAsc)
                            .slice(
                                pageCount * rowsPerPage,
                                pageCount * rowsPerPage + rowsPerPage
                            )
                            .map(props.rowTemplate)}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={props.data.length}
                    rowsPerPage={rowsPerPage}
                    page={pageCount}
                    onPageChange={handleChangePageCount}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </Container>

    );
};

export { GenericTable };