import { useRouter } from "next/router";
import RightArrow from "./RightArrow";

export default function ActionCard() {
  const router = useRouter();

  return (
    <div
      className="my-10 flex cursor-pointer flex-row gap-3 rounded-md border border-gray-600 bg-gray-700 p-10"
      onClick={() => router.push("/now")}
    >
      <p>
        I want to sleep <span className="font-semibold">now</span>
      </p>
      <RightArrow />
    </div>
  );
}
