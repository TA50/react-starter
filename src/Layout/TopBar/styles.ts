import { createStyles, makeStyles, Theme } from "@material-ui/core";
export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		toolbar: {
			justifyContent: "space-between",
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
	})
);
