import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { Main as MainLayout} from './layouts';
import { RouteWithLayout } from './components';

import {
    Dashboard as DashboardView,
    UserList as UserListView,
    Typography as TypographyView,
    Icons as IconsView,
    Account as AccountView,
    Settings as SettingsView
  } from './views';

  const Routes = () => {
    return (
        <Switch>
            <Redirect
            exact
            from="/"
            to="/dashboard"
            />
            <RouteWithLayout
                component={DashboardView}
                exact
                layout={MainLayout}
                path="/dashboard"
            />
            <RouteWithLayout
                component={UserListView}
                exact
                layout={MainLayout}
                path="/users"
            />

            <RouteWithLayout
                component={TypographyView}
                exact
                layout={MainLayout}
                path="/typography"
            />
            <RouteWithLayout
                component={IconsView}
                exact
                layout={MainLayout}
                path="/icons"
            />
            <RouteWithLayout
                component={AccountView}
                exact
                layout={MainLayout}
                path="/account"
            />
            <RouteWithLayout
                component={SettingsView}
                exact
                layout={MainLayout}
                path="/settings"
            />

            <Redirect to="/not-found" />
        </Switch>
    )
  };

  export default Routes;
