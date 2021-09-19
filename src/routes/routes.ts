import { Dashboard } from "@material-ui/icons";
import ExamplePage from "../pages/ExamplePage";
import OwnerProfilePage from "../pages/OwnerProfile/OwnerProfile";
import ShopProfilePage from "../pages/ShopsPage/ShopProfilePage/ShopProfilePage";
import ShopsPage from "../pages/ShopsPage/ShopsPage";
import TransactionsPage from "../pages/TransactionsPage/TransactionsPage";
import { Route } from "./types";


export const routes: Route[] = [
	{
		displayName: "Example",
		icon: Dashboard,
		exact: true,
		page: ExamplePage,
		path: "/",
		sideMenu: true,
	},
	{
		displayName: "Owner Profile",
		icon: Dashboard,
		exact: true,
		page: OwnerProfilePage,
		path: "/profile",
		sideMenu: false,
	},
	{
		displayName: "Transactions",
		icon: Dashboard,
		exact: true,
		page: TransactionsPage,
		path: "/transactions",
		sideMenu: true,
	},
	{
		displayName: "Shops",
		icon: Dashboard,
		exact: false,
		page: ShopsPage,
		path: "/shops",
		sideMenu: true,
		children:[
			{
				displayName: "Shop Profile",
				icon: Dashboard,
				exact: true,
				page: ShopProfilePage,
				path: "/:kid",
				sideMenu: true,
			}
		]
	},
];

export default routes;