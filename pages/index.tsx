import ActionCard from "../components/ActionCard";
import NowCardBody from "../components/NowCardBody";

export default function Index(): JSX.Element {
  return (
    <>
      <ActionCard body={<NowCardBody />} href="/now" />
      <ActionCard body={<NowCardBody />} href="#" />
      <ActionCard body={<NowCardBody />} href="#  " />

      {/* <ActionCard body={<LaterCardBody />} href="/later" /> */}
    </>
  );
}
