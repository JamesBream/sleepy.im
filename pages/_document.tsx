import { Html, Head, Main, NextScript } from "next/document";
import { useLocale } from "react-aria";

export default function Document() {
  // Not sure this is needed, locale (and dir?) should get set automatically
  const { locale, direction } = useLocale();

  return (
    <Html lang={locale} dir={direction}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
