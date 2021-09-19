import { alpha, makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => {
	return {
		root: {
			borderRadius: theme.shape.borderRadius,
			backgroundColor: alpha(theme.palette.divider, 0.25),
		},
		search: {
			borderRadius: theme.shape.borderRadius,
			position: "relative",
			background: "white",
		},
		searchIcon: {
			padding: theme.spacing(0, 2),
			height: "100%",
			position: "absolute",
			pointerEvents: "none",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			//cursor: "pointer",
		},
		inputRoot: {
			color: "inherit",
			marginLeft: `calc(1em + ${theme.spacing(4)}px)`,
			width: "auto",
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			display: " block",
			width: "30ch",
			transition: theme.transitions.create("width"),
			"&:focus": {
				width: "50ch",
			},
		},
	};
});

export default useStyles;
