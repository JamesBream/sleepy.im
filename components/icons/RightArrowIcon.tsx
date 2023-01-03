type Props = {
  className?: string;
};

export default function RightArrowIcon({ className }: Props) {
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
        d="m13.75 6.75 5.5 5.25-5.5 5.25M19 12H4.75"
      />
    </svg>
  );
}
