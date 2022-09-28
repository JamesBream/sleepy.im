import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { I18nProvider, SSRProvider, useLocale } from "react-aria";

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useLocale();
  return (
    <SSRProvider>
      <Layout>
        <I18nProvider locale={locale}>
          <Component {...pageProps} />
        </I18nProvider>
      </Layout>
    </SSRProvider>
  );
}

export default MyApp;
