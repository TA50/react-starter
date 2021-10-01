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


// export function createPageCountArray(length: number): number[] {
//     const incrementConst = 5;
//     const pageCountArray = [];
//     for (let i = 1; i <= (length / incrementConst); i++) {
//         pageCountArray.push(i * incrementConst);
//     }
//     if (length % incrementConst > 0) {
//         pageCountArray.pop()
//         pageCountArray.push(length);
//     }
//     return pageCountArray;
// }

// console.log(createPageCountArray(40));
// console.log(createPageCountArray(78));
// console.log(createPageCountArray(489));