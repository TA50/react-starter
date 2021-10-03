import * as React from 'react';
import {  Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { routes } from '.';
import Layout from '../layout/Layout';
import NotFoundPage from '../pages/NotFound/NotFoundPage';

interface IRoutesProps {
}

const Router: React.FunctionComponent<IRoutesProps> = (props) => {
    return <BrowserRouter>
        <Switch>
            {routes.map((route, i) => {
                const children = route.children;
                if (children) {
                    console.log(route.children);
                    return (<Route path={route.path} key={i}>
                        <Switch>
                            <Route path={route.path} exact key={i}>
                                <Layout>
                                    <route.page />
                                </Layout>
                            </Route>
                            {children!.map((child, k) => {
                                return (<Route
                                    path={ child.path}
                                    key={k} exact={child.exact}>
                                    <Layout>
                                        <child.page />
                                    </Layout>
                                </Route>)
                            })}
                            <Route>
                                <Layout>
                                    <NotFoundPage />
                                </Layout>
                            </Route>
                        </Switch>
                    </Route>)
                }
                return <Route path={route.path} key={i} exact={route.exact}>
                    <Layout>
                        <route.page />
                    </Layout>
                </Route>
            }
            )}
            <Route>
                <Layout>
                    <NotFoundPage />
                </Layout>
            </Route>
        </Switch>

    </BrowserRouter>;
};

export default Router;
