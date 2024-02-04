import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.location.pathname !== pathname) {
      window.scrollTo(0, -1000);
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;
