import { makeStyles } from "@material-ui/styles";
import {Theme } from "@mui/material"

const drawerWidth = 240;
export const useLayoutStyles = makeStyles((theme: Theme) =>{
	return {
		root: {
			display: "flex",
		},
		appBar: {
			zIndex: theme.zIndex.drawer + 1,
			transition: theme.transitions.create(["width", "margin"], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
		appBarShift: {
			marginLeft: drawerWidth,
			width: `calc(100% - ${drawerWidth}px)`,
			transition: theme.transitions.create(["width", "margin"], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		menuButton: {
			marginRight: 36,
		},
		hide: {
			display: "none",
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
			whiteSpace: "nowrap",
		},
		drawerOpen: {
			width: drawerWidth,
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		drawerClose: {
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			overflowX: "hidden",
			width: `calc(${theme.spacing(7)} + 1px)`,
			[theme.breakpoints.up("sm")]: {
				width: theme.spacing(9) + 1,
			},
		},
		toolbar: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			padding: theme.spacing(0, 1),
			// necessary for content to be below app bar
			...theme.mixins.toolbar,
		},
		sideBarToolbar: {
			borderBottom: `1px solid `,
			borderBottomColor: theme.palette.divider,
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(1),
			marginTop: theme.spacing(8)
		},
		activeLink: {
			backgroundColor: theme.palette.primary.light,
		},
		list: {
			paddingTop: theme.spacing(0),
			height:"100%",
			"&  > .MuiGrid-root": { 
				
				height:"100%"
			},
		},
	}
}
);