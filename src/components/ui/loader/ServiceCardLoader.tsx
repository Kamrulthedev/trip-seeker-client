
// shadcn/ui Skeleton component mock for a runnable example
const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse rounded-md bg-slate-200 ${className}`} />
);

export function ServiceCardLoader() {
  return (
    <div className="flex flex-col space-y-4">
      <Skeleton className="h-64 w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-6 w-1/4 mt-2" />
      </div>
    </div>
  );
}