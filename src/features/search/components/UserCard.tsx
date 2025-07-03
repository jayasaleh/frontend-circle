import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import FollowToggleButton from '@/features/follow/components/FollowToggleButton';
import { UserWithFollowStatus } from '@/types/user';

interface UserCardProps {
  user: UserWithFollowStatus;
}
function UserCard({ user }: UserCardProps) {
  return (
    <div className="flex items-center justify-between" key={user.id}>
      <div className="flex items-center gap-2">
        <Avatar className="h-10 w-10">
          <AvatarImage
            src={user.photo === undefined ? '' : user.photo}
            alt={user.name}
          />
          <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{user.name}</p>
          <p className="text-xs text-muted-foreground">@ {user.name}</p>
        </div>
      </div>
      <FollowToggleButton
        followId={user.id}
        initialIsFollowing={user.isFollowedByCurrentUser}
      />
    </div>
  );
}

export default UserCard;
