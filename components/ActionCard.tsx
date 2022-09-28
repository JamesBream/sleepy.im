import { useRouter } from "next/router";
import RightArrow from "./RightArrow";

type Props = {
  body: React.ReactNode;
  href: string;
};

export default function ActionCard({ body, href }: Props): JSX.Element {
  const router = useRouter();

  return (
    <div
      className="flex cursor-pointer flex-row justify-end gap-3 rounded-xl border border-gray-600 bg-slate-500 p-10"
      onClick={() => router.push(href)}
    >
      <div className="flex flex-1 justify-center">{body}</div>
      <RightArrow />
    </div>
  );
}
