"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  connectFormSchema,
  getFormspreeEndpoint,
} from "@/lib/connect-form";

type ConnectDialogProps = {
  open: boolean;
  onClose: () => void;
};

type Status = "idle" | "submitting" | "success" | "error";

export function ConnectDialog({ open, onClose }: ConnectDialogProps) {
  const titleId = useId();
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
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

    const parsed = connectFormSchema.safeParse({ name, email, message });
    if (!parsed.success) {
      const nextErrors: { name?: string; email?: string; message?: string } =
        {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (key === "name" || key === "email" || key === "message") {
          nextErrors[key] = issue.message;
        }
      }
      setFieldErrors(nextErrors);
      setStatus("error");
      return;
    }

    setFieldErrors({});
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
          name: parsed.data.name,
          email: parsed.data.email,
          ...(parsed.data.message ? { message: parsed.data.message } : {}),
          _subject: "David Swift — Connect inquiry",
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
        className="relative w-full max-w-md animate-sf-fade-up border border-lime/40 bg-card p-8 glow-lime md:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-lime/60"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-lime/60"
        />

        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.35em] text-lime">
              Correspondence
            </p>
            <h2
              id={titleId}
              className="mt-3 font-display text-2xl uppercase tracking-[0.2em] text-foreground"
            >
              Connect
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-12 items-center justify-center border border-lime/50 px-4 font-sans text-xs uppercase tracking-[0.28em] text-lime transition-all duration-300 hover:bg-lime hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Close
          </button>
        </div>

        {status === "success" ? (
          <div className="space-y-6 text-center">
            <p className="font-display text-xl uppercase tracking-[0.16em] text-lime">
              Message received
            </p>
            <p className="font-sans text-base leading-relaxed text-foreground/85">
              Thank you. I will be in touch shortly.
            </p>
            <Button type="button" variant="solid" onClick={onClose}>
              Done
            </Button>
          </div>
        ) : (
          <form className="space-y-8" onSubmit={handleSubmit} noValidate>
            <div>
              <label
                htmlFor={nameId}
                className="mb-2 block font-sans text-xs uppercase tracking-[0.28em] text-lime"
              >
                Name
              </label>
              <input
                id={nameId}
                name="name"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="h-12 w-full border-0 border-b-2 border-lime bg-transparent px-3 py-2 font-sans text-base text-foreground placeholder:text-muted transition-all focus:border-lime focus:shadow-[0_4px_10px_rgba(182,255,59,0.2)] focus:outline-none"
                placeholder="Your name"
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={fieldErrors.name ? `${nameId}-error` : undefined}
              />
              {fieldErrors.name ? (
                <p
                  id={`${nameId}-error`}
                  className="mt-2 font-sans text-sm text-lime"
                >
                  {fieldErrors.name}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor={emailId}
                className="mb-2 block font-sans text-xs uppercase tracking-[0.28em] text-lime"
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
                className="h-12 w-full border-0 border-b-2 border-lime bg-transparent px-3 py-2 font-sans text-base text-foreground placeholder:text-muted transition-all focus:border-lime focus:shadow-[0_4px_10px_rgba(182,255,59,0.2)] focus:outline-none"
                placeholder="you@example.com"
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={
                  fieldErrors.email ? `${emailId}-error` : undefined
                }
              />
              {fieldErrors.email ? (
                <p
                  id={`${emailId}-error`}
                  className="mt-2 font-sans text-sm text-lime"
                >
                  {fieldErrors.email}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor={messageId}
                className="mb-2 block font-sans text-xs uppercase tracking-[0.28em] text-lime"
              >
                Message{" "}
                <span className="normal-case tracking-normal text-muted">
                  (optional)
                </span>
              </label>
              <textarea
                id={messageId}
                name="message"
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full resize-y border-0 border-b-2 border-lime bg-transparent px-3 py-2 font-sans text-base text-foreground placeholder:text-muted transition-all focus:border-lime focus:shadow-[0_4px_10px_rgba(182,255,59,0.2)] focus:outline-none"
                placeholder="What would you like to talk about?"
                aria-invalid={Boolean(fieldErrors.message)}
                aria-describedby={
                  fieldErrors.message ? `${messageId}-error` : undefined
                }
              />
              {fieldErrors.message ? (
                <p
                  id={`${messageId}-error`}
                  className="mt-2 font-sans text-sm text-lime"
                >
                  {fieldErrors.message}
                </p>
              ) : null}
            </div>

            {errorMessage ? (
              <p className="font-sans text-sm text-lime" role="alert">
                {errorMessage}
              </p>
            ) : null}

            <Button
              type="submit"
              variant="solid"
              className="w-full"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending…" : "Send"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
