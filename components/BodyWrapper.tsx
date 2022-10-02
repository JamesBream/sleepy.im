type Props = {
  children: React.ReactNode;
};

export default function BodyWrapper({ children }: Props): JSX.Element {
  return (
    <>
      <div className="my-6 flex w-128 flex-col gap-8 rounded-xl bg-slate-700 p-8">
        {children}
      </div>
    </>
  );
}
