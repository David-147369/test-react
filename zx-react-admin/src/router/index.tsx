import type { RouteObject } from "react-router";
import { Navigate } from "react-router-dom";
import Login from "@/views/login/login";

// 导入所有router
const metaRouters = import.meta.glob("./modules/*.tsx", {
  eager: true,
  import: "default",
});
// 处理路由
export let routerArray: RouteObject[] = [];
Object.keys(metaRouters).forEach((key) => {
  routerArray = routerArray.concat(metaRouters[key] as RouteObject[]);
});

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/page1" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
  ...routerArray,
];
export default routes;
