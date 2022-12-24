type Props = {
  children: React.ReactNode;
};

export default function BodyWrapper({ children }: Props): JSX.Element {
  return (
    <div className="my-6 flex w-[24rem] flex-col justify-evenly gap-4 rounded-xl border border-neutral-100/20 bg-[#211F2D] p-3 sm:w-[30rem] sm:gap-8 sm:p-8">
      {children}
    </div>
  );
}
