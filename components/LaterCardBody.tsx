import TimeField from "./TimeField";

export default function LaterCardBody() {
  return (
    <div className="flex flex-row">
      <div className="pr-5">I will sleep at</div>
      <TimeField label="" timePickerProps={{}} />
    </div>
  );
}
