import type { RouteObject } from "react-router";
import lazyLoad from "@/utils/router/lazyLoad";
import Index from "@/views/index";
const Menu2: RouteObject[] = [
  {
    element: <Index />,
    children: [
      {
        path: "/page2",
        element: lazyLoad("views/page2"),
      },
      {
        path: "/page2/page201",
        element: lazyLoad("views/page201"),
      },
    ],
  },
];
export default Menu2;
