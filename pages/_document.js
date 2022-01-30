import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className='scroll-smooth'>
          <Head>
          {/* PWA primary color */}
          <meta
          name="description"
          content="Buku tamu Badan Pusat Statistik Kota Banjarmasin"
        />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument