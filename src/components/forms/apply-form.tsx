"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { applySchema, roleOptions, generalApplicationOption, type ApplyFormValues } from "@/lib/schemas/apply";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-xl border border-control-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-primary focus:ring-4 focus:ring-primary/15";

export function ApplyForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const searchParams = useSearchParams();
  const roleFromQuery = searchParams.get("role");
  const defaultRole = roleOptions.includes(roleFromQuery ?? "") ? roleFromQuery! : "";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplyFormValues>({
    resolver: zodResolver(applySchema),
    defaultValues: { role: defaultRole },
  });

  const onSubmit = async (values: ApplyFormValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/careers", {
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
        <h3 className="font-display text-xl font-semibold">Application received</h3>
        <p className="text-sm text-muted">
          Thanks for applying — we review every application and will reach out if it's a fit.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-medium text-primary hover:underline"
        >
          Submit another application
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
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Phone *
          </label>
          <input id="phone" type="tel" className={inputClass} {...register("phone")} />
          {errors.phone && <p className="mt-1.5 text-xs text-rose-600">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="role" className="mb-2 block text-sm font-medium">
            Position *
          </label>
          <select
            id="role"
            className={cn(inputClass, "appearance-none")}
            defaultValue={defaultRole}
            {...register("role")}
          >
            <option value="" disabled>
              Select a role
            </option>
            {roleOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.role && <p className="mt-1.5 text-xs text-rose-600">{errors.role.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="resumeUrl" className="mb-2 block text-sm font-medium">
            Resume link *
          </label>
          <input
            id="resumeUrl"
            type="url"
            placeholder="Google Drive, Dropbox, or personal site"
            className={inputClass}
            {...register("resumeUrl")}
          />
          {errors.resumeUrl && <p className="mt-1.5 text-xs text-rose-600">{errors.resumeUrl.message}</p>}
        </div>
        <div>
          <label htmlFor="portfolioUrl" className="mb-2 block text-sm font-medium">
            Portfolio / LinkedIn
          </label>
          <input id="portfolioUrl" type="url" className={inputClass} {...register("portfolioUrl")} />
          {errors.portfolioUrl && <p className="mt-1.5 text-xs text-rose-600">{errors.portfolioUrl.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Anything else you&rsquo;d like us to know?
        </label>
        <textarea id="message" rows={4} className={inputClass} {...register("message")} />
        {errors.message && <p className="mt-1.5 text-xs text-rose-600">{errors.message.message}</p>}
      </div>

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-fit">
        {status === "submitting" && <Loader2 className="size-4 animate-spin" />}
        Submit Application
      </Button>

      {status === "error" && (
        <p className="text-sm text-rose-600">Something went wrong — please try again.</p>
      )}

      <p className="text-xs text-muted-2">
        Don&rsquo;t see the right role? Select &ldquo;{generalApplicationOption}&rdquo; and tell us where you&rsquo;d
        fit in.
      </p>
    </form>
  );
}
