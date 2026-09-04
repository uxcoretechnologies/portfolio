import { z } from "zod";
import { openRoles } from "@/lib/data/careers";

export const generalApplicationOption = "General Application";

export const roleOptions = [...openRoles.map((r) => r.title), generalApplicationOption];

export const applySchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  role: z.string().min(1, "Please select a role"),
  // No file-upload backend exists yet, so resumes are collected as a link
  // (Drive, Dropbox, personal site) rather than an upload.
  resumeUrl: z.string().url("Please share a valid link to your resume"),
  portfolioUrl: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  message: z.string().max(2000, "Keep it under 2000 characters").optional().or(z.literal("")),
});

export type ApplyFormValues = z.infer<typeof applySchema>;
