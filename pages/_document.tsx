import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // Not sure this is needed, locale (and dir?) should get set automatically

  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#18224b" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@JamesWBream" />
        <meta name="twitter:creator" content="@JamesWBream" />
        <meta name="twitter:title" content="I'm Sleepy - Bedtime Calculator" />
        <meta
          name="twitter:description"
          content="Find the perfect time to sleep or wake to help you feel rested and refreshed, every morning!"
        />
        <meta
          name="twitter:image"
          content="https://www.sleepy.im/summary-card.jpg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
