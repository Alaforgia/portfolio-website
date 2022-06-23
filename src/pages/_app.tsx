import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          background: ${isDark ? "darkslategray" : "antiquewhite"};
        }
      `}</style>
    </>
  );
}

export default MyApp;
