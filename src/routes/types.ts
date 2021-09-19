
export type Route = {
	path: string;
	displayName: string;
	icon: React.ElementType;
	exact: boolean;
	page: React.ElementType;
	sideMenu: boolean;
	children?: Route[]
};
