import { DateTime, Duration } from "luxon";

// Perhaps this could be user configurable in future
const timeToFallAsleepMinutes = 15;
const numberOfCycles = 6;
const cycleMinutes = 90;

export function sleepNowFull(
  asleepAt: DateTime = DateTime.local()
): SleepCycle[] {
  // 1. Get the current time and add the time to fall asleep
  const asleep = asleepAt.plus({ minutes: timeToFallAsleepMinutes });

  const cycles = [...Array(numberOfCycles)].map((_, i) => {
    const cycleCount = i + 1;
    const time = asleep.plus({ minutes: cycleMinutes * cycleCount });

    return {
      count: cycleCount,
      time,
      duration: time.diff(asleep),
    };
  });

  return cycles;
}

export interface SleepCycle {
  count: number;
  time: DateTime;
  duration: Duration;
}
