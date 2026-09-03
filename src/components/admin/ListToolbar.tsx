"use client";

import { useRouter, useSearchParams } from "next/navigation";

export type Tab = { key?: string; label: string };

/**
 * Shared list controls: status tabs, a date range, sort direction and a CSV
 * export that carries the current filters through to the download.
 */
export default function ListToolbar({
  basePath,
  paramName,
  tabs,
}: {
  basePath: string;
  paramName: string;
  tabs: Tab[];
}) {
  const router = useRouter();
  const params = useSearchParams();

  const current = params.get(paramName) ?? undefined;
  const from = params.get("from") ?? "";
  const to = params.get("to") ?? "";
  const order = params.get("order") === "asc" ? "asc" : "desc";

  function update(changes: Record<string, string | undefined>) {
    const next = new URLSearchParams(params.toString());
    for (const [key, value] of Object.entries(changes)) {
      if (value) next.set(key, value);
      else next.delete(key);
    }
    router.push(`${basePath}?${next.toString()}`);
  }

  const exportHref = `${basePath}/export?${params.toString()}`;

  return (
    <div className="adm-toolbar">
      <div className="adm-actions">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`adm-btn adm-btn-sm ${
              current === tab.key ? "adm-btn-primary" : "adm-btn-ghost"
            }`}
            onClick={() => update({ [paramName]: tab.key })}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="adm-toolbar-right">
        <label className="adm-inline-field">
          <span>From</span>
          <input
            type="date"
            value={from}
            onChange={(event) => update({ from: event.target.value })}
          />
        </label>
        <label className="adm-inline-field">
          <span>To</span>
          <input
            type="date"
            value={to}
            onChange={(event) => update({ to: event.target.value })}
          />
        </label>

        <button
          className="adm-btn adm-btn-ghost adm-btn-sm"
          onClick={() => update({ order: order === "desc" ? "asc" : undefined })}
          title="Sort by date"
        >
          <i
            className={order === "desc" ? "fas fa-arrow-down-wide-short" : "fas fa-arrow-up-short-wide"}
            aria-hidden="true"
          />
          {order === "desc" ? "Newest first" : "Oldest first"}
        </button>

        {(from || to || current) && (
          <button
            className="adm-btn adm-btn-ghost adm-btn-sm"
            onClick={() => update({ from: undefined, to: undefined, [paramName]: undefined })}
          >
            Clear
          </button>
        )}

        <a className="adm-btn adm-btn-primary adm-btn-sm" href={exportHref}>
          <i className="fas fa-file-csv" aria-hidden="true" /> Export CSV
        </a>
      </div>
    </div>
  );
}
