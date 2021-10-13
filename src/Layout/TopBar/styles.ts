import { styled, Toolbar } from "@mui/material";
import { SxStyles } from '../../core/types/index';

export const topBarStyles: SxStyles ={
		root: {
			flexGrow: 1,
		},
		toolbar: {
			justifyContent: "space-between",
		},
		menuButton: {
			marginRight: 2
		},
	};

export const StyledToolbar = styled(Toolbar)(({ theme }) => {
	return {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	}
})