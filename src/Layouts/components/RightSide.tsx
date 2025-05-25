import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ButtonTheme } from "@/components/ui/buttonTheme";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { useLocation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CreatePostModal from "@/components/CreatePostModal";
import ProfileEditDialog from "@/components/ProfileEditDialog";
function RightSide() {
  const location = useLocation();
  const statistic = [
    {
      type: "Post",
      count: "10",
    },
    {
      type: "Follower",
      count: "10k",
    },
    {
      type: "Following",
      count: "1.5k",
    },
  ];
  return (
    <div className="w-1/4 space-y-4">
      <div className="flex justify-end">
        <ButtonTheme />
      </div>
      {/* Profile Card */}
      {location.pathname !== "/profile" &&
        location.pathname !== "/media-profile" && (
          <Card>
            <div className="relative p-2">
              <h1 className="ml-2 text-lg font-bold"> My Profile</h1>
              {/* Background Image */}
              <div className="h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg"></div>

              {/* Profile Avatar - Positioned to overlap the background */}
              <div className="absolute -bottom-5 left-5">
                <Avatar className="h-16 w-16 border-4 border-background">
                  <AvatarImage
                    src="https://i.pinimg.com/736x/40/c4/9d/40c49df48aeeac3b9dda97e66e7312de.jpg"
                    alt="Profile"
                  />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                {/* <div className="absolute -bottom-3 left-65">
                  <ProfileEditDialog />
                </div> */}
              </div>
            </div>

            <CardContent>
              <div className="flex flex-col mt-5">
                <div className="flex flex-row justify-between">
                  <div>
                    <h3 className="text-xl font-bold"></h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      @jayasaleh
                    </p>
                  </div>
                  <ProfileEditDialog />
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-sm">
                    Halo guys welcome to my profile huehue
                  </p>
                  <div className="flex  justify-between w-full mt-1 mb-1">
                    {statistic.map((data) => (
                      <div
                        className="text-center flex flex-row items-center gap-2"
                        key={data.type}
                      >
                        <p className="font-bold">{data.count}</p>
                        <p className="text-xs text-muted-foreground">
                          {data.type}
                        </p>
                      </div>
                    ))}
                  </div>
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
                size="sm"
                className="rounded-full text-xs"
              >
                Follow
              </Button>
            </div>

            {/* Suggestion 2 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Mike Chen"
                  />
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Michele Supriman</p>
                  <p className="text-xs text-muted-foreground">@michelesup</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full text-xs"
              >
                Follow
              </Button>
            </div>

            {/* Suggestion 3 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Elon Musk"
                  />
                  <AvatarFallback>EM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Elon Musk</p>
                  <p className="text-xs text-muted-foreground">@elonmusk</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
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
              <span className="">
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
