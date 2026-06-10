import { useEffect, useRef, type ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children: ReactNode;
}

/**
 * Elements that can receive keyboard focus.
 * Used for initial focus and focus trapping.
 */
const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function Modal({
  isOpen,
  title,
  description,
  onClose,
  children,
}: Readonly<ModalProps>) {
  /**
   * Reference to the dialog container.
   */
  const dialogRef = useRef<HTMLDivElement>(null);

  /**
   * Stores the element that had focus before the modal opened.
   * Focus will be restored when the modal closes.
   */
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    /**
     * Save the currently focused element so we can restore it later.
     */
    previouslyFocusedElement.current = document.activeElement as HTMLElement;

    const dialog = dialogRef.current;

    if (!dialog) return;

    /**
     * Move focus into the modal when it opens.
     *
     * WCAG expectation:
     * Users should immediately enter the dialog context.
     */
    const focusableElements =
      dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);

    focusableElements[0]?.focus();

    /**
     * Handle keyboard interactions:
     * - Escape closes the dialog
     * - Tab / Shift+Tab trap focus within the dialog
     */
    const handleKeyDown = (event: KeyboardEvent) => {
      /**
       * ESC closes the modal.
       */
      if (event.key === "Escape") {
        onClose();
        return;
      }

      /**
       * Only process focus trapping for Tab.
       */
      if (event.key !== "Tab") {
        return;
      }

      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      );

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) return;

      /**
       * Shift + Tab on first element
       * wraps focus to the last element.
       */
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }

      /**
       * Tab on last element
       * wraps focus back to the first element.
       */
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      /**
       * Restore focus to the element
       * that opened the modal.
       */
      previouslyFocusedElement.current?.focus();
    };
  }, [isOpen, onClose]);

  /**
   * Do not render anything when closed.
   */
  if (!isOpen) {
    return null;
  }

  /**
   * Close only when clicking the overlay.
   * Clicks inside the dialog should not close it.
   */
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleOverlayClick}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby={description ? "modal-description" : undefined}
        className="w-full max-w-lg rounded bg-white p-6 shadow-lg"
      >
        {/*
          Accessible name for the dialog.

          Screen readers announce:
          "Dialog, {title}"
        */}
        <h2 id="modal-title" className="text-xl font-semibold">
          {title}
        </h2>

        {/*
          Optional description announced
          when the dialog receives focus.
        */}
        {description && (
          <p id="modal-description" className="mt-2 text-gray-600">
            {description}
          </p>
        )}

        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
