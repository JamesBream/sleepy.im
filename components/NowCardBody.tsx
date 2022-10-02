import { useRouter } from "next/router";
import RightArrow from "./RightArrow";

export default function NowCardBody() {
  const router = useRouter();

  return (
    <div
      className="flex cursor-pointer items-center justify-between"
      onClick={() => router.push("/now")}
    >
      <div className="flex-1 pr-3">
        I want to sleep <span className="font-semibold">now</span>
      </div>
      <span>
        <RightArrow />
      </span>
    </div>
  );
}
