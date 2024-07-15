import React, { useEffect, useRef, useState } from 'react';

export function Dialog() {
  const [isOpen, setIsOpen] = useState(false);
  const modal = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    console.log('isOpen', isOpen);
    if (isOpen) {
      modal.current?.showModal();
    } else {
      modal.current?.close();
    }
  }, [isOpen]);

  function handleClick() {
    setIsOpen(true);
  }

  function deleteMe() {
    alert('Deleted');
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={handleClick} className="text-white bg-slate-500">
        Delete Me
      </button>
      <dialog
        ref={modal}
        onClose={() => setIsOpen(false)}
        className={` flex-col items-center gap-6 p-8 bg-slate-50 ${
          isOpen && 'flex'
        }`}>
        <p>Do you really want to delete me?</p>
        <button onClick={deleteMe} className="w-1/2 text-white bg-slate-500">
          Delete
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className="w-1/2 text-white bg-slate-500">
          Cancel
        </button>
      </dialog>
    </>
  );
}
