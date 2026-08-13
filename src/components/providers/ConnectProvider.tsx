"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ConnectDialog } from "@/components/ui/ConnectDialog";
import { MailingListDialog } from "@/components/ui/MailingListDialog";

type ConnectContextValue = {
  openConnect: () => void;
  closeConnect: () => void;
  openMailingList: (ventureName: string) => void;
};

const ConnectContext = createContext<ConnectContextValue | null>(null);

export function ConnectProvider({ children }: { children: React.ReactNode }) {
  const [connectOpen, setConnectOpen] = useState(false);
  const [mailingListVenture, setMailingListVenture] = useState<string | null>(
    null,
  );

  const openConnect = useCallback(() => setConnectOpen(true), []);
  const closeConnect = useCallback(() => setConnectOpen(false), []);
  const openMailingList = useCallback((ventureName: string) => {
    setMailingListVenture(ventureName);
  }, []);
  const closeMailingList = useCallback(() => setMailingListVenture(null), []);

  const value = useMemo(
    () => ({ openConnect, closeConnect, openMailingList }),
    [openConnect, closeConnect, openMailingList],
  );

  return (
    <ConnectContext.Provider value={value}>
      {children}
      {connectOpen ? (
        <ConnectDialog
          key="connect-dialog"
          open={connectOpen}
          onClose={closeConnect}
        />
      ) : null}
      {mailingListVenture ? (
        <MailingListDialog
          key={`mailing-list-${mailingListVenture}`}
          open
          ventureName={mailingListVenture}
          onClose={closeMailingList}
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
