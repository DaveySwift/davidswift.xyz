import { z } from "zod";

export const connectFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(80, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email")
    .max(120, "Email is too long"),
});

export type ConnectFormValues = z.infer<typeof connectFormSchema>;

export const mailingListFormSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please enter a valid email")
    .max(120, "Email is too long"),
});

export type MailingListFormValues = z.infer<typeof mailingListFormSchema>;

const DEFAULT_FORMSPREE_ID = "xkjwzwoa";

export function getFormspreeEndpoint(): string | null {
  const id =
    process.env.NEXT_PUBLIC_FORMSPREE_ID?.trim() || DEFAULT_FORMSPREE_ID;
  if (!id) {
    return null;
  }
  if (id.startsWith("http")) {
    return id;
  }
  return `https://formspree.io/f/${id}`;
}
