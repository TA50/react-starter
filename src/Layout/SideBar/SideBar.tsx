import * as React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useStyles } from "../layout-styles";
import Typography from "@material-ui/core/Typography";
import { Route, routes } from "../../routes";
import { container, ServiceName, AppError } from "../../core";
import ILogger from "../../core/services/Logger/ILogger";
import { Grid } from "@material-ui/core";
import SidebarItem from "./SidebarItem";
interface ISidebarProps {
	open: boolean;
	closed: () => void;
}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
	const classes = useStyles();
	
	const links: Route[] = routes;
	const logger = container.get<ILogger>(ServiceName.Logger);
	

	const logout = () => {
		logger.showError(new AppError("TEST", "Log out"));
	}
	return (
		<Drawer
			variant="permanent"
			className={clsx(classes.drawer, {
				[classes.drawerOpen]: props.open,
				[classes.drawerClose]: !props.open,
			})}
			classes={{
				paper: clsx({
					[classes.drawerOpen]: props.open,
					[classes.drawerClose]: !props.open,
				}),
			}}
		>
			<div className={clsx(classes.sideBarToolbar, classes.toolbar)}>
				<Typography variant="h6">KOPII</Typography>
				<IconButton onClick={props.closed}>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<List disablePadding className={classes.list}>
			<Grid container direction="column" justifyContent="space-between">
				{/*  Routes */}
				<Grid item >
				{links.map((route, index) => (
					<>
						{route.sideMenu ? <SidebarItem route={route} key={index}/>: null}
					</>
				))}
				</Grid>
				{/*  Logout button  */}
				{/* <Grid item>
				<ListItem
					button
					onClick={logout} >
					<ListItemIcon>
						<ExitToAppIcon />
					</ListItemIcon>
					<ListItemText primary="Logout">Logout</ListItemText>
				</ListItem>
				</Grid> */}
			</Grid>
				
			</List>
		</Drawer>
	);
};

export default Sidebar;
