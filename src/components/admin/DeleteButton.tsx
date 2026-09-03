"use client";

/**
 * Delete control with an inline confirm step — a browser `confirm()` dialog
 * would block the page, so the button asks for a second click instead.
 */
import { useState } from "react";

export default function DeleteButton({
  action,
  id,
  label = "Delete",
}: {
  action: (formData: FormData) => void;
  id: number;
  label?: string;
}) {
  const [armed, setArmed] = useState(false);

  if (!armed) {
    return (
      <button
        type="button"
        className="adm-btn adm-btn-danger adm-btn-sm"
        onClick={() => setArmed(true)}
      >
        {label}
      </button>
    );
  }

  return (
    <form action={action} className="adm-actions">
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="adm-btn adm-btn-danger adm-btn-sm">
        Confirm
      </button>
      <button
        type="button"
        className="adm-btn adm-btn-ghost adm-btn-sm"
        onClick={() => setArmed(false)}
      >
        Cancel
      </button>
    </form>
  );
}
