import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "green" | "gray" | "orange";
  className?: string;
}

export default function Badge({ children, variant = "blue", className }: BadgeProps) {
  const variants = {
    blue:   "bg-primary-light text-primary border-primary-border",
    green:  "bg-green-light text-green border-green-border",
    gray:   "bg-surface text-muted border-border",
    orange: "bg-orange-50 text-orange-600 border-orange-200",
  };

  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-poppins font-semibold tracking-wide uppercase rounded-md border",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
