import { connectFormSchema } from "@/lib/connect-form";

describe("connectFormSchema", () => {
  it("accepts a valid name and email", () => {
    const result = connectFormSchema.safeParse({
      name: "Ada Lovelace",
      email: "ada@example.com",
    });
    expect(result.success).toBe(true);
  });

  it("rejects an invalid email", () => {
    const result = connectFormSchema.safeParse({
      name: "Ada",
      email: "not-an-email",
    });
    expect(result.success).toBe(false);
  });
});
