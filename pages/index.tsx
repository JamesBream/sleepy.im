import ActionCard from "../components/ActionCard";
import NowCardBody from "../components/NowCardBody";
import SleepAtCardBody from "../components/SleepAtCardBody";
import WakeAtCardBody from "../components/WakeAtCardBody";

export default function Index(): JSX.Element {
  return (
    <>
      <div className="text-center">Select an option to calculate bedtime</div>
      <ActionCard body={<NowCardBody />} />
      <ActionCard body={<SleepAtCardBody />} />
      <ActionCard body={<WakeAtCardBody />} />
      <div className="text-center text-sm text-gray-300">
        All times assume 15 minutes to fall asleep
      </div>
    </>
  );
}
