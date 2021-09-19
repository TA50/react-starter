import { IStorageService } from "./IStorageService";
export class MemoryStorageBasedService implements IStorageService {
	private _storage: any;
	constructor() {
		this._storage = {};
	}
	getItem<T>(key: string): T | null {
		if (this._storage) {
			return this._storage[key];
		} else {
			return null;
		}
	}
	setItem<T>(key: string, value: T) {
		this._storage[key] = value;
	}
}
export enum MemoryStorageKeys {
	VENDURE_TOKEN = "vendure_token",
	COMPANY_EMAIL = "company_email",
	COMPANY_CUSTOMER = "company_customer",
	COMPANY_SHIPPERS = "company_shippers",
	CHANNEL_TOKEN = "channelToken"
}
