import { cn } from "@/lib/utils";

type MaxWidthWrapperProps = {
  className?: string;
  children: React.ReactNode;
};

export default function MaxWidthWrapper({
  className,
  children,
}: MaxWidthWrapperProps) {
  return (
    <main className={cn("mx-auto max-w-md px-2 py-5", className)}>
      {children}
    </main>
  );
}
