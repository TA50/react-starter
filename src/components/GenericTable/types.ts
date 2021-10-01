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
 
    searchFunction?: (item: TItem, text: string) => boolean;
    disableSearchField?: boolean;
 
    onPageChange?: (event: object, page: number) => void,
    onPageCountChange?: any,

    disableDateTimeFilter?: boolean;
    selectDate?: (item: TItem)=> Date;

    handlePageCountChanged?: (newPageCount: number)=> void;
    handleChangeRowsPerPage?: (rowsPerPage:  number)=> void;

    disableExportButton?: boolean;
 
}
