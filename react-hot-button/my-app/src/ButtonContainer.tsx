type Props = {
  count: number;
  onButtonClick: () => void;
};

const colors = {
  black: 'bg-black',
  purple: 'bg-purple-900',
  lightpurple: 'bg-purple-700',
  red: 'bg-red-500',
  orange: 'bg-orange-500 text-black',
  yellow: 'bg-yellow-500 text-black',
  white: 'bg-white text-black',
};

export function ButtonContainer({ count, onButtonClick }: Props) {
  let color;
  if (count < 3) {
    color = colors.black;
  } else if (count < 6) {
    color = colors.purple;
  } else if (count < 9) {
    color = colors.lightpurple;
  } else if (count < 12) {
    color = colors.red;
  } else if (count < 15) {
    color = colors.orange;
  } else if (count < 18) {
    color = colors.yellow;
  } else {
    color = colors.white;
  }
  return (
    <>
      <button type="button" onClick={onButtonClick} className={color}>
        I'm a Button
      </button>
      <p>Clicks: {count}</p>
    </>
  );
}
