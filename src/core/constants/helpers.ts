// // Helper
export const StringIsNumber = (value:number|string) => isNaN(Number(value)) === false;

// Turn enum into array
function enumToArray<TEnum>(enumme: any) :TEnum[]{
   const enumArr = [];
   for(let key in enumme){
       enumArr.push(enumme[key] as TEnum)
   }
   return enumArr;
    // return Object.keys(enumme)
    //     .filter(StringIsNumber)
    //     .map(key => enumme[key]) as TEnum[];
}

export {enumToArray};