import ActionCard from "../components/ActionCard";
import NowCardBody from "../components/NowCardBody";
import SleepAtCardBody from "../components/SleepAtCardBody";
import WakeAtCardBody from "../components/WakeAtCardBody";

export default function Index(): JSX.Element {
  return (
    <>
      <ActionCard body={<NowCardBody />} />
      <ActionCard body={<SleepAtCardBody />} />
      <ActionCard body={<WakeAtCardBody />} />
    </>
  );
}
