import { HeadCell, SelectFunctionType, SortFunctionType } from ".";


export function descendingComparator<T>(a: T, b: T, selectFunction: SelectFunctionType<T>) {
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

export const stablizeSort = <TItem,>(data: TItem[],
    sortFunction: SortFunctionType<TItem> | null,
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

export function convertDataToCsvFormat<TItem>(arr: TItem[], heads: HeadCell<TItem>[]): TItem[][] {
    const objToArr = (item: TItem): any[] => {
        return heads.map(h => h.select(item));
    }
    return arr.map(a => objToArr(a))
}


export function arraysIntersection<T>(arrays: T[][], isEqual: (a: T, b: T) => boolean) {
    const data = arrays.sort((a, b) => b.length - a.length);
    // const resultArray: T[] = [...smallestArray];
    return data.reduce((a, b) => a.filter(c => b.find(x => isEqual(x, c)) ));

}
