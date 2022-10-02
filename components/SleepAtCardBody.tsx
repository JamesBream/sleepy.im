import { useRouter } from "next/router";
import { useState } from "react";
import RightArrow from "./RightArrow";

export default function SleepAtCardBody() {
  const [hour, setHour] = useState("10");
  const [minute, setMinute] = useState("00");
  const [ampm, setAmpm] = useState("PM");

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

    router.push("/sleep-at?hour=" + hourInt + "&minute=" + minuteInt);
  };

  return (
    <div className="flex items-center">
      <span className="mr-4">I&apos;ll fall asleep at</span>
      <span className="pr-4 font-semibold">
        <div className="bnoworder-slate-400 inline-flex items-center rounded-md border p-1 text-lg shadow-sm">
          <select
            name=""
            id=""
            value={hour}
            onChange={(e) => setHour(e.target.value)}
            className="appearance-none rounded-lg bg-transparent px-2 outline-none focus:bg-slate-400 focus:outline-hidden"
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
            className="appearance-none rounded-lg bg-transparent px-2 outline-none focus:bg-slate-400 focus:outline-hidden"
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
            className="appearance-none rounded-lg bg-transparent px-2 outline-none focus:bg-slate-400 focus:outline-hidden"
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </span>
      <span className="cursor-pointer" onClick={handleClick}>
        <RightArrow />
      </span>
    </div>
  );
}
