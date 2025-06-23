import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useGetFollowing } from "@/hooks/useGetFollowing";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import FollowToggleButton from "./components/FollowToggleButton";
function Following() {
  const { data: following, isLoading, isError } = useGetFollowing();
  if (isLoading) return;
  if (!following) {
    return (
      <div className="mt-3">
        <Card>
          <CardHeader></CardHeader>
          <CardContent className=" h-30 flex justify-center items-center">
            <p className="text-md text-center text-gray-600">
              <i>~ Belum ada yang di Follow ~</i>
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }
  return (
    <div>
      <div className="mt-3">
        <Card>
          <CardHeader></CardHeader>
          <CardContent className="space-y-2">
            {following?.map((follow) => (
              <form
                className="flex items-center justify-between"
                key={follow.followee.id}
              >
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={follow.followee.photo}
                      alt={follow.followee.name}
                    />
                    <AvatarFallback>
                      {follow.followee.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">
                      {follow.followee.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      @{follow.followee.username}
                    </p>
                  </div>
                </div>
                <FollowToggleButton
                  followId={follow.followeeId}
                  initialIsFollowing={true}
                />
              </form>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Following;
