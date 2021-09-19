import * as React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import useStyles from "./genericTable.styles";
import { Paper, Table, TableBody, TableContainer, TableHead, TablePagination, TableSortLabel } from "@material-ui/core";
import SearchField from './SearchField/SearchField';

type sortFunctionType<TItem> = (a: TItem, b: TItem) => number;
type SelectFunctionType<TItem> = (item: TItem)=> any;
export type HeadCell<TItem> = {
    label: string;
    align?: 'center'| 'inherit'| 'justify'| 'left'| 'right';
    sortFunction?: sortFunctionType<TItem>;
    select: SelectFunctionType<TItem>
}

function descendingComparator<T>(a: T, b: T, selectFunction: SelectFunctionType<T> ) {
    const aValue = selectFunction(a);
    const bValue = selectFunction(b);
    if (bValue < aValue) {
        return -1;
    }
    if (bValue > aValue) {
        return 1;
    }
    return 0;
}

const stablizeSort = <TItem,>(data: TItem[],
    sortFunction: sortFunctionType<TItem> | null,
    asc = true,
): TItem[] => {
    if (!sortFunction) {
        return data;
    }
    if (asc) {
        return data.sort((a: TItem, b: TItem) => sortFunction(a, b));
    } else {
        return data.sort((a: TItem, b: TItem) => -sortFunction(a, b));
    }

}

interface IGenericTableProps<TItem> {
    data: TItem[];
    rowTemplate: (item: TItem) => JSX.Element;
    headCells: HeadCell<TItem>[];
    searchFunction: (item: TItem, text: string) => boolean;
    classes?: string;
 
}

const GenericTable = <TItem,>(props: React.PropsWithChildren<IGenericTableProps<TItem>>) => {
    const classes = useStyles();
    /********** States *********/
    const [pageCount, setPageCount] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [displayedData, setDisplayedData] = React.useState<TItem[]>([...props.data]);
    const [isAsc, setIsAsc] = React.useState<boolean>(true);
    const [orderBy, setOrderBy] = React.useState<number|null>(null);

    const handleChangePageCount = (event: unknown, newPageCount: number) => {
        setPageCount(newPageCount);
    };
    const getSortFunction = (index: number | null) => {
        if (index === null) {
            return null;
        }
        const headCell = props.headCells[index];
        if (headCell) {
            const sortFunction = headCell.sortFunction;
            if(sortFunction){
                return sortFunction
            }else{
                  return (a: TItem, b:TItem) =>  descendingComparator<TItem>(a, b, headCell.select);
            }
        }
        return null;
    }
    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPageCount(0);
    };

    const getSearchResult = (result: TItem[]) => {
        setDisplayedData([...result]);
    };
    const createSortHandler = (index:number) => {
        if (orderBy === index) {
            setIsAsc(!isAsc);
        } else {
            setOrderBy(index);
            setIsAsc(true);
        }
    }

    return (
        <TableContainer component={Paper} className={props.classes}>
            <SearchField<TItem>
                array={[...props.data]}
                searchFunction={props.searchFunction}
                searchResultChanged={getSearchResult}
            />
            <Table className={classes.table} aria-label="orders table" >
                <TableHead>
                    <TableRow>
                        {props.headCells.map((headCell, i) =>
                                <TableCell key={i} component="th" align={headCell.align || "center"}>
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
                    { stablizeSort<TItem>(displayedData, getSortFunction(orderBy), isAsc)
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
    );
};

export default GenericTable;