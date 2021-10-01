import { Feedback} from './Feedback';
export interface IFeedbackService {
    showError(message:string):void;
    showSuccess(message:string):void;
    push(feedback:Feedback):void
    dismiss():void;
}