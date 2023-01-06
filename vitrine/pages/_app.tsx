import "../styles/globals.css";
import "my-lib-ui/dist/index.css";


import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
