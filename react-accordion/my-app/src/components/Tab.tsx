import { PlusButton } from './PlusButton';
import { Topic } from './Accordion';

type TabProps = {
  tab: Topic;
  activeTabId: number;
  setActiveTabId: (value: number) => void;
};

export function Tab({ tab, activeTabId, setActiveTabId }: TabProps) {
  function handleClick() {
    if (tab.id !== activeTabId) {
      setActiveTabId(tab.id);
    } else {
      setActiveTabId(-1);
    }
  }
  return (
    <li className="mb-4 tab-container" onClick={handleClick}>
      <div className="flex items-center justify-between border-b tab-name">
        <h2 className="pb-2 pl-3 text-2xl text-left">{tab.name}</h2>
        <PlusButton isActive={tab.id === activeTabId} />
      </div>
      {activeTabId === tab.id ? (
        <div className="mt-2 tab-info">
          <p className="pl-3 text-left">{tab.info}</p>
        </div>
      ) : (
        ''
      )}
    </li>
  );
}
