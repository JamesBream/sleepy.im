import { DateTime, Duration } from "luxon";

// Perhaps this could be user configurable in future
const timeToFallAsleepMinutes = 15;
const numberOfCycles = 6;
const cycleMinutes = 90;

export interface SleepCycle {
  count: number;
  time: DateTime;
  duration: Duration;
}

/**
 * Generates an array of SleepCycle based on the time to sleep provided
 * @param asleepAt - The time to sleep (defaults to current time)
 * @returns An array of SleepCycle
 */
export function sleepAt(asleepAt: DateTime = DateTime.local()): SleepCycle[] {
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

/**
 * Generates an array of SleepCycle based on the time to wake up provided
 * @param wakeUpAt - The time to wake up
 * @returns An array of SleepCycle
 */
export function wakeUpAt(wakeUpAt: DateTime): SleepCycle[] {
  const cycles = [...Array(numberOfCycles)].map((_, i) => {
    const cycleCount = i + 1;
    const time = wakeUpAt.minus({ minutes: cycleMinutes * cycleCount });

    return {
      count: cycleCount,
      time,
      duration: wakeUpAt.diff(time),
    };
  });

  return cycles.reverse();
}
