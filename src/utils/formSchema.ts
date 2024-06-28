import { z } from "zod";

const loginFormSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
});

const formSchema = z
  .object({
    fullName: z.string().min(5, {
      message: "Full Name must be at least 5 characters.",
    }),
    email: z.string().email({
      message: "Invalid email address.",
    }),
    password: z.string().min(5, {
      message: "Password must be at least 5 characters.",
    }),
    cpassword: z.string().min(5, {
      message: "Confirm Password must be at least 5 characters.",
    }),
    phoneNumber: z.string().regex(/^\d{10,15}$/, {
      message: "Phone number must be between 10 and 15 digits.",
    }),
    cnic: z.string().regex(/^\d{5}-\d{7}-\d{1}$/, {
      message: "Invalid CNIC format.",
    }),
    city: z.string().min(4, {
      message: "City must be at least 4 characters.",
    }),
    country: z.string().min(4, {
      message: "Country must be at least 4 characters.",
    }),
    role: z.enum(["user", "admin"], {
      message: "Role must be one of 'user' or 'admin'.",
    }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.cpassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match.",
        path: ["cpassword"],
      });
    }
  });

const editFormSchema = z.object({
  fullName: z.string().min(5, {
    message: "Full Name must be at least 5 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phoneNumber: z.string().regex(/^\d{10,15}$/, {
    message: "Phone number must be between 10 and 15 digits.",
  }),
  cnic: z.string().regex(/^\d{5}-\d{7}-\d{1}$/, {
    message: "Invalid CNIC format.",
  }),
  city: z.string().min(4, {
    message: "City must be at least 4 characters.",
  }),
  country: z.string().min(4, {
    message: "Country must be at least 4 characters.",
  }),
  role: z.enum(["user", "admin"], {
    message: "Role must be one of 'user' or 'admin'.",
  }),
});

// Define default values

const defaultValues: z.infer<typeof formSchema> = {
  fullName: "",
  email: "",
  password: "",
  cpassword: "",
  phoneNumber: "",
  cnic: "",
  city: "",
  country: "",
  role: "user", // Default role must match one of the specified literals
};

const loginDefaultValues: z.infer<typeof loginFormSchema> = {
  email: "",
  password: "",
};
const editDefaultValues: z.infer<typeof editFormSchema> = {
  fullName: "",
  email: "",
  phoneNumber: "",
  cnic: "",
  city: "",
  country: "",
  role: "user", // Default role must match one of the specified literals
};
export {
  formSchema,
  loginFormSchema,
  defaultValues,
  loginDefaultValues,
  editFormSchema,
  editDefaultValues,
};
