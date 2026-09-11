"use client";

import { createContext, useContext, useEffect, useState } from "react";

type AdminNavValue = { open: boolean; setOpen: (open: boolean) => void };

const AdminNavContext = createContext<AdminNavValue | null>(null);

export function useAdminNav() {
  const value = useContext(AdminNavContext);
  if (!value) throw new Error("useAdminNav must be used inside AdminNavProvider.");
  return value;
}

/** Holds the mobile drawer state shared by the topbar toggle and the sidebar. */
export function AdminNavProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    // Stop the page behind the drawer from scrolling under it.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return <AdminNavContext.Provider value={{ open, setOpen }}>{children}</AdminNavContext.Provider>;
}

/** Hamburger shown in the topbar below the sidebar breakpoint. */
export function SidebarToggle() {
  const { open, setOpen } = useAdminNav();

  return (
    <button
      type="button"
      className="adm-nav-toggle"
      aria-label={open ? "Close navigation" : "Open navigation"}
      aria-expanded={open}
      aria-controls="adm-sidebar"
      onClick={() => setOpen(!open)}
    >
      <i className={open ? "fas fa-xmark" : "fas fa-bars"} aria-hidden="true" />
    </button>
  );
}
