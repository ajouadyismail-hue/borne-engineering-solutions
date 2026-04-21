import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      {badge && (
        <div className={cn("mb-3", centered && "flex justify-center")}>
          <span className="section-badge">{badge}</span>
        </div>
      )}
      <h2 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-navy leading-snug mb-3">
        {title}{" "}
        {titleHighlight && (
          <span className="text-primary">{titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-muted text-base max-w-2xl mx-auto leading-relaxed font-poppins font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
