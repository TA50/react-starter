import { ListItem, List, ListItemIcon, ListItemText } from '@mui/material';
import clsx from 'clsx';
import * as React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Route } from '../../routes';
import { useLayoutStyles } from '../layout-styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface ISidebarItemProps {
    route: Route,
}

const SidebarItem: React.FunctionComponent<ISidebarItemProps> = (props) => {
    const history = useHistory();
    const location = useLocation();
    const classes = useLayoutStyles();
    const linkIsActive = (route: Route) => {
        if (route.exact) {
            return route.path === location.pathname;
        } else {
            const startWithRegex = new RegExp("^" + route.path);
            return startWithRegex.test(location.pathname);
        }
    };
    
    return <><ListItem
            button
            className={clsx({
                [classes.activeLink]: linkIsActive(props.route),
            })}
            onClick={() => history.push(`${props.route.path}`)}>
                <ListItemIcon>
                    <props.route.icon />
                </ListItemIcon>
            <ListItemText primary={props.route.displayName} />
    </ListItem>
    </>
};

export default SidebarItem;
