import Head from "next/head";
import BodyWrapper from "./BodyWrapper";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="relative z-0 h-full w-full select-none">
      <Head>
        <title>I&apos;m Sleepy - Bedtime calculator</title>
      </Head>

      <main className="flex min-h-screen flex-col items-center bg-gray-800 py-24 text-gray-200">
        <Header />
        <div className="flex flex-1">{children}</div>
      </main>
    </div>
  );
}
