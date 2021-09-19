import { AppError } from "../../../../types/errors";

export interface ICommonDispatcher {
	throwError: (error: AppError) => void;
	dismissError: () => void;
}
