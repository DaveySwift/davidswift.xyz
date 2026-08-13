"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  getFormspreeEndpoint,
  mailingListFormSchema,
} from "@/lib/connect-form";

type Props = {
  open: boolean;
  ventureName: string;
  onClose: () => void;
};

type Status = "idle" | "submitting" | "success" | "error";

export function MailingListDialog({ open, ventureName, onClose }: Props) {
  const titleId = useId();
  const emailId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
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
          venture: ventureName,
          source: "under-construction-card",
          _subject: `Mailing list — ${ventureName}`,
        }),
      });

      if (!response.ok) {
        throw new Error(`Formspree error ${response.status}`);
      }

      setStatus("success");
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
        className="relative w-full max-w-md animate-deco-fade-up border border-gold/40 bg-card p-8 glow-gold md:p-10"
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

        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold">
              Mailing list
            </p>
            <h2
              id={titleId}
              className="mt-3 font-display text-2xl uppercase tracking-[0.2em] text-foreground"
            >
              Join the list
            </h2>
            <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
              {ventureName} — enterprise foundations under construction.
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-12 shrink-0 items-center justify-center border border-gold/50 px-4 font-sans text-xs uppercase tracking-[0.28em] text-gold transition-all duration-300 hover:bg-gold hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Close
          </button>
        </div>

        {status === "success" ? (
          <div className="space-y-6 text-center">
            <p className="font-display text-xl uppercase tracking-[0.16em] text-gold">
              You&apos;re on the list
            </p>
            <p className="font-sans text-base leading-relaxed text-foreground/85">
              Thank you. We&apos;ll share updates as this foundation takes shape.
            </p>
            <Button type="button" variant="solid" onClick={onClose}>
              Done
            </Button>
          </div>
        ) : (
          <form className="space-y-8" onSubmit={handleSubmit} noValidate>
            <div>
              <label
                htmlFor={emailId}
                className="mb-2 block font-sans text-xs uppercase tracking-[0.28em] text-gold"
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
                className="h-12 w-full border-0 border-b-2 border-gold bg-transparent px-3 py-2 font-sans text-base text-foreground placeholder:text-muted transition-all focus:border-gold-light focus:shadow-[0_4px_10px_rgba(212,175,55,0.2)] focus:outline-none"
                placeholder="you@example.com"
                aria-invalid={Boolean(fieldError)}
                aria-describedby={fieldError ? `${emailId}-error` : undefined}
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

            {errorMessage ? (
              <p className="font-sans text-sm text-gold-light" role="alert">
                {errorMessage}
              </p>
            ) : null}

            <Button
              type="submit"
              variant="solid"
              className="w-full"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Joining…" : "Join mailing list"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
