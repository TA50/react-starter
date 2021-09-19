import { CircularProgress, makeStyles, Theme } from "@material-ui/core";
import { Container } from "@material-ui/core";
import * as React from "react";

interface ILoaderProps {
	isLoading: boolean;
}
const useStyles = makeStyles((theme: Theme) => {
	return {
		root: {
			textAlign: "center",
			marginTop: theme.spacing(4),
		},
	};
});
const Loader: React.FunctionComponent<ILoaderProps> = (props) => {
	const classes = useStyles();
	if (!props.isLoading) {
		return <>{props.children}</>;
	} else {
		return (
			<Container className={classes.root}>
				<CircularProgress />
			</Container>
		);
	}
};

export default Loader;
