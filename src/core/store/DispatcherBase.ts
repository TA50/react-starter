import { AppStore } from "./types";
import {store} from "./config";
export abstract class DispatcherBase {
	protected _store: AppStore;
	constructor() {
		this._store = store;
	}
}

