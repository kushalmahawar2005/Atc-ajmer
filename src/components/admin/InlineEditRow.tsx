"use client";

import { useState } from "react";
import DeleteButton from "./DeleteButton";
import type { Field } from "./ResourceForm";

/**
 * A table row that swaps into an edit form in place, so editing never
 * navigates away from the list.
 */
export default function InlineEditRow({
  id,
  fields,
  values,
  cells,
  saveAction,
  deleteAction,
  columns,
}: {
  id: number;
  fields: Field[];
  values: Record<string, unknown>;
  cells: React.ReactNode;
  saveAction: (formData: FormData) => void;
  deleteAction: (formData: FormData) => void;
  columns: number;
}) {
  const [editing, setEditing] = useState(false);

  if (!editing) {
    return (
      <tr>
        {cells}
        <td>
          <div className="adm-actions">
            <button
              className="adm-btn adm-btn-ghost adm-btn-sm"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <DeleteButton action={deleteAction} id={id} />
          </div>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td colSpan={columns}>
        <form
          action={(formData) => {
            saveAction(formData);
            setEditing(false);
          }}
          className="adm-form"
          style={{ padding: 0 }}
        >
          <input type="hidden" name="id" value={id} />

          <div className="adm-grid-2">
            {fields
              .filter((field) => field.half)
              .map((field) => (
                <EditField field={field} value={values[field.name]} id={id} key={field.name} />
              ))}
          </div>

          {fields
            .filter((field) => !field.half)
            .map((field) => (
              <EditField field={field} value={values[field.name]} id={id} key={field.name} />
            ))}

          <div className="adm-form-actions">
            <button type="submit" className="adm-btn adm-btn-primary adm-btn-sm">
              Save changes
            </button>
            <button
              type="button"
              className="adm-btn adm-btn-ghost adm-btn-sm"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </td>
    </tr>
  );
}

function EditField({
  field,
  value,
  id,
}: {
  field: Field;
  value: unknown;
  id: number;
}) {
  const inputId = `edit-${id}-${field.name}`;

  if (field.type === "checkbox") {
    return (
      <label className="adm-check">
        <input type="checkbox" name={field.name} defaultChecked={Boolean(value)} />
        {field.label}
      </label>
    );
  }

  return (
    <div className="adm-field">
      <label htmlFor={inputId}>{field.label}</label>
      {field.type === "textarea" ? (
        <textarea
          id={inputId}
          name={field.name}
          defaultValue={String(value ?? "")}
          placeholder={field.placeholder}
          required={field.required}
        />
      ) : (
        <input
          id={inputId}
          name={field.name}
          type={field.type === "number" ? "number" : "text"}
          defaultValue={String(value ?? "")}
          placeholder={field.placeholder}
          required={field.required}
        />
      )}
    </div>
  );
}
