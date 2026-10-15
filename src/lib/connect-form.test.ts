import { connectFormSchema } from "@/lib/connect-form";

describe("connectFormSchema", () => {
  it("accepts a valid name and email", () => {
    const result = connectFormSchema.safeParse({
      name: "Ada Lovelace",
      email: "ada@example.com",
    });
    expect(result.success).toBe(true);
  });

  it("accepts a name and email without a message", () => {
    const result = connectFormSchema.safeParse({
      name: "Ada Lovelace",
      email: "ada@example.com",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.message).toBe("");
    }
  });

  it("accepts an optional message", () => {
    const result = connectFormSchema.safeParse({
      name: "Ada Lovelace",
      email: "ada@example.com",
      message: "  Hello from the site  ",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.message).toBe("Hello from the site");
    }
  });

  it("rejects an invalid email", () => {
    const result = connectFormSchema.safeParse({
      name: "Ada",
      email: "not-an-email",
    });
    expect(result.success).toBe(false);
  });
});
