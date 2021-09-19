import { Layouts } from './../../constants/Layouts';
import { ModelBase } from '../ModelBase';
import { Transaction } from '../Transaction/Transaction';
export class Shop extends ModelBase {
    classic_coffee_price: number;
    specialty_coffee_price: number;
    transactions: Transaction[];
    name: string;
    email: string;
    layout: Layouts;
    kid: string;
    identity_id: string;
    latitude: number;
    longitude: number;
    elastic_id: string;
    closing_time: number;
    emirate: string;
    instagram_url: string;
    opening_time: number;
    phone_number: string;
    state: string;
}