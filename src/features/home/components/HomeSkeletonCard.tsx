import { Skeleton } from '@/components/ui/skeleton';

const TweetCardSkeleton = () => {
  return (
    <div className="flex gap-3 border-b border-gray-200 dark:border-gray-800 p-4">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="flex-1 space-y-3">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-[120px] rounded" />
          <Skeleton className="h-4 w-[80px] rounded" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full rounded" />
          <Skeleton className="h-4 w-[90%] rounded" />
        </div>
      </div>
    </div>
  );
};

export const HomePageSkeleton = () => {
  return (
    <div className="w-full border-x h-full p-2 animate-pulse">
      <div className="border-b border-gray-200 dark:border-gray-800 p-4">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex-1">
            <Skeleton className="h-8 w-full rounded" />
          </div>
          <Skeleton className="h-10 w-20 rounded-full" />
        </div>
      </div>

      <div className="flex-col">
        {Array.from({ length: 5 }).map((_, index) => (
          <TweetCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};
