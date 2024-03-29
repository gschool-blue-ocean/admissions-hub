import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { useEffect } from "react";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div>
      <Head>
        <title>BLUE OCEAN || ADMISSION</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://learn-2.galvanize.com/assets/galvanize/mobile-logo-149555222a440753ee9c29705f17c6cda1f9ababe51e56fb654d57726ba2d3e2.svg"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
