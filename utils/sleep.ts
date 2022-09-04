import { DateTime, Duration } from "luxon";

// Perhaps this could be user configurable in future
const timeToFallAsleepMinutes = 15;
const numberOfCycles = 6;
const cycleMinutes = 90;

export function sleepNow(): DateTime[] {
  // 1. Get the current time and add the time to fall asleep
  const now = DateTime.local().plus({ minutes: timeToFallAsleepMinutes });

  const cycles = new Array<DateTime>();
  for (let i = 0; i < numberOfCycles; i++) {
    const cycle = i + 1;

    cycles.push(now.plus({ minutes: cycleMinutes * cycle }));
  }

  return cycles;
}

export function sleepNowFull(): SleepCycle[] {
  // 1. Get the current time and add the time to fall asleep
  const asleep = DateTime.local().plus({ minutes: timeToFallAsleepMinutes });

  const cycles = [...Array(numberOfCycles)].map((_, i) => {
    const cycle = i + 1;
    const time = asleep.plus({ minutes: cycleMinutes * cycle });

    return {
      cycle,
      time,
      duration: time.diff(asleep),
    };
  });

  return cycles;
}

interface SleepCycle {
  cycle: number;
  time: DateTime;
  duration: Duration;
}
