type BannerButtonProps = {
  buttonName: string;
  setSelectedIndex: (value: number) => void;
  selectedIndex: number;
  lastIndex: number;
  items?: string[];
  children?: React.ReactNode;
  style?: string;
};

export function BannerButton({
  buttonName,
  setSelectedIndex,
  selectedIndex,
  lastIndex,
}: BannerButtonProps) {
  function handleClick() {
    if (buttonName === 'Next') {
      if (selectedIndex >= lastIndex) {
        setSelectedIndex(0);
      } else {
        setSelectedIndex(selectedIndex + 1);
      }
    } else if (buttonName === 'Prev') {
      if (selectedIndex === 0) {
        setSelectedIndex(lastIndex);
      } else {
        setSelectedIndex(selectedIndex - 1);
      }
    } else {
      setSelectedIndex(parseInt(buttonName));
    }
  }
  return (
    <>
      <button
        onClick={handleClick}
        className={`border-4 border-white rounded-md w-max text-xl font-bold
        ${parseInt(buttonName) === selectedIndex ? 'bg-slate-600' : ''}`}>
        {buttonName !== 'Index' ? buttonName : ''}
      </button>
    </>
  );
}
