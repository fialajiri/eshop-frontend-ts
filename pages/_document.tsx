import Document, { Html, Head, Main, NextScript } from "next/document";


class MyDocument extends Document {
  render() {
    return (
      <Html lang="cs">
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="notifications"></div>
          <div id="drawer-hook"></div>
          <div id="cart-hook"></div>
          <div id="backdrop-hook"></div>
          <div id="modal-hook"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;