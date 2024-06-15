/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router';

// Import Routes

import { Route as rootRoute } from './../pages/__root';
import { Route as IndexImport } from './../pages/index';

// Create Virtual Routes

const UsersLazyImport = createFileRoute('/users')();
const TeamsLazyImport = createFileRoute('/teams')();

// Create/Update Routes

const UsersLazyRoute = UsersLazyImport.update({
  path: '/users',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./../pages/users.lazy').then((d) => d.Route));

const TeamsLazyRoute = TeamsLazyImport.update({
  path: '/teams',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./../pages/teams.lazy').then((d) => d.Route));

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    '/teams': {
      preLoaderRoute: typeof TeamsLazyImport;
      parentRoute: typeof rootRoute;
    };
    '/users': {
      preLoaderRoute: typeof UsersLazyImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([IndexRoute, TeamsLazyRoute, UsersLazyRoute]);

/* prettier-ignore-end */
