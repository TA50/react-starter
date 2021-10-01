import { routes, Route } from ".";
console.log(routes);
const flattenRoutes = routes.reduce((prev: Route[], route: Route) => {
    if (route.children) {
        prev = prev.concat(route.children!.map(child => {
            child.path = route.path + child.path
            return child
        }));
    }
    prev.push(route);

    return prev
}, []);
export const getPageTitle = (pathname: string) => {
    const routes = flattenRoutes.filter((route: Route) => {
		if (route.exact) {
			return pathname === route.path
		}
		return pathname.startsWith(route.path);
    });
    if(routes.length > 1){

        return routes.find(route=>{
            return route.exact
        })?.displayName
    }else if(routes.length==1){
        return routes[0].displayName;
    }
    
}