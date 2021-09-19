
import { AppError } from "../../types/errors";


interface ILogger {
	showInfo: (message: string) => void;
	showError: (error: AppError) => void;
	// logError: () => void;
}

export default ILogger;
