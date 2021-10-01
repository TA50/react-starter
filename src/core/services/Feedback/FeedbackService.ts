import { ICommonDispatcher } from '../..';
import { Feedback, FeedbackType } from './Feedback';
import { IFeedbackService } from './IFeedbackService';
export class FeedbackService implements IFeedbackService{
    constructor(private _commonDispatcher:ICommonDispatcher){}
    push(feedback: Feedback): void {

       this._commonDispatcher.pushFeedback(feedback);
    }
    showError(message: string): void {
        const feedback = new Feedback();
        feedback.message = message;
        feedback.type = "error";
        this.push(feedback);
    }
    showSuccess(message: string): void {
        const feedback = new Feedback();
        feedback.message = message;
        feedback.type = "success";
        this.push(feedback);
    }
    dismiss(){
        this._commonDispatcher.dismissFeedback();
    }
}