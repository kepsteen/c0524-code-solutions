type Props = {
  isActive: boolean;
};

export function PlusButton({ isActive }: Props) {
  return (
    <div className="relative pr-6 plus">
      <div className="absolute w-4 h-[2px] bg-white rounded-lg bottom-2"></div>
      <div
        className={`absolute w-4 h-[2px] rotate-90 bg-white rounded-lg bottom-2 ${
          isActive ? 'hidden' : ''
        }`}></div>
    </div>
  );
}
