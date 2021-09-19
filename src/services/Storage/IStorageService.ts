export interface IStorageService {
	getItem<T>(key: string): T | null;
	setItem<T>(key: string, value: T): void;
}
