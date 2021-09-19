import { Owner } from '../../../models';
import { DispatcherBase } from '../../DispatcherBase';
import { setOwner } from './data.actions';
class DataDispatcher extends DispatcherBase{ 
    setOwner(owner:Owner){
        this._store.dispatch(setOwner(owner));
    }
}

export {DataDispatcher}