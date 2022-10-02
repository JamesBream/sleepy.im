import { DateTime } from "luxon";
import Link from "next/link";
import { useRouter } from "next/router";
import CycleTimeBlock from "../components/CycleTimeBlock";
import { fallAsleepAt } from "../utils/sleep";

export default function SleepAt() {
  const router = useRouter();
  const query = router.query;

  const sleepAt = DateTime.local().set({
    hour: parseInt((query.hour as string) || "0"),
    minute: parseInt((query.minute as string) || "0"),
  });

  const sleepNowData = fallAsleepAt(sleepAt);

  return (
    <div className="flex h-full flex-col items-center">
      <div className="pb-5 text-lg font-light">
        If you fall asleep at {sleepAt.toLocaleString(DateTime.TIME_24_SIMPLE)},
        you should try to wake up at one of the following times:
      </div>
      <div className="flex flex-1 flex-col gap-2">
        {sleepNowData.map((sleepCycle) => (
          <CycleTimeBlock key={sleepCycle.count} cycle={sleepCycle} />
        ))}
      </div>
      <div className="pt-5 font-medium underline">
        <Link href="/">
          <a>Go Back</a>
        </Link>
      </div>
    </div>
  );
}
