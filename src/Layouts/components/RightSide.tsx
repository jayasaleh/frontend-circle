import ProfileEditDialog from '@/Layouts/components/ProfileEditDialog';
import UserFollowCounts from '@/components/UserFollowCounts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuthLogin } from '@/stores/authLogin';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { useLocation } from 'react-router-dom';
import WhoToFollow from './WhoToFollow';

function RightSide() {
  const location = useLocation();
  const { user, _hasHydrated } = useAuthLogin();

  if (!_hasHydrated || !user) {
    return (
      <div className="grid gap-2 grid-cols-1 p-2 sticky top-0 ">
        <Skeleton className="h-[220px] w-full rounded-xl" />
        <Skeleton className="h-[150px] w-full rounded-xl" />
      </div>
    );
  }

  return (
    <div className="grid gap-2 grid-cols-1 sticky top-0 pl-2 pt-2">
      {/* Profile Card */}
      {location.pathname !== '/profile' &&
        location.pathname !== '/media-profile' && (
          <Card>
            <div className="relative p-2 ">
              {/* Background Image */}
              <div className="h-20 w-full rounded-lg overflow-hidden bg-neutral-700">
                {user.banner ? (
                  <img
                    src={user.banner}
                    alt="User banner"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-green-500 to-blue-500"></div>
                )}
              </div>
              {/* Profile Avatar - Positioned to overlap the background */}
              <div className="absolute -bottom-5 left-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src={user?.photo}
                    alt="Profile"
                    className="object-cover"
                  />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute -bottom-9 right-5">
                <ProfileEditDialog />
              </div>
            </div>

            <CardContent>
              <div className="flex flex-col mt-5">
                <div className="flex flex-row justify-between">
                  <div>
                    <h3 className="text-md font-bold">{user?.name}</h3>
                    <p className="text-xs text-muted-foreground mb-3">
                      @{user?.username}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-xs">{user?.bio}</p>
                  <UserFollowCounts userId={user.id} />
                  <div className="flex  justify-between w-full mt-1 mb-1"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      <WhoToFollow />
      <div>
        <Card className="">
          <CardContent>
            <div className="flex dark:text-gray-300 items-center gap-2">
              <span className="text-xs">
                Developed by <b>Jaya Saleh</b>
              </span>
              •
              <FaGithub size={15} />
              <FaLinkedin size={15} />
              <FaFacebook size={15} />
              <PiInstagramLogoFill size={15} />
            </div>
            <div>
              <span className="text-xs dark:text-gray-500">
                Powered by Dumbways Indonesia • #1 Coding Bootcamp
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default RightSide;
