
import ILogger from "./ILogger";
import { ICommonDispatcher } from "../../store/ducx/Common/Dispatcher/ICommonDispatcher";
import { AppError } from "../../types/errors";

class Logger implements ILogger {
	
	constructor(private _dispatcher: ICommonDispatcher) {}
	showInfo(message: string, obj?: any) {
		if(process.env.NODE_ENV.toLowerCase() !== "production"){

			console.log(
				`%c  ${message}`,
				"padding: 0.4rem; font-size: 1.2rem; border: 1px solidc blue; color: black; "
			);
			
			obj && console.log(obj);
		}
	}
	showError(error: AppError) {
		if (error) {
			console.error(error);
			console.log(
				`%c error message: ${error.message}`,
				"padding: 1rem; font-size: 1.4rem; border: 1px solid red;"
			);
			this._dispatcher.throwError(error);
		} else {
			this.showInfo("error is undefiend", error);
		}
	}
}

export default Logger;
