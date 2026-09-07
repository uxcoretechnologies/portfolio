"use client";

import { useCallback, useRef, useState, type DragEvent } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, UploadCloud, FileText, X } from "lucide-react";
import { applySchema, roleOptions, generalApplicationOption, type ApplyFormValues } from "@/lib/schemas/apply";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ACCEPTED_CV_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_CV_SIZE = 5 * 1024 * 1024; // 5MB

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

const inputClass =
  "w-full rounded-xl border border-control-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-primary focus:ring-4 focus:ring-primary/15";

export function ApplyForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const searchParams = useSearchParams();
  const roleFromQuery = searchParams.get("role");
  const defaultRole = roleOptions.includes(roleFromQuery ?? "") ? roleFromQuery! : "";

  // CV upload — UI only for now. Not yet wired into the form schema or the
  // /api/careers submission; kept as local state until upload storage lands.
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateAndSetCv = useCallback((file: File | null) => {
    if (!file) return;
    if (!ACCEPTED_CV_TYPES.includes(file.type)) {
      setCvError("Please upload a PDF or Word document.");
      return;
    }
    if (file.size > MAX_CV_SIZE) {
      setCvError("File is too large — the limit is 5MB.");
      return;
    }
    setCvError(null);
    setCvFile(file);
  }, []);

  const handleCvDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);
      validateAndSetCv(e.dataTransfer.files?.[0] ?? null);
    },
    [validateAndSetCv]
  );

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
      setCvFile(null);
      setCvError(null);
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
        <label className="mb-2 block text-sm font-medium">
          Upload your CV <span className="font-normal text-muted-2">(optional — or paste a link above)</span>
        </label>
        <div
          role="button"
          tabIndex={0}
          onClick={() => fileInputRef.current?.click()}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              fileInputRef.current?.click();
            }
          }}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleCvDrop}
          className={cn(
            "group relative flex min-h-[128px] cursor-pointer flex-col items-center justify-center gap-2.5 overflow-hidden rounded-2xl border-2 border-dashed px-4 py-7 text-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/15",
            isDragging
              ? "scale-[1.01] border-primary bg-primary/5 shadow-[0_0_0_4px_rgba(16,77,252,0.08)]"
              : cvFile
                ? "border-border-strong bg-surface"
                : "border-control-border bg-gradient-to-b from-surface/70 to-transparent hover:border-primary/50 hover:bg-surface hover:shadow-sm"
          )}
        >
          {/* Soft ambient glow, only on hover — a small touch of polish behind the icon */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 -right-8 size-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
          />

          {cvFile ? (
            <div
              className="relative flex w-full items-center justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3 text-left shadow-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary">
                  <FileText className="size-4" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{cvFile.name}</p>
                  <p className="text-xs text-muted-2">{formatFileSize(cvFile.size)}</p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Remove file"
                onClick={() => {
                  setCvFile(null);
                  setCvError(null);
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }}
                className="flex size-7 shrink-0 items-center justify-center rounded-full text-muted-2 transition-colors hover:bg-surface-2 hover:text-rose-600"
              >
                <X className="size-4" />
              </button>
            </div>
          ) : (
            <>
              <div
                className={cn(
                  "relative flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/10 text-primary transition-transform duration-300",
                  isDragging ? "scale-110" : "group-hover:-translate-y-0.5"
                )}
              >
                <UploadCloud className="size-5" />
              </div>
              <p className="relative text-sm">
                <span className="font-semibold text-primary">Click to upload</span>{" "}
                <span className="text-foreground/80">or drag and drop</span>
              </p>
              <p className="relative text-xs text-muted-2">PDF or Word — up to 5MB</p>
            </>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="hidden"
          onChange={(e) => validateAndSetCv(e.target.files?.[0] ?? null)}
        />
        {cvError && <p className="mt-1.5 text-xs text-rose-600">{cvError}</p>}
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
