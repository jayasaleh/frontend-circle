import ProfileEditDialog from "@/components/ProfileEditDialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ButtonTheme } from "@/components/ui/buttonTheme";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useAuthLogin } from "@/stores/authLogin";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { useLocation } from "react-router-dom";
function RightSide() {
  const location = useLocation();

  const { user } = useAuthLogin();

  const { isLoading } = useCurrentUser();
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="grid gap-2 grid-cols-1 p-2 sticky top-0">
      <div className="flex justify-end">
        <ButtonTheme />
      </div>
      {/* Profile Card */}
      {location.pathname !== "/profile" &&
        location.pathname !== "/media-profile" && (
          <Card>
            <div className="relative p-2">
              {/* Background Image */}
              <div className="h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg"></div>

              {/* Profile Avatar - Positioned to overlap the background */}
              <div className="absolute -bottom-5 left-4">
                <Avatar className="h-16 w-16 border-1 border-background">
                  <AvatarImage
                    src="https://i.pinimg.com/736x/40/c4/9d/40c49df48aeeac3b9dda97e66e7312de.jpg"
                    alt="Profile"
                  />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
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

                  <ProfileEditDialog />
                </div>
                <div className="flex flex-col">
                  <p className="text-xs">
                    Halo guys welcome to my profile huehue
                  </p>
                  <div className="flex  justify-between w-full mt-1 mb-1"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      {/* Who to Follow */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="text-md">Who to Follow</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* Suggestion 1 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Sarah Johnson"
                  />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Jono Sutrisno</p>
                  <p className="text-xs text-muted-foreground">@jonosutri</p>
                </div>
              </div>
              <Button
                variant="outline"
                // size="sm"
                className="rounded-full text-xs"
              >
                Follow
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className="">
          <CardContent>
            <div className="flex dark:text-gray-400 items-center gap-2">
              <span className="text-sm">
                Developed by <b>Jaya Saleh</b> •
              </span>
              <FaGithub size={20} className="" />
              <FaLinkedin size={20} />
              <FaFacebook size={20} />
              <PiInstagramLogoFill size={20} />
            </div>
            <div>
              <span className="text-sm dark:text-gray-600">
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
