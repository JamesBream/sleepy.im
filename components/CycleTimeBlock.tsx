import { SleepCycle } from "../utils/sleep";
import AlarmClockIcon from "./icons/AlarmClockIcon";

type Props = {
  cycle: SleepCycle;
};

export default function CycleTimeBlock({ cycle }: Props) {
  return (
    <div className="flex flex-row items-center rounded-full bg-[#33323E] py-2 px-5">
      <AlarmClockIcon className="w-7" />
      <span className="inline-block w-28 pl-1 text-2xl font-light">
        {cycle.time.toFormat("HH:mm a")}
      </span>
      <div className="flex flex-col pl-1">
        {cycle.count > 4 && (
          <span className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-[8px] font-bold uppercase leading-none text-transparent">
            Recommended
          </span>
        )}
        <span className="text-base font-normal leading-tight">
          {cycle.count} {cycle.count === 1 ? "Cycle" : "Cycles"}
        </span>
      </div>
    </div>
  );
}
