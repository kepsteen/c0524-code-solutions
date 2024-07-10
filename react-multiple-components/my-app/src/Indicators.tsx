import { BannerButton } from './BannerButton';

type BannerProps = {
  items: string[];
  selectedIndex: number;
  setSelectedIndex: (value: number) => void;
  lastIndex: number;
};

export function Indicators({
  items,
  selectedIndex,
  setSelectedIndex,
  lastIndex,
}: BannerProps) {
  return (
    <>
      <ul className="flex gap-4">
        {items.map((item, index) => (
          <li key={item}>
            <BannerButton
              buttonName={`${index}`}
              setSelectedIndex={setSelectedIndex}
              selectedIndex={selectedIndex}
              lastIndex={lastIndex}
              items={items}></BannerButton>
          </li>
        ))}
      </ul>
    </>
  );
}
