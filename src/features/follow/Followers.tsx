import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useGetFollowers } from '@/hooks/useGetFollowers';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../components/ui/avatar';
import FollowToggleButton from './components/FollowToggleButton';
function Followers() {
  const { data: followers, isLoading, isError } = useGetFollowers();

  if (isLoading) {
    return (
      <div className="h-30 flex justify-center items-center">
        <p>Getting Followers data...</p>
      </div>
    );
  }

  if (!followers) {
    return (
      <div className="mt-3">
        <div className=" h-30 flex justify-center items-center">
          <p className="text-md text-center text-gray-600">
            <i>~ Belum ada Followers ~</i>
          </p>
        </div>
      </div>
    );
  }
  if (followers.length === 0) {
    return (
      <div className="mt-3">
        <div className=" h-30 flex justify-center items-center">
          <p className="text-md text-center text-gray-600">
            <i>~ Belum ada yang di Follow ~</i>
          </p>
        </div>
      </div>
    );
  }
  if (isError) {
    return null;
  }
  return (
    <div>
      <div className="mt-3">
        <Card>
          <CardHeader></CardHeader>
          <CardContent className="space-y-2">
            {followers.map((follow) => (
              <div
                className="flex items-center justify-between"
                key={follow.id}
              >
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={follow.photo === undefined ? '' : follow.photo}
                      alt={follow.name}
                    />
                    <AvatarFallback>
                      {follow.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{follow.name}</p>
                    <p className="text-xs text-muted-foreground">
                      @ {follow.name}
                    </p>
                  </div>
                </div>
                <FollowToggleButton
                  followId={follow.id}
                  initialIsFollowing={follow.isFollowing}
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Followers;
