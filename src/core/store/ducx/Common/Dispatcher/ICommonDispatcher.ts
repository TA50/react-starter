import { AppError } from "../../../../types/errors";
import { Feedback } from '../../../../services/Feedback/Feedback';
interface ICommonDispatcher {
	throwError: (error: AppError) => void;
	dismissError: () => void;
	pushFeedback:(feedback:Feedback)=>void;
	dismissFeedback:()=>void;
}
export type { ICommonDispatcher }