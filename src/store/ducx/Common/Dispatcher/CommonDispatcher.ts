import { ICommonDispatcher } from "./ICommonDispatcher";

import { dismissError, throwError } from "../common.actions";
import { AppError } from "../../../../types/errors";
import { DispatcherBase } from "../../../DispatcherBase";

class CommonDispatcher extends DispatcherBase implements ICommonDispatcher {
	// Common
	throwError(error: AppError) {
		this._store.dispatch(throwError(error));
	}
	dismissError() {
		this._store.dispatch(dismissError());
	}
}
export { CommonDispatcher };