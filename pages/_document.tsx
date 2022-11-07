import { Html, Head, Main, NextScript } from "next/document";
import NextJsScript from "next/script";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <NextJsScript
          strategy="worker"
          src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        />
        <meta httpEquiv="Content-Security-Policy" content="script-src 'none'" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
