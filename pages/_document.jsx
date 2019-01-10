import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title> MT Design </title>
          {/* <link rel="stylesheet" href="/_next/static/style.css" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
