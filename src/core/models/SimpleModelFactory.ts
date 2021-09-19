import { ModelBase } from "./ModelBase";
import { ModelFactoryBase } from "./ModelFactoryBase";

export class SimpleModelFactory<T extends ModelBase> extends ModelFactoryBase<T>{
    createSingle(obj: any): T {
        return obj as T;
    }
}