"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import EnquireDrawer from "./EnquireDrawer";

type EnquireContextValue = {
  open: () => void;
  close: () => void;
};

const EnquireContext = createContext<EnquireContextValue | null>(null);

export function useEnquire() {
  const ctx = useContext(EnquireContext);
  if (!ctx) throw new Error("useEnquire must be used inside <EnquireProvider>");
  return ctx;
}

export default function EnquireProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <EnquireContext.Provider value={value}>
      {children}
      <EnquireDrawer open={isOpen} onClose={close} />
    </EnquireContext.Provider>
  );
}
