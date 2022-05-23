import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/css/globals.css";
import Script from "next/script";
import { StoreProvider } from "../utils/store";
import  AOS  from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <StoreProvider>
      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" />
    </StoreProvider>
  );
}

export default MyApp;
