import { Footer, Header } from "@/shared";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="container page">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
