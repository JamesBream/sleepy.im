import { useTimeField } from "@react-aria/datepicker";
import { useLocale } from "@react-aria/i18n";
import { useTimeFieldState } from "@react-stately/datepicker";
import { TimePickerProps } from "@react-types/datepicker";
import { useRef } from "react";
import Segment from "./Segment";

type Props = {
  label: string;
  timePickerProps: TimePickerProps<any>;
};

export default function TimeField({ timePickerProps }: Props): JSX.Element {
  const { locale } = useLocale();
  const state = useTimeFieldState({
    ...timePickerProps,
    locale,
  });

  const ref = useRef<HTMLDivElement>(null);

  const { fieldProps } = useTimeField(timePickerProps, state, ref);

  return (
    <div className="flex flex-col items-start">
      {/* <span {...labelProps} className="text-sm text-gray-800">
        {label}
      </span> */}
      <div
        {...fieldProps}
        ref={ref}
        className="flex rounded-md border border-gray-300 bg-white p-1 pr-8 transition-colors focus-within:border-violet-600 hover:border-gray-400 focus-within:hover:border-violet-600"
      >
        {state.segments.map((segment, i) => (
          <Segment key={i} segment={segment} state={state} />
        ))}
      </div>
    </div>
  );
}
