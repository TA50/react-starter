// Helper
const StringIsNumber = (value:number|string) => isNaN(Number(value)) === false;

// Turn enum into array
function enumToArray<TEnum>(enumme: any) :TEnum[]{
    return Object.keys(enumme)
        .filter(StringIsNumber)
        .map(key => enumme[key]) as TEnum[];
}

export {enumToArray};