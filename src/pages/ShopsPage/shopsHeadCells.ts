import { HeadCell } from '../../components/GenericTable/GenericTable';
import { Shop } from '../../core';
export const shopsHeadCells: HeadCell<Shop>[] = [{
    label: "Name",
    select: s => s.name,
},
{
    label: "Email",
    select: s => s.email,
},
{
    label: "Phone",
    select: s => s.phone_number,
},
{
    label: "Emirate",
    select: s => s.emirate,
},
// {
//     label: "Transactions average",
//     select: a => {
//         let totalSum = a.transactions.reduce((sum, current) => {
//             return sum + current.total_price;
//         }, 0)
//         return totalSum / a.transactions.length
//     }
// },
{
    label: "CC price",
    select: s => s.classic_coffee_price
},
{
    label: "SC price",
    select: s => s.specialty_coffee_price
}
]