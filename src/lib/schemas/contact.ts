import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(1, "Please enter your company name"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Tell us a little more about your project"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const serviceOptions = [
  "Product & UX/UI Design",
  "Web Development",
  "Mobile App Development",
  "AI & Agent Development",
  "Data Engineering",
  "Enterprise Solutions",
  "Other",
];
