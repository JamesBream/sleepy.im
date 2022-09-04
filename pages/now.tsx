import { DateTime } from "luxon";
import { sleepNow, sleepNowFull } from "../utils/sleep";

export default function Now() {
  const sleepNowData = sleepNowFull();

  return (
    <div>
      <p>
        If you go to sleep right now, you should try to wake up at one of the
        following times:
      </p>
      {sleepNowData.map((sleepCycle) => (
        <p key={sleepCycle.cycle}>
          {sleepCycle.time.toLocaleString(DateTime.TIME_SIMPLE)} -{" "}
          {sleepCycle.cycle} cycle(s)
        </p>
      ))}
    </div>
  );
}
