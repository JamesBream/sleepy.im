import { DateTime } from "luxon";
import { SleepCycle } from "../utils/sleep";

type Props = {
  cycle: SleepCycle;
};

export default function CycleTimeBlock({ cycle }: Props) {
  return (
    <div className="py-1">
      <span className="mr-1 inline-block w-20 text-3xl font-medium">
        {cycle.time.toLocaleString(DateTime.TIME_SIMPLE)}
      </span>
      <span className="text-sm font-semibold uppercase">
        {cycle.count} cycle(s)
      </span>
    </div>
  );
}
