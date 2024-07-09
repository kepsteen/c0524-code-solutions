import { useState } from 'react';
import { Tab } from './Tab';

export interface Topic {
  id: number;
  name: string;
  info: string;
}

const tabs: Topic[] = [
  {
    id: 1,
    name: 'Lost',
    info: "'Lost' is a dramatic and suspenseful series that follows the survivors of Oceanic Flight 815, who crash on a mysterious island. As they struggle for survival, they encounter strange phenomena, hidden dangers, and a series of enigmatic characters. The show intertwines their backstories with the island's secrets, leading to a complex narrative of fate, science fiction, and supernatural elements.",
  },
  {
    id: 2,
    name: 'Prison Break',
    info: "'Prison Break' revolves around Michael Scofield, a brilliant structural engineer who devises an elaborate plan to break his wrongly accused brother, Lincoln Burrows, out of prison. The show focuses on Michael's meticulous escape plan, the challenges they face inside and outside prison, and their ongoing struggle to prove Lincoln's innocence against a backdrop of political conspiracy.",
  },
  {
    id: 3,
    name: 'Breaking Bad',
    info: "'Breaking Bad' follows Walter White, a high school chemistry teacher turned methamphetamine manufacturer, after being diagnosed with terminal cancer. To secure his family's financial future, he partners with former student Jesse Pinkman to produce and sell meth. The series explores Walter's transformation from a mild-mannered teacher to a ruthless drug kingpin, highlighting themes of morality, ambition, and consequences.",
  },
  {
    id: 4,
    name: 'Game of Thrones',
    info: "'Game of Thrones' is an epic fantasy series based on George R.R. Martin's 'A Song of Ice and Fire' novels. Set in the fictional continents of Westeros and Essos, it chronicles the power struggles among noble families as they vie for control of the Iron Throne. The series features a vast ensemble cast, intricate political intrigue, fantastical elements like dragons and magic, and explores themes of power, betrayal, and survival.",
  },
];
export function Accordion() {
  const [activeTabId, setActiveTabId] = useState<number>(0);

  return (
    <div className="w-screen mx-6 sm:w-[400px] accordion-container">
      <ul>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            tab={tab}
            activeTabId={activeTabId}
            setActiveTabId={setActiveTabId}
          />
        ))}
      </ul>
    </div>
  );
}
