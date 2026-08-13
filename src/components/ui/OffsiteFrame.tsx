"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  getFormspreeEndpoint,
  mailingListFormSchema,
} from "@/lib/connect-form";

type Props = {
  open: boolean;
  src: string;
  name: string;
  onClose: () => void;
};

type Status = "idle" | "submitting" | "success" | "error";

export function OffsiteFrame({ open, src, name, onClose }: Props) {
  const titleId = useId();
  const emailId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const host = new URL(src).hostname.replace(/^www\./, "");
  const [email, setEmail] = useState("");
  const [fieldError, setFieldError] = useState<string | undefined>();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }
    setEmail("");
    setFieldError(undefined);
    setStatus("idle");
    setErrorMessage(null);
  }, [open, name]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);

    const parsed = mailingListFormSchema.safeParse({ email });
    if (!parsed.success) {
      setFieldError(parsed.error.issues[0]?.message ?? "Invalid email");
      setStatus("error");
      return;
    }

    setFieldError(undefined);
    const endpoint = getFormspreeEndpoint();
    if (!endpoint) {
      setStatus("error");
      setErrorMessage("Form endpoint is not configured.");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: parsed.data.email,
          venture: name,
          source: "offsite-preview",
          _subject: `Mailing list — ${name}`,
        }),
      });

      if (!response.ok) {
        throw new Error(`Formspree error ${response.status}`);
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again shortly.");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-background/92 p-4 backdrop-blur-sm md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        className="relative flex h-[min(88svh,52rem)] w-full max-w-6xl flex-col animate-deco-fade-up border border-gold/40 bg-card p-4 glow-gold sm:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-gold/60"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-gold/60"
        />

        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold">
              Offsite
            </p>
            <h2
              id={titleId}
              className="mt-2 truncate font-display text-xl uppercase tracking-[0.18em] text-foreground md:text-2xl"
            >
              {name}
            </h2>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center border border-gold/50 px-4 font-sans text-xs uppercase tracking-[0.22em] text-gold transition-all duration-300 hover:bg-gold hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Visit {host}
            </a>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="inline-flex h-12 items-center justify-center border border-gold/50 px-4 font-sans text-xs uppercase tracking-[0.28em] text-gold transition-all duration-300 hover:bg-gold hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Close
            </button>
          </div>
        </div>

        <div className="relative min-h-0 flex-1 overflow-hidden border border-gold/40 bg-background">
          <iframe
            src={src}
            title={`${name} website`}
            referrerPolicy="strict-origin-when-cross-origin"
            className="block h-full w-full bg-background"
          />
        </div>

        <form
          className="mt-4 border border-gold/35 bg-background/60 p-4 sm:p-5"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0 flex-1">
              <p className="font-sans text-xs uppercase tracking-[0.28em] text-gold">
                Mailing list · {name}
              </p>
              <p className="mt-2 font-sans text-sm text-muted">
                Join updates for this house — enterprise foundations as they
                open.
              </p>
              {status === "success" ? (
                <p
                  className="mt-3 font-sans text-sm text-gold-light"
                  role="status"
                >
                  You&apos;re on the list. Thank you.
                </p>
              ) : (
                <div className="mt-3">
                  <label
                    htmlFor={emailId}
                    className="mb-2 block font-sans text-xs uppercase tracking-[0.22em] text-gold"
                  >
                    Email
                  </label>
                  <input
                    id={emailId}
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="h-12 w-full border-0 border-b-2 border-gold bg-transparent px-1 py-2 font-sans text-base text-foreground placeholder:text-muted transition-all focus:border-gold-light focus:shadow-[0_4px_10px_rgba(212,175,55,0.2)] focus:outline-none lg:max-w-md"
                    placeholder="you@example.com"
                    aria-invalid={Boolean(fieldError)}
                    aria-describedby={
                      fieldError ? `${emailId}-error` : undefined
                    }
                  />
                  {fieldError ? (
                    <p
                      id={`${emailId}-error`}
                      className="mt-2 font-sans text-sm text-gold-light"
                    >
                      {fieldError}
                    </p>
                  ) : null}
                </div>
              )}
              {errorMessage ? (
                <p className="mt-2 font-sans text-sm text-gold-light" role="alert">
                  {errorMessage}
                </p>
              ) : null}
            </div>
            {status !== "success" ? (
              <Button
                type="submit"
                variant="solid"
                className="w-full shrink-0 lg:w-auto"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Joining…" : "Join list"}
              </Button>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}
