export type FeedbackType = 'error'| 'info'| 'success'| 'warning';
export class Feedback { 
 message:string;
 type:	FeedbackType;   
}

