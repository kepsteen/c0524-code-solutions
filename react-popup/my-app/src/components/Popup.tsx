import React from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  positionTo: React.RefObject<HTMLButtonElement>;
  onClose: () => void;
};

export function Popup({ children, isOpen, positionTo, onClose }: Props) {
  if (!isOpen || !positionTo.current) return null;
  const r = positionTo.current.getBoundingClientRect();
  const top = r ? r.top + r.height : '50%';
  const left = r ? r.left + r.width / 2 : '50%';
  return createPortal(
    <>
      <div
        onClick={onClose}
        className="absolute top-0 bottom-0 left-0 right-0 overlay bg-overlay"></div>
      <ul className={`absolute top-{${top}px} left-[${left}px]`}>{children}</ul>
    </>,
    positionTo.current
  );
}
