import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "../config/connectors";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}

export default MyApp;
