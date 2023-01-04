import { useRouter } from "next/router";
import { useState } from "react";
import IconButton from "./IconButton";
import RightArrowIcon from "./icons/RightArrowIcon";

export default function WakeAtCardBody() {
  const [hour, setHour] = useState("08");
  const [minute, setMinute] = useState("00");
  const [ampm, setAmpm] = useState("AM");

  const router = useRouter();

  const handleClick = () => {
    let hourInt = parseInt(hour);
    const minuteInt = parseInt(minute);

    if (hourInt === 12) {
      hourInt = 0;
    }

    if (ampm === "PM") {
      hourInt = hourInt + 12;
    }

    router.push("/wake-at?hour=" + hourInt + "&minute=" + minuteInt);
  };

  return (
    <div className="flex items-center">
      <span className="mr-4">I&apos;ll wake up at</span>
      <span className="pr-4 font-semibold">
        <div className="inline-flex items-center rounded-md border border-slate-100/20 bg-[#211F2D] p-1 text-lg shadow-sm">
          <select
            name=""
            id=""
            value={hour}
            onChange={(e) => setHour(e.target.value)}
            className="rounded-lg border-none bg-transparent bg-none px-2 outline-none focus:bg-slate-100/20 focus:ring-purple-500"
          >
            {Array.from(Array(12).keys()).map((i) => (
              <option key={i} value={(i + 1).toString().padStart(2, "0")}>
                {(i + 1).toString().padStart(2, "0")}
              </option>
            ))}
          </select>
          <span className="px-2">:</span>
          <select
            name=""
            id=""
            value={minute}
            onChange={(e) => setMinute(e.target.value)}
            className="rounded-lg border-none bg-transparent bg-none px-2 outline-none focus:bg-slate-100/20 focus:ring-purple-500"
          >
            {Array.from(Array(12).keys()).map((i) => (
              <option key={i} value={(i * 5).toString().padStart(2, "0")}>
                {(i * 5).toString().padStart(2, "0")}
              </option>
            ))}
          </select>
          <select
            name=""
            id=""
            value={ampm}
            onChange={(e) => setAmpm(e.target.value)}
            className="rounded-lg border-none bg-transparent bg-none px-2 outline-none focus:bg-slate-100/20 focus:ring-purple-500"
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </span>
      <IconButton onClick={handleClick} label={"Submit wake-up time"}>
        <RightArrowIcon />
      </IconButton>
    </div>
  );
}
