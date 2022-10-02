import Head from "next/head";
import BodyWrapper from "./BodyWrapper";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="relative z-0 h-full w-full">
      <Head>
        <title>I&apos;m Sleepy - Bedtime calculator</title>
      </Head>

      <main className="flex min-h-screen flex-col items-center bg-slate-800 py-5 text-gray-200 sm:py-10">
        <Header />
        <div className="flex">
          <BodyWrapper>{children}</BodyWrapper>
        </div>
        <Footer />
      </main>
    </div>
  );
}
