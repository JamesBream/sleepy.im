type Props = {
  className?: string;
};

export default function AlarmClockIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className || "w-6"}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m7 18-1.25 1.25M17 18l1.25 1.25M12 8.75V12l2.25 2.25"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19.25 12a7.25 7.25 0 1 1-14.5 0 7.25 7.25 0 0 1 14.5 0ZM18.75 4.75l.5.5M5.25 4.75l-.5.5"
      />
    </svg>
  );
}
