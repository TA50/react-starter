import {Dashboard} from "@material-ui/icons";
import {Route} from "./types";
import ExamplePage from "../pages/ExamplePage";
import TodoPage from '../pages/TodoPage/TodoPage';
export const routes: Route[] = [
	{
		displayName: "Home",
		icon: Dashboard,
		exact: true,
		page: ExamplePage,
		path: "/",
		sideMenu: true,
	},
	{
		displayName: "Todos",
		icon: Dashboard, 
		exact: true, 
		page: TodoPage, 
		path: "/todo",
		sideMenu: true
	}
	
];

export default routes;