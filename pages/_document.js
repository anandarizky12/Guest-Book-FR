import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className='scroll-smooth'>
        <Head />
        <body   style={{
            // overflowX: "hidden",
            padding: 0,
            margin: 0,
            scrollBehavior: "smooth",
            
          }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument