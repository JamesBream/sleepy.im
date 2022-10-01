import ActionCard from "../components/ActionCard";
import NowCardBody from "../components/NowCardBody";
import WakeAtCardBody from "../components/WakeAtCardBody";

export default function Index(): JSX.Element {
  return (
    <>
      <ActionCard body={<NowCardBody />} />
      <ActionCard body={<WakeAtCardBody />} />
      <ActionCard body={<WakeAtCardBody />} />
    </>
  );
}
