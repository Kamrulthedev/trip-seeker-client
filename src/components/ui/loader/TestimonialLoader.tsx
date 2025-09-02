import { Skeleton } from "../skeleton";

const TestimonialLoader = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="h-4 w-[200px] rounded-md" />
      <p className="space-y-1">
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-24 rounded-md" />
      </p>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-2 w-[200px]" />
          <Skeleton className="h-2 w-[150px]" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialLoader;
