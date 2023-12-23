import { Provider } from "react-redux";
import { AppProvider } from "./app-provider";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import { store } from "@/shared/lib/redux/store";
import ModalViews from "@/widgets/auth";
import Header from "@/widgets/header";
import Footer from "@/widgets/footer";
import "../styles/globals.scss";


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Provider store={store}>
      <AppProvider>
        <ModalViews /> 
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AppProvider>
    </Provider>
  );
}
