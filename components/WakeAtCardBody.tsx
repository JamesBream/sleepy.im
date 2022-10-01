import { useState } from "react";
import RightArrow from "./RightArrow";

export default function WakeAtCardBody() {
  const [hour, setHour] = useState("09");
  const [minute, setMinute] = useState("00");
  const [ampm, setAmpm] = useState("AM");
  return (
    <div className="flex items-center">
      <span className="mr-4">Wake up at</span>
      <span className="font-semibold">
        <div className="inline-flex items-center rounded-md border border-slate-400 p-1 text-lg shadow-sm">
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
      <RightArrow />
    </div>
  );
}
