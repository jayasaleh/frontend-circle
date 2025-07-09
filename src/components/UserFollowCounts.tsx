import { useGetFollowCounts } from '@/hooks/useFollowCounts';
import { Skeleton } from './ui/skeleton';
interface UserProfileStatsProps {
  userId: number;
}
function UserFollowCounts({ userId }: UserProfileStatsProps) {
  const { data: counts, isLoading } = useGetFollowCounts(userId);
  if (isLoading) {
    return (
      <div className="flex gap-4">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-5 w-24" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 text-sm">
      <div className="hover:underline cursor-pointer">
        <span className="font-bold">{counts?.following}</span>
        <span className="text-muted-foreground ml-1">Following</span>
      </div>
      <div className="hover:underline cursor-pointer">
        <span className="font-bold">{counts?.followers}</span>
        <span className="text-muted-foreground ml-1">Followers</span>
      </div>
    </div>
  );
}

export default UserFollowCounts;
