type Props = {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
};

function IconButton({ children, onClick, label }: Props) {
  return (
    <button
      className="rounded-full p-1 transition hover:bg-slate-200/20 focus:bg-slate-200/20"
      onClick={onClick}
      aria-label={label}
    >
      {children}
    </button>
  );
}

export default IconButton;
