import { Skeleton } from "../skeleton";

const TeamMemberLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <Skeleton className="h-64 w-full " />
      <Skeleton className="h-3 w-52 rounded-md mt-2" />
      <Skeleton className="h-3 w-40 rounded-md" />
    </div>
  );
};

export default TeamMemberLoader;
