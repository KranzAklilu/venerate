import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
