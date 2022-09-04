import { DateTime } from "luxon";
import Link from "next/link";
import { sleepNow, sleepNowFull } from "../utils/sleep";

export default function Now() {
  const sleepNowData = sleepNowFull();

  return (
    <div>
      <p className="pb-5">
        If you go to sleep right now, you should try to wake up at one of the
        following times:
      </p>
      {sleepNowData.map((sleepCycle) => (
        <p key={sleepCycle.cycle}>
          {sleepCycle.time.toLocaleString(DateTime.TIME_SIMPLE)} -{" "}
          {sleepCycle.cycle} cycle(s)
        </p>
      ))}
      <div className="pt-5 font-medium underline">
        <Link href="/">
          <a>Go Back</a>
        </Link>
      </div>
    </div>
  );
}
