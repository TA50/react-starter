import React from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./layout-styles";

import Sidebar from "./SideBar/SideBar";
import { useHistory, useLocation } from "react-router-dom";
import { getPageTitle } from '../routes/routesHelper';
import { AccountCircle } from "@material-ui/icons";
import FeedbackMessage from "./FeedbackMessage/FeedbackMessage";
import TopBar from "./TopBar/TopBar";
interface ILayoutProps {
	// LayoutType: Role;
}
const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
	const classes = useStyles();
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
			{/* <AppBar
				elevation={0}
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar className={classes.toolbar}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, {
							[classes.hide]: open,
						})}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						{pageTitle}
					</Typography>

					<IconButton
						edge="end"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						color="inherit"
						onClick={()=> history.push("/profile")}
					>
						<AccountCircle />
					</IconButton>
				</Toolbar>
			</AppBar> */}
			<Sidebar open={open} closed={handleDrawerClose} />
			<main className={classes.content}>
				<div className={classes.toolbar} />
				{props.children}
			</main>
			<FeedbackMessage />
		</div>
	);
};

export default Layout;
