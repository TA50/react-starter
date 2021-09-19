import { Owner } from "../../../models";
import { DataAction, DataActionType } from '../../types';

export const setOwner = (owner: Owner): DataAction => {
    return {
        type: DataActionType.SetOwner,
        payload: owner
    }
}