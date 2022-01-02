import '../styles/globals.css'
import { Provider } from "react-redux";
import Layout from '../components/layout/Layout';
import store from '../store/store';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  

  return (
  <Provider   store={store}>
      <Head>
        <title>BPS Kota Banjarmasin</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
    
      </Head>
    <Layout>
        <Component {...pageProps} />
    </Layout>
  </Provider>
  )}

export default MyApp