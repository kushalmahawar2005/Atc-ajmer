"use client";

import { useState } from "react";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "textarea" | "number" | "checkbox" | "url";
  placeholder?: string;
  required?: boolean;
  half?: boolean;
};

/**
 * Collapsible "add new" form driven by a field list, so every resource page
 * gets the same layout without repeating the markup.
 */
export default function ResourceForm({
  action,
  fields,
  addLabel,
}: {
  action: (formData: FormData) => void;
  fields: Field[];
  addLabel: string;
}) {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button className="adm-btn adm-btn-primary adm-btn-sm" onClick={() => setOpen(true)}>
        <i className="fas fa-plus" aria-hidden="true" /> {addLabel}
      </button>
    );
  }

  const halves = fields.filter((field) => field.half);
  const fulls = fields.filter((field) => !field.half);

  return (
    <form
      action={(formData) => {
        action(formData);
        setOpen(false);
      }}
      className="adm-form"
      style={{ padding: 0, width: "100%" }}
    >
      <div className="adm-grid-2">
        {halves.map((field) => (
          <FieldInput field={field} key={field.name} />
        ))}
      </div>

      {fulls.map((field) => (
        <FieldInput field={field} key={field.name} />
      ))}

      <div className="adm-form-actions">
        <button type="submit" className="adm-btn adm-btn-primary adm-btn-sm">
          Save
        </button>
        <button
          type="button"
          className="adm-btn adm-btn-ghost adm-btn-sm"
          onClick={() => setOpen(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

function FieldInput({ field }: { field: Field }) {
  if (field.type === "checkbox") {
    return (
      <label className="adm-check">
        <input type="checkbox" name={field.name} defaultChecked />
        {field.label}
      </label>
    );
  }

  return (
    <div className="adm-field">
      <label htmlFor={`new-${field.name}`}>{field.label}</label>
      {field.type === "textarea" ? (
        <textarea
          id={`new-${field.name}`}
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
        />
      ) : (
        <input
          id={`new-${field.name}`}
          name={field.name}
          type={field.type === "number" ? "number" : "text"}
          placeholder={field.placeholder}
          required={field.required}
          defaultValue={field.type === "number" ? 0 : undefined}
        />
      )}
    </div>
  );
}
