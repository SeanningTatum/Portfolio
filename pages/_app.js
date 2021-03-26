import '../css/index.css';
import Head from 'next/head';
import Layout from '@components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Sean Urgel</title>
        <meta
          name="Description"
          content="A Next.js starter styled using Tailwind CSS."
        />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>" />

      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
