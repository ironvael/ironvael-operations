import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
}

export function Section({
  children,
  className,
  as: Component = "section",
}: SectionProps) {
  return (
    <Component
      className={cn(
        "relative py-16 sm:py-24 lg:py-32",
        className
      )}
    >
      {children}
    </Component>
  );
}

export function SectionContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}
