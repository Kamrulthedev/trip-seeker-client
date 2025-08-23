
// shadcn/ui Skeleton component mock for a runnable example
const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse rounded-md bg-slate-200 ${className}`} />
);

export function ServiceCardLoader() {
  return (
    <div className="relative rounded-xl overflow-hidden h-80 sm:h-96">
      <Skeleton className="w-full h-full" />
    </div>
  );
}
