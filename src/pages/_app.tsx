import '../../styles/globals.css'
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { useState } from "react";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          background: ${isDark ? "darkslategray" : "black"};
        }
      `}</style>
    </>
  );
}

export default MyApp;
