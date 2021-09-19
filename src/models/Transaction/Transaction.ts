import { ModelBase } from '../ModelBase';
export class Transaction extends ModelBase{ 
   
        classic_coffee_count: number;
        specialty_coffee_count: number;
        date: Date;
        user_id: string;
        internal_correlation_id:string;
        shop_id: string;
        kid: string;
        total_price:number;
        elastic_id:string;
} 