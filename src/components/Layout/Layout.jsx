import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router";
import Header from "../Header/Header";
import { useEffect, useRef } from "react";
import { useOnLoadImages } from "../../utils/hooks/useOnLoadImages";
import Loader from "../Loader/Loader";

const Layout = () => {
  const { pathname } = useLocation();
  const wrapperRef = useRef(null);
  const imagesLoaded = useOnLoadImages(wrapperRef);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div style={{ overflowY: "hidden" }}>
      <Header />
      <div ref={wrapperRef}>
        {imagesLoaded ? <Outlet style={{ overflowY: "hidden" }} /> : <Loader />}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
