import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {Header} from "../src/components/header";
import {Footer} from "../src/components/footer";
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </SessionProvider>
  );
}
