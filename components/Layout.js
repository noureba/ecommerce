import Head from "next/head";
import React, { useContext } from "react";
import NavBar from "./NavBar";
import { Store } from "../utils/store";
import Footer from "./Footer";

function Layout({ children, title }) {
  const { state, dispatch } = useContext(Store);
  return (
    <div>
      <Head>
        <title>{title? `${title}-Brand`: "Brand"}</title>
      </Head>
      <div className={`${state.mode ? "dark" : "light"} container`}>
        <div>
          <NavBar />
          {children}
        </div>
        <footer>
            <Footer/>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
