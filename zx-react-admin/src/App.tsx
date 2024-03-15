import { useEffect } from "react";
import { useRoutes, useLocation, useNavigate } from "react-router-dom";
import { message } from "antd";
import { getToken } from "@/utils/auth";
import router from "./router";
import "./App.css";

// 去往登录页的组件
function ToLogin() {
  const navigateTo = useNavigate();
  useEffect(() => {
    navigateTo("/login");
    message.warning("您还没有登录，请登录后再访问！");
  }, [navigateTo]);
  return <div></div>;
}

// 去往首页的组件
function ToHome() {
  const navigateTo = useNavigate();
  useEffect(() => {
    navigateTo("/");
    message.warning("您已经登录过了！");
  }, [navigateTo]);
  return <div></div>;
}

function BeforeRouterEnter() {
  const outlet = useRoutes(router);
  const location = useLocation();
  const token = getToken();
  //1、如果访问的是登录页面， 并且有token， 跳转到首页
  if (location.pathname === "/login" && token) {
    // 这里不能直接用 useNavigate 来实现跳转 ，因为需要BeforeRouterEnter是一个正常的JSX组件
    return <ToHome />;
  }
  //2、如果访问的不是登录页面，并且没有token， 跳转到登录页
  if (location.pathname !== "/login" && !token) {
    return <ToLogin />;
  }
  return outlet;
}

function App() {
  return <BeforeRouterEnter />;
}

export default App;
