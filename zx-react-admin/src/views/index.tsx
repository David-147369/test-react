import LayOutContainer from "@/layout/layout-container";
import { Menu, Footer, Header } from "@/components/home";
import { Outlet } from "react-router-dom";
const Index = () => {
  return (
    <LayOutContainer
      headerSlot={<Header />}
      siderSlot={<Menu />}
      contentSlot={<Outlet />}
      footerSlot={<Footer />}
    ></LayOutContainer>
  );
};
export default Index;
