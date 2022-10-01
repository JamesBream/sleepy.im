type Props = {
  body: React.ReactNode;
};

export default function ActionCard({ body }: Props): JSX.Element {
  return (
    <div className="h-32 rounded-xl border border-gray-600 bg-slate-500 from-indigo-500 via-purple-500 to-pink-500 p-1 hover:bg-gradient-to-br">
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-slate-500">
        {body}
      </div>
    </div>
  );
}
