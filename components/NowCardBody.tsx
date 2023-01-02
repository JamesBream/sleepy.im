import { useRouter } from "next/router";
import IconButton from "./IconButton";
import RightArrow from "./RightArrow";

export default function NowCardBody() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      <div className="flex-1 pr-3">
        I want to sleep <span className="font-semibold">now</span>
      </div>

      <IconButton
        onClick={() => router.push("/now")}
        label={"Submit sleep now"}
      >
        <RightArrow />
      </IconButton>
    </div>
  );
}
