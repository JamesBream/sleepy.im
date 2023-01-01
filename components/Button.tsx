type Props = {
  children: React.ReactNode;
};

function Button({ children }: Props) {
  return (
    <div className="rounded-full border border-slate-100/20 from-indigo-500 via-purple-500 to-pink-500 py-2 px-4 no-underline hover:bg-gradient-to-br">
      {children}
    </div>
  );
}

export default Button;
