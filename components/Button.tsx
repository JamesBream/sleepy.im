type Props = {
  children: React.ReactNode;
};

function Button({ children }: Props) {
  return (
    <button className="relative overflow-hidden rounded-full border border-slate-100/20 py-2 px-4 no-underline">
      {/* An ugly workaround to not being able to use CSS transitions on linear-gradients :( */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 pt-2 opacity-0 transition-opacity hover:opacity-100">
        {children}
      </div>
      {children}
    </button>
  );
}

export default Button;
