import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useStyles } from "../layout-styles";
import { getPageTitle } from '../../routes/routesHelper';
import { useHistory, useLocation } from "react-router-dom";
import clsx from "clsx";
interface ITopBarProps {
	handleMenuToggle: () => void;
	sidBarOpen: boolean;
}
const TopBar: React.FunctionComponent<ITopBarProps> = (props) => {
	const classes = useStyles();
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
