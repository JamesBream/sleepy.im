import Image from "next/image";
import logo from "../public/logo-sm.webp";

export default function Header() {
  return (
    <div className="flex select-none flex-row">
      <div className="w w-16 sm:w-20">
        <Image src={logo} alt="I'm Sleepy Logo" priority placeholder={"blur"} />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center pl-4">
        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-2xl font-light text-transparent sm:text-3xl">
          I&apos;m Sleepy
        </div>
        <div className="text-sm font-medium uppercase sm:text-base">
          Bedtime calculator
        </div>
      </div>
    </div>
  );
}
