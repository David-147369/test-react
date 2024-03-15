import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "antd";
import { MenuItem } from "@/typings/auth";
import { fetchGetMenu } from "@/service/api";
const LeftMenu = () => {
  const navigateTo = useNavigate();
  const currentRoute = useLocation();
  const [menus, setMenus] = useState<MenuItem[]>([]);
  const [openKeys, setOpenKeys] = useState([""]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await fetchGetMenu();
      if (data) {
        setMenus(data);
        setOpenKeys([findInitKey(data, currentRoute.pathname)]);
      }
    };
    fetchData();
  }, [currentRoute.pathname]);

  const menuClick = (e: { key: string }) => {
    navigateTo(e.key);
  };
  const handleOpenChange = (keys: string[]) => {
    setOpenKeys([keys[keys.length - 1]]);
  };
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentRoute.pathname]}
      mode="inline"
      // 菜单项的数据
      items={menus}
      onClick={menuClick}
      // 某项菜单展开和回收的事件
      onOpenChange={handleOpenChange}
      // 当前菜单展开项的key数组
      openKeys={openKeys}
    />
  );
};

function findInitKey(menus: MenuItem[], path: string): string {
  const item: MenuItem = menus?.find((item) =>
    path.includes(item!.key as string),
  ) as MenuItem;
  return item?.key as string;
}

export default LeftMenu;
