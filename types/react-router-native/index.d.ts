// Type definitions for React Router 4.0
// Project: https://github.com/ReactTraining/react-router
// Definitions by: Justin Firth <https://github.com/jmfirth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare module 'react-router-native' {
  import {
    Prompt,
    MemoryRouter,
    Redirect,
    RouteComponentProps,
    RouteProps,
    Route,
    Router,
    Switch,
    match,
    matchPath,
    withRouter,
    RouterChildContext
  } from 'react-router';
  import * as React from 'react';
  import * as ReactNative from 'react-native';
  import * as H from 'history';

  interface NativeRouterProps {
    initialEntries?: H.LocationDescriptor[];
    initialIndex?: number;
    getUserConfirmation?: (message: string, callback: (ok: boolean) => void) => void;
    keyLength?: number;
    children?: React.ReactNode;
  }
  class NativeRouter extends React.Component<NativeRouterProps, void> {}

  interface LinkProps extends ReactNative.ViewProperties {
    to: H.LocationDescriptor;
    replace?: boolean;
    component?: React.Component<any, any>
  }
  class Link extends React.Component<LinkProps, void> {}

  export {
    LinkProps, // TypeScript specific, not from React Router itself
    Link,
    NativeRouterProps, // TypeScript specific, not from React Router itself
    NativeRouter,
    Prompt,
    MemoryRouter,
    Redirect,
    RouteComponentProps, // TypeScript specific, not from React Router itself
    RouteProps, // TypeScript specific, not from React Router itself
    Route,
    Router,
    Switch,
    match, // TypeScript specific, not from React Router itself
    matchPath,
    withRouter,
    RouterChildContext
  };
}
