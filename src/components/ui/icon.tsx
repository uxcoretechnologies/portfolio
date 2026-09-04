import {
  PenTool,
  Code2,
  Smartphone,
  ShoppingCart,
  Bot,
  Database,
  Building2,
  Radio,
  Workflow,
  BarChart3,
  MapPin,
  Server,
  ShieldCheck,
  Laptop,
  HeartPulse,
  GraduationCap,
  CalendarClock,
  Users2,
  Trophy,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  PenTool,
  Code2,
  Smartphone,
  ShoppingCart,
  Bot,
  Database,
  Building2,
  Radio,
  Workflow,
  BarChart3,
  MapPin,
  Server,
  ShieldCheck,
  Laptop,
  HeartPulse,
  GraduationCap,
  CalendarClock,
  Users2,
  Trophy,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name] ?? Code2;
  return <Cmp className={className} strokeWidth={1.75} />;
}
