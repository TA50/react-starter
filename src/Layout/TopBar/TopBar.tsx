import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "./styles";
interface ITopBarProps {
	handleMenuToggle: () => void;
	sideBarOpen: boolean;
}
const TopBar: React.FunctionComponent<ITopBarProps> = (props) => {
	const classes = useStyles();

	return (
		<AppBar position="static" className={classes.root} elevation={0}>
			<Toolbar
				variant="dense"
				classes={{
					root: classes.toolbar,
				}}
			>
				<IconButton
					edge="start"
					className={classes.menuButton}
					color="inherit"
					aria-label="menu"
					onClick={props.handleMenuToggle}
				>
					{props.sideBarOpen ? <CloseIcon /> : <MenuIcon />}
				</IconButton>
				<Typography variant="h6" color="inherit">
					Photos
				</Typography>
				<IconButton
					edge="end"
					aria-label="account of current user"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};
export default TopBar;
