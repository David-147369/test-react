import type { RouteObject } from "react-router";
import lazyLoad from "@/utils/router/lazyLoad";
const errPage: RouteObject[] = [
  {
    path: "/404",
    element: lazyLoad("views/errPage/404"),
  },
];
export default errPage;
