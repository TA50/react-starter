import TableFilter from "./TableFilter";

export type SortFunctionType<TItem> = (a: TItem, b: TItem) => number;
export type SelectFunctionType<TItem> = (item: TItem)=> any;
export type HeadCell<TItem> = {
    label: string;
    align?: 'center'| 'inherit'| 'justify'| 'left'| 'right';
    sortFunction?: SortFunctionType<TItem>;
    select: SelectFunctionType<TItem>
}

export interface IGenericTableProps<TItem> {
    classes?: string;
    data: TItem[];
    rowTemplate: (item: TItem) => JSX.Element;
    headCells: HeadCell<TItem>[];

 
    onPageChange?: (event: object, page: number) => void,
    onPageCountChange?: any,

    handlePageCountChanged?: (newPageCount: number)=> void;
    handleChangeRowsPerPage?: (rowsPerPage:  number)=> void;

    disableExportButton?: boolean;

    filters? : FilterParam<TItem>[];
 
}


export type FilterParam<TItem> = {
    component: TableFilter;
    selectFn: (item: TItem) => any;
}

export interface IGenericTableState<TItem>{ 
    pageCount: number;
    rowsPerPage: number;
    displayedData: TItem[];
    isAsc: boolean;
    orderBy: number | null, 
}
