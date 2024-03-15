export interface MetaProps {
  keepAlive?: boolean;
  requiresAuth?: boolean;
  title: string;
  key?: string;
}
export interface RouteObject {
  path?: string;
  element?: React.ReactNode;
  children?: RouteObject[];
  meta?: MetaProps;
}
