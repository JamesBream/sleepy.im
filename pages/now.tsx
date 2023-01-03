import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../components/Button";
import CycleTimeBlock from "../components/CycleTimeBlock";
import { sleepAt } from "../utils/sleep";

export default function Now() {
  const sleepNowData = sleepAt();

  return (
    <motion.div
      className="flex h-full flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="pb-5 text-center font-light sm:text-lg">
        If you go to bed right now, you should try to wake up at one of the
        following times:
      </div>
      <div className="flex flex-1 flex-col gap-2">
        {sleepNowData.map((sleepCycle) => (
          <CycleTimeBlock key={sleepCycle.count} cycle={sleepCycle} />
        ))}
      </div>
      <div className="pt-3 font-medium sm:pt-8">
        <Link href="/">
          <Button>Go Back</Button>
        </Link>
      </div>
    </motion.div>
  );
}
