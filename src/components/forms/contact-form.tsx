"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { contactSchema, serviceOptions, type ContactFormValues } from "@/lib/schemas/contact";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-xl border border-control-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-primary focus:ring-4 focus:ring-primary/15";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-10 text-center">
        <CheckCircle2 className="size-10 text-primary" />
        <h3 className="font-display text-xl font-semibold">Message sent</h3>
        <p className="text-sm text-muted">
          Thanks for reaching out — placeholder confirmation copy. We&rsquo;ll reply within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-medium text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Full Name *
          </label>
          <input id="name" className={inputClass} {...register("name")} />
          {errors.name && <p className="mt-1.5 text-xs text-rose-600">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email *
          </label>
          <input id="email" type="email" className={inputClass} {...register("email")} />
          {errors.email && <p className="mt-1.5 text-xs text-rose-600">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium">
            Company Name *
          </label>
          <input id="company" className={inputClass} {...register("company")} />
          {errors.company && <p className="mt-1.5 text-xs text-rose-600">{errors.company.message}</p>}
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium">
            Select Service *
          </label>
          <select id="service" className={cn(inputClass, "appearance-none")} defaultValue="" {...register("service")}>
            <option value="" disabled>
              Service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service && <p className="mt-1.5 text-xs text-rose-600">{errors.service.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message *
        </label>
        <textarea id="message" rows={5} className={inputClass} {...register("message")} />
        {errors.message && <p className="mt-1.5 text-xs text-rose-600">{errors.message.message}</p>}
      </div>

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-fit">
        {status === "submitting" && <Loader2 className="size-4 animate-spin" />}
        Send Message
      </Button>

      {status === "error" && (
        <p className="text-sm text-rose-600">Something went wrong — please try again.</p>
      )}
    </form>
  );
}
