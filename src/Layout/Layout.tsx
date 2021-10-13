import React from "react";
import clsx from "clsx";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useLayoutStyles } from "./layout-styles";

import Sidebar from "./SideBar/SideBar";
import { useHistory, useLocation } from "react-router-dom";
import { getPageTitle } from '../routes/routesHelper';
import { AccountCircle } from "@mui/icons-material";
import FeedbackMessage from "./FeedbackMessage/FeedbackMessage";
import TopBar from "./TopBar/TopBar";
interface ILayoutProps {
	// LayoutType: Role;
}
const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
	const classes = useLayoutStyles();
	// const location = useLocation();
	// const history = useHistory();
	// const pageTitle = getPageTitle(location.pathname);
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<TopBar handleMenuToggle = {handleDrawerOpen} sidBarOpen={open}/>
			
			<Sidebar open={open} closed={handleDrawerClose} />
			<main className={classes.content}>
				<div  />
				{props.children}
			</main>
			<FeedbackMessage />
		</div>
	);
};

export default Layout;
