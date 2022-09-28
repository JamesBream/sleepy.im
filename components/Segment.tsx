import { useDateSegment } from "@react-aria/datepicker";
import { DateFieldState, DateSegment } from "@react-stately/datepicker";
import { useRef } from "react";

type Props = {
  segment: DateSegment;
  state: DateFieldState;
};

export default function Segment({ segment, state }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <div
      {...segmentProps}
      ref={ref}
      style={{
        // ...segmentProps.style,
        minWidth: "2ch",
      }}
      className={`group box-content rounded-sm px-0.5 text-right tabular-nums outline-none focus:bg-violet-600 focus:text-white ${
        !segment.isEditable ? "text-gray-500" : "text-gray-800"
      }`}
    >
      {/* Always reserve space for the placeholder, to prevent layout shift when editing. */}
      <span
        aria-hidden="true"
        className={
          "pointer-events-none block w-full text-center italic text-gray-500 group-focus:text-white " +
          `${segment.isPlaceholder ? "visible" : "hidden h-0"}`
        }
        // style={{
        //   visibility: segment.isPlaceholder ? "visible" : "hidden",
        //   height: segment.isPlaceholder ? "" : 0,
        //   pointerEvents: "none",
        // }}
      >
        {segment.placeholder}
      </span>
      {segment.isPlaceholder ? "" : segment.text}
    </div>
  );
}
