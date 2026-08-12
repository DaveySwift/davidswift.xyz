"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ConnectDialog } from "@/components/ui/ConnectDialog";

type ConnectContextValue = {
  openConnect: () => void;
  closeConnect: () => void;
};

const ConnectContext = createContext<ConnectContextValue | null>(null);

export function ConnectProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const openConnect = useCallback(() => setOpen(true), []);
  const closeConnect = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ openConnect, closeConnect }),
    [openConnect, closeConnect],
  );

  return (
    <ConnectContext.Provider value={value}>
      {children}
      {open ? (
        <ConnectDialog
          key="connect-dialog"
          open={open}
          onClose={closeConnect}
        />
      ) : null}
    </ConnectContext.Provider>
  );
}

export function useConnect() {
  const context = useContext(ConnectContext);
  if (!context) {
    throw new Error("useConnect must be used within ConnectProvider");
  }
  return context;
}
