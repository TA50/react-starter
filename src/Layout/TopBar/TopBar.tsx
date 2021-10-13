import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {styled} from "@mui/material";
import { getPageTitle } from '../../routes/routesHelper';
import { useHistory, useLocation } from "react-router-dom";
import clsx from "clsx";
import {useLayoutStyles} from "../layout-styles";
interface ITopBarProps {
	handleMenuToggle: () => void;
	sidBarOpen: boolean;
}
const TopBar: React.FunctionComponent<ITopBarProps> = (props) => {
	const classes = useLayoutStyles();
	const history = useHistory();
	const location = useLocation();
	const pageTitle = getPageTitle(location.pathname);
	return (
		<AppBar
				elevation={0}
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: props.sidBarOpen,
				})}
			>
				<Toolbar className={classes.toolbar}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={props.handleMenuToggle}
						edge="start"
						className={clsx(classes.menuButton, {
							[classes.hide]: props.sidBarOpen,
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
			</AppBar>
	);
};
export default TopBar;