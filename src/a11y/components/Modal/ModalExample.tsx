import { useState } from "react";
import { Modal } from "./Modal";

export function ModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        Open Modal
      </button>

      <Modal
        isOpen={open}
        title="Delete Item"
        description="This action cannot be undone."
        onClose={() => setOpen(false)}
      >
        <p>Are you sure you want to continue?</p>

        <div className="mt-4 flex gap-2">
          <button onClick={() => setOpen(false)}>Cancel</button>

          <button>Delete</button>
        </div>
      </Modal>
    </>
  );
}
