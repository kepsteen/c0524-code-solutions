type Props = {
  isActive: boolean;
  onToggle: () => void;
};

export function SwitchContainer({ isActive, onToggle }: Props) {
  return (
    <>
      <div
        onClick={onToggle}
        className="flex items-center gap-3 toggle-switch-container">
        <div
          className={`slider w-20 min-h-10 relative shadow-md
          ${isActive ? 'bg-jade' : 'bg-grey'}
          rounded-l-full rounded-r-full`}>
          <div
            className={`toggle-button w-10 min-h-10 relative border border-gray-400 ${
              isActive ? 'translate-x-10' : '-translate-x-0'
            } transition-transform bg-white rounded-full`}></div>
        </div>
        <p className={`text-2xl ${isActive ? 'text-black' : 'text-white'}`}>{`${
          isActive ? 'ON' : 'OFF'
        }`}</p>
      </div>
    </>
  );
}
