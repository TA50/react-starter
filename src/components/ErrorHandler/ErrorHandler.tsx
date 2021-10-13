import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { connect } from "react-redux";
import { AppError, container, ICommonDispatcher, ServiceName } from "../../core";
import { RootState } from "../../core/store/types";

// import container from '../../services/service.config';

interface IErrorHandlerProps {
	error: AppError | null;
}

const ErrorHandler: React.FunctionComponent<IErrorHandlerProps> = (props) => {
	const commonDispatcher = container.get<ICommonDispatcher>(ServiceName.CommonDispatcher);
	const handleClose = () => {
		commonDispatcher.dismissError();
		window.location.reload();
	};
	if (props.error) {
		return (
			<div>
				<Dialog
					open={Boolean(props.error)}
					onClose={handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">Sorry ... </DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							{props.error.message}
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="primary" autoFocus>
							dismiss
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	} else {
		return <> {props.children}</>;
	}
};

const mapStateToProps = (state: RootState) => {
	return {
		error: state.common.error,
	};
};
export default connect(mapStateToProps)(ErrorHandler);
