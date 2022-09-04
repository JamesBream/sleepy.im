type Props = {
  children: React.ReactNode;
};

export default function BodyWrapper({ children }: Props): JSX.Element {
  return (
    <>
      {/* <div className="mt-10 rounded-lg bg-gray-700 p-3">
        <p>Choose an option</p>
      </div> */}
      <div className="">{children}</div>
    </>
  );
}
