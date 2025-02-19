import { Skeleton } from "../skeleton";

export function ProductCardLoader() {
  return (
    <div className="flex flex-col space-y-5">
      <Skeleton className="h-[250px] w-full rounded-xl" />
      <div className="flex flex-col items-center gap-3">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>
    </div>
  );
}
