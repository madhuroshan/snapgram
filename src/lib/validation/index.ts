import { z } from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Too Short" }),
  username: z.string().min(2, { message: "Too Short" }),
  email: z.string().email(),
  password: z
    .string()
    .min(10, { message: "password must be atleast 10 chars" }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(10, { message: "password must be atleast 10 chars" }),
});

export const postValidation = z.object({
  caption: z
    .string()
    .min(5, { message: "Too Short" })
    .max(2200, { message: "Too Long" }),
  file: z.custom<File[]>(),
  location: z.string().min(2, { message: "Too Short" }),
  tags: z.string(),
});
