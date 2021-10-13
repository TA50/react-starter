import { Snackbar, Alert } from '@mui/material';
import * as React from 'react';
import { connect } from 'react-redux';
import { container, Feedback, FeedbackService, RootState, ServiceName } from '../../core';

interface IFeedbackMessageProps {

  feedback: Feedback | null
}

const FeedbackMessage: React.FunctionComponent<IFeedbackMessageProps> = (props) => {
  const feedbackService = container.get<FeedbackService>(ServiceName.FeedbackService);
  const handleClose = () => {
    console.log("Close Feedback");
    feedbackService.dismiss()
  }
  React.useEffect(() => {
    console.log(props.feedback);

  })
  if(!props.feedback){
    return <></>
  }
  return (<Snackbar anchorOrigin={{
    horizontal: "right",
    vertical: "top"
  }} open ={Boolean(props.feedback)} autoHideDuration={6000} onClose={() => handleClose()}>
        <Alert variant="filled" onClose={() => handleClose()} severity={props.feedback.type}>
          {props.feedback.message}
        </Alert>
      </Snackbar>)
    



};
const mapStateToProps = (state: RootState) => {
  return {
    feedback: state.common.feedback
  }
}
export default connect(mapStateToProps)(FeedbackMessage);
