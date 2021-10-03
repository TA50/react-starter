export interface ITableFilterProps<T> {
    array: T[];
    select: (item: T) => any;
    getResultFunction: (getResult: () => T[]) => void;
}

export type TableFilter = <TItem>(
    props: React.PropsWithChildren<ITableFilterProps<TItem>>
) => JSX.Element;


export default TableFilter;


