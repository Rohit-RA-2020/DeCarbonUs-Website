import Document, { Html, Head, Main, NextScript } from "next/document";

import { Provider } from "react-redux";
import store from "../src/store/index"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Andika&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Provider store={store}>
            <Main />
            <NextScript />
            <div id="modal-root"></div>
          </Provider>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
