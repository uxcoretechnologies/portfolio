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
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name] ?? Code2;
  return <Cmp className={className} strokeWidth={1.75} />;
}
