import { Owner } from '.';
import { ModelBase } from './ModelBase';
export abstract class ModelFactoryBase<T extends ModelBase> {


    protected getValue<TValue>(obj:any, key: keyof T): TValue {
        
        return obj[key] as TValue;
    }
    protected getDate(obj:any, key: keyof T) : Date{ 
        const date = new Date(obj[key]);
        return date;
    }
    public abstract createSingle(obj: any): T;
    public createMany(obj: any[]): T[] {
        if (!obj) {
            return [];
        }
        return obj.map((item: any) => {
            return this.createSingle(item);
        })
    }
}



