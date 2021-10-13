import { makeStyles } from "@material-ui/styles";
import { Theme } from "@mui/material";
import { SxStyles } from "../../../core";

export const searchFilterStyles: SxStyles = {

	root: {
		borderRadius: 1,
	},
	search: {
		borderRadius: 1,
		position: "relative",
		background: "inherit",
	},
	searchIcon: {
		py: 0,
		px: 2,
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},

}


export const useSearchFieldStyles = makeStyles((theme: Theme) => {
	return {
		inputRoot: {
			color: "inherit",
			marginLeft:  `calc(1em + ${theme.spacing(4)}px)`,
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
	}
});