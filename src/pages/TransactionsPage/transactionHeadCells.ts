import { HeadCell } from '../../components/GenericTable/GenericTable';
import { Transaction } from '../../core/models';
export const transactionHeadCells: HeadCell<Transaction >[] = [{
label: "User ID",
select: (t)=> t.user_id, 
}, 
{
    label: "Shop ID", 
    select: t=> t.shop_id, 

}, 
{
    label: "Date", 
    select: t=> t.date.toLocaleDateString(), 

},
{
    label: "total price",
    select: t=> t.total_price,

},
{
    label: "#CCC",
    select: t=> t.classic_coffee_count
}


]