import * as React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import useStyles from "./genericTable.styles";
import { Container, Paper, Grid, Table, TableBody, TableContainer, TableHead, TablePagination, TableSortLabel, Button } from "@material-ui/core";
import SearchField from './SearchField/SearchField';
import { IGenericTableProps } from ".";
import { descendingComparator, stablizeSort, convertDataToCsvFormat } from "./helper-functions";
import DateTimeFilter from "./DateTimeFilter/DateTimeFilter";
import { CSVLink } from "react-csv";
import { useLocation } from 'react-router';

const GenericTable = <TItem,>(props: React.PropsWithChildren<IGenericTableProps<TItem>>) => {
    const classes = useStyles();
    const location = useLocation();
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

    const getSearchResult = (result: TItem[]) => {

        setDisplayedData([...result]);
    };
    const createSortHandler = (index: number) => {
        if (orderBy === index) {
            setIsAsc(!isAsc);
        } else {
            setOrderBy(index);
            setIsAsc(true);
        }
    }
    function buildSearchField() {
        const disable = props.disableSearchField;
        if (disable && disable) {
            return null
        } else {
            return <SearchField<TItem>
                array={[...props.data]}
                searchFunction={props.searchFunction || ((item: TItem, text: string) => true)}
                searchResultChanged={getSearchResult}
            />
        }
    }
    function buildDateTimeFilter() {
        const disable = props.disableDateTimeFilter;
        if (disable && disable) {
            return null
        } else {
            return <DateTimeFilter<TItem>
                array={[...props.data]}
                selectDate={props.selectDate || ((item: TItem) => new Date())}
                getFilterResult={getDateTimeFilterResult}
            />
        }
    }

    const getDateTimeFilterResult = (result: TItem[]) => {
        setDisplayedData([...result]);
    };

    const addExportButton = () => {
        if (props.disableExportButton) {
            return null;
        }
        return <Grid item xs={2}>
            <Button variant="contained" color="primary">
                <CSVLink
                    filename={location.pathname.split("/")[-1] || "results" + ".csv"}
                    className={classes.csvLink}
                    headers={props.headCells.map(h => h.label)}
                    data={convertDataToCsvFormat<TItem>(displayedData, props.headCells)}>
                    export
                </CSVLink>
            </Button>

        </Grid>
    }
    return (
        <Container disableGutters className={props.classes + "  " + classes.root}>
            {buildSearchField()}
            <Grid container >
                <Grid item xs>
                    {buildDateTimeFilter()}
                </Grid>
                {addExportButton()}

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