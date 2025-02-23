/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DropImport } from './routes/drop'
import { Route as IndexImport } from './routes/index'
import { Route as ToolsIndexImport } from './routes/tools/index'
import { Route as ToolsSqlExplainerImport } from './routes/tools/sql-explainer'

// Create/Update Routes

const DropRoute = DropImport.update({
  id: '/drop',
  path: '/drop',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ToolsIndexRoute = ToolsIndexImport.update({
  id: '/tools/',
  path: '/tools/',
  getParentRoute: () => rootRoute,
} as any)

const ToolsSqlExplainerRoute = ToolsSqlExplainerImport.update({
  id: '/tools/sql-explainer',
  path: '/tools/sql-explainer',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/drop': {
      id: '/drop'
      path: '/drop'
      fullPath: '/drop'
      preLoaderRoute: typeof DropImport
      parentRoute: typeof rootRoute
    }
    '/tools/sql-explainer': {
      id: '/tools/sql-explainer'
      path: '/tools/sql-explainer'
      fullPath: '/tools/sql-explainer'
      preLoaderRoute: typeof ToolsSqlExplainerImport
      parentRoute: typeof rootRoute
    }
    '/tools/': {
      id: '/tools/'
      path: '/tools'
      fullPath: '/tools'
      preLoaderRoute: typeof ToolsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/drop': typeof DropRoute
  '/tools/sql-explainer': typeof ToolsSqlExplainerRoute
  '/tools': typeof ToolsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/drop': typeof DropRoute
  '/tools/sql-explainer': typeof ToolsSqlExplainerRoute
  '/tools': typeof ToolsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/drop': typeof DropRoute
  '/tools/sql-explainer': typeof ToolsSqlExplainerRoute
  '/tools/': typeof ToolsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/drop' | '/tools/sql-explainer' | '/tools'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/drop' | '/tools/sql-explainer' | '/tools'
  id: '__root__' | '/' | '/drop' | '/tools/sql-explainer' | '/tools/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DropRoute: typeof DropRoute
  ToolsSqlExplainerRoute: typeof ToolsSqlExplainerRoute
  ToolsIndexRoute: typeof ToolsIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DropRoute: DropRoute,
  ToolsSqlExplainerRoute: ToolsSqlExplainerRoute,
  ToolsIndexRoute: ToolsIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/drop",
        "/tools/sql-explainer",
        "/tools/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/drop": {
      "filePath": "drop.tsx"
    },
    "/tools/sql-explainer": {
      "filePath": "tools/sql-explainer.tsx"
    },
    "/tools/": {
      "filePath": "tools/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
