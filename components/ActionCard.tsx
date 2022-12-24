type Props = {
  body: React.ReactNode;
};

export default function ActionCard({ body }: Props): JSX.Element {
  return (
    <div className="h-32 rounded-3xl border border-neutral-100/20 bg-[#33323F] from-indigo-500 via-purple-500 to-pink-500 p-1 hover:bg-gradient-to-br">
      <div className="flex h-full w-full items-center justify-center rounded-[1.25rem] bg-[#33323F]">
        {body}
      </div>
    </div>
  );
}
