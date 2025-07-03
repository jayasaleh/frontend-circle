import ProfileMenu from '@/features/profile/ProfileMenu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import UserFollowCounts from '@/components/UserFollowCounts';
import { useAuthLogin } from '@/stores/authLogin';

function Profile() {
  const { user } = useAuthLogin();
  if (!user) {
    return;
  }
  return (
    <div className="w-full border-x h-full ">
      <div className="flex flex-col w-full md:max-w-[610px] mx-auto">
        <div className="w-full">
          <div className="relative p-2">
            {/* Background Image */}
            <div className="h-25 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl"></div>

            {/* Profile Avatar - Positioned to overlap the background */}
            <div className="absolute -bottom-9 left-4">
              <Avatar className="h-20 w-20 ">
                <AvatarImage src={user.photo} alt="Profile" />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="pt-1 mt-2">
            <div className="flex justify-end">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full text-xs"
              >
                Edit Profile
              </Button>
            </div>
            <div className="flex flex-col p-2">
              <h3 className="text-lg font-bold">{user?.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                @{user?.username}
              </p>
              <p className="text-sm">{user?.bio}</p>
              <div className="flex justify-between w-full mt-2 mb-4">
                <UserFollowCounts userId={user.id} />
              </div>
            </div>
          </div>
        </div>

        <ProfileMenu userId={user.id} />
      </div>
    </div>
  );
}

export default Profile;
