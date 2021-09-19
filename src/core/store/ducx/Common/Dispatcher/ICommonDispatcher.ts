import { AppError } from "../../../../types/errors";
interface ICommonDispatcher {
	throwError: (error: AppError) => void;
	dismissError: () => void;
}
export type { ICommonDispatcher }