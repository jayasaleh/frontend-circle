import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import UserFollowCounts from '@/components/UserFollowCounts';
import FollowToggleButton from '@/features/follow/components/FollowToggleButton';
import ProfileMenu from '@/features/profile/ProfileMenu';
import { useGetUserProfile } from '@/hooks/useGetUserProfile';
import ProfileEditDialog from '@/Layouts/components/ProfileEditDialog';
import { useAuthLogin } from '@/stores/authLogin';
import { useParams } from 'react-router-dom';

function ProfileUser() {
  const params = useParams();
  const { user } = useAuthLogin();
  if (!user) {
    return;
  }
  const userId = params.id ? parseInt(params.id, 10) : 0;

  const { data: users, isLoading, isError } = useGetUserProfile(userId);
  if (isLoading) {
    return;
  }
  if (!users) {
    return (
      <div className="text-center h-screen flex items-center justify-center">
        <p>tidak ada user</p>
      </div>
    );
  }
  return (
    <div className="w-full border-x h-full ">
      <div className="flex flex-col w-full md:max-w-[610px] mx-auto">
        <div className="w-full">
          <div className="relative p-2">
            {/* Background Image */}
            <div className="h-30 w-full rounded-lg overflow-hidden bg-neutral-700">
              {users.banner ? (
                <img
                  src={users.banner}
                  alt="User banner"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-green-500 to-blue-500"></div>
              )}
            </div>
            {/* Profile Avatar - Positioned to overlap the background */}
            <div className="absolute -bottom-9 left-4">
              <Avatar className="h-20 w-20 ">
                <AvatarImage
                  src={users.photo}
                  alt="Profile"
                  className="object-cover"
                />
                <AvatarFallback>{users.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="pt-1 mt-2">
            <div className="flex justify-end">
              {users.id === user?.id ? (
                <ProfileEditDialog />
              ) : (
                <FollowToggleButton
                  followId={users.id}
                  initialIsFollowing={false}
                />
              )}
            </div>
            <div className="flex flex-col p-2">
              <h3 className="text-lg font-bold">{user.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                @{user.username}
              </p>
              <p className="text-sm">{user.bio}</p>
              <div className="flex justify-between w-full mt-2 mb-4">
                <UserFollowCounts userId={userId} />
              </div>
            </div>
          </div>
        </div>
        <ProfileMenu userId={user.id} />
      </div>
    </div>
  );
}

export default ProfileUser;
