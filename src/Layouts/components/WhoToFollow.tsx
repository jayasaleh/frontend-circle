import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FollowToggleButton from '@/features/follow/components/FollowToggleButton';
import { useSuggestUsers } from '@/hooks/useSuggestedUsers';
import { PiSpinner } from 'react-icons/pi';
import { Link } from 'react-router-dom';

function WhoToFollow() {
  const { data: suggestUsers, isLoading, isError } = useSuggestUsers();
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-md">Who to Follow</CardTitle>
        </CardHeader>
        <CardContent className="w-full h-full flex justify-center items-center">
          <div>
            <PiSpinner />
          </div>
        </CardContent>
      </Card>
    );
  }
  if (isError) {
    // Sebaiknya jangan tampilkan apa-apa jika ada error
    return null;
  }
  if (!suggestUsers || suggestUsers.length === 0) {
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="text-md">Who to Follow</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-center text-gray-600">
              <i>~ Tidak ada saran baru saat ini. Cek lagi nanti! ~</i>
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }
  return (
    <div>
      {/* Who to Follow */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="text-md">Who to Follow</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* Suggestion 1 */}
            {suggestUsers?.map((follow) => (
              <div
                className="flex items-center justify-between"
                key={follow.id}
              >
                <div className="flex items-center gap-2">
                  <Link to={`/profile/${follow.id}`}>
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={follow.photo}
                        alt={follow.name}
                        className="object-cover"
                      />
                      <AvatarFallback>
                        {follow.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Link>
                  <Link to={`/profile/${follow.id}`}>
                    <div>
                      <p className="text-sm font-medium">{follow.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {'@' + follow.username}
                      </p>
                    </div>
                  </Link>
                </div>
                <FollowToggleButton
                  followId={follow.id}
                  initialIsFollowing={false}
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default WhoToFollow;
