type BannerProps = {
  items: string[];
  selectedIndex: number;
  setSelectedIndex: (value: number) => void;
};

export function RotatingBanner({
  items,
  selectedIndex,
  setSelectedIndex,
}: BannerProps) {
  function handleClick(event: React.MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.textContent) return;
    setSelectedIndex(parseInt(target.textContent));
  }
  return (
    <>
      <ul className="flex gap-4">
        {items.map((item, index) => (
          <li key={item}>
            <button
              onClick={(e) => handleClick(e)}
              className={`flex items-center justify-center p-0 text-4xl border-4 border-white rounded-none w-11 h-11 ${
                selectedIndex === index ? 'bg-slate-700' : ''
              }`}>
              {index}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
