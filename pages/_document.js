import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="bg-jelly-bean-50 text-jelly-bean-950 dark:bg-jelly-bean-950 dark:text-jelly-bean-50">
        <Main />
        <NextScript />
        <Script src="https://www.google.com/recaptcha/api.js" async defer />
      </body>
    </Html>
  );
}
