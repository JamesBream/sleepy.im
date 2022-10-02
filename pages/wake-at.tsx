import { DateTime } from "luxon";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import CycleTimeBlock from "../components/CycleTimeBlock";
import { wakeUpAt } from "../utils/sleep";

export default function WakeAt() {
  const router = useRouter();
  const query = router.query;

  const wakeAt = DateTime.local().set({
    hour: parseInt((query.hour as string) || "0"),
    minute: parseInt((query.minute as string) || "0"),
  });

  const sleepNowData = wakeUpAt(wakeAt);

  return (
    <motion.div
      className="flex h-full flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="pb-5 text-lg font-light">
        If you want to wake at {wakeAt.toLocaleString(DateTime.TIME_24_SIMPLE)},
        you should try to fall asleep at one of the following times:
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
    </motion.div>
  );
}
