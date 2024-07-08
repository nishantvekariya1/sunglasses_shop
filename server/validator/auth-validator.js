const z = require("zod");

const signUpSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast 3 characters" })
    .max(255, { message: "Name must be not more than 255 charcters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be atleast 3 characters" })
    .max(255, { message: "Email must be not more than 255 charcters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .min(10, { message: "Phone must be atleast 10 numbers" })
    .max(20, { message: "Phone must be not more than 20 numbers" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be atleast 7 characters" })
    .max(255, { message: "Password must be not more than 255 charcters" }),
});

const signInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be atleast 3 characters" })
    .max(255, { message: "Email must be not more than 255 charcters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be atleast 7 characters" })
    .max(255, { message: "Password must be not more than 255 charcters" }),
});

module.exports = { signUpSchema, signInSchema };
