type BannerButtonProps = {
  buttonName: string;
  setSelectedIndex: (value: number) => void;
  selectedIndex: number;
  lastIndex: number;
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
    } else {
      if (selectedIndex === 0) {
        setSelectedIndex(lastIndex);
      } else {
        setSelectedIndex(selectedIndex - 1);
      }
    }
  }
  return (
    <>
      <button
        onClick={handleClick}
        className="border-4 border-white rounded-none w-max">
        {buttonName}
      </button>
    </>
  );
}
