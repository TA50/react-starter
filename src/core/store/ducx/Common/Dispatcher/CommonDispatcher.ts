import { ICommonDispatcher } from "./ICommonDispatcher";

import { dismissError, pushFeedback, removeFeedback, throwError } from "../common.actions";
import { AppError } from "../../../../types/errors";
import { DispatcherBase } from "../../../DispatcherBase";
import { Feedback } from "../../../../services/Feedback/Feedback";

class CommonDispatcher extends DispatcherBase implements ICommonDispatcher {
	pushFeedback(feedback: Feedback) {
		this._store.dispatch(pushFeedback(feedback));
	}
	dismissFeedback() {
		this._store.dispatch(removeFeedback());
	}
	// Common
	throwError(error: AppError) {
		this._store.dispatch(throwError(error));
	}
	dismissError() {
		this._store.dispatch(dismissError());
	}
}
export { CommonDispatcher };