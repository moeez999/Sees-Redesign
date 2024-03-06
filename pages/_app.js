import "../styles/globals.css";
import "animate.css";
import "@fortawesome/fontawesome-free/css/all.css";
import AOSWrapper from "../components/AOS";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <AOSWrapper>
      <Head>
        <title>
          Sadler Energy and Environmental Services - Building Regulation,
          Compliance, Testing & Certification
        </title>
      </Head>
      <Component {...pageProps} />
    </AOSWrapper>
  );
}

export default App;
