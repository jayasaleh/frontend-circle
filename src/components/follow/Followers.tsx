import { useGetFollowing } from "@/hooks/useGetFollowing";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useGetFollowers } from "@/hooks/useGetFollowers";
import { PiSpinner } from "react-icons/pi";
import FollowToggleButton from "./components/FollowToggleButton";
function Followers() {
  const { data: followers, isLoading, isError } = useGetFollowers();

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-md">Get Followers...</CardTitle>
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
    return null;
  }
  if (!followers || followers.length === 0) {
    return (
      <div className="mt-3">
        <Card>
          <CardHeader></CardHeader>
          <CardContent className=" h-30 flex justify-center items-center">
            <p className="text-md text-center text-gray-600">
              <i>~ Belum ada Followers ~</i>
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
            {followers?.map((follow) => (
              <form
                className="flex items-center justify-between"
                key={follow.follower.id}
              >
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={
                        follow.follower.photo === undefined
                          ? ""
                          : follow.follower.photo
                      }
                      alt={follow.follower.name}
                    />
                    <AvatarFallback>
                      {follow.follower.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">
                      {follow.follower.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      @ {follow.follower.name}
                    </p>
                  </div>
                </div>
                <FollowToggleButton
                  followId={follow.follower.id}
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

export default Followers;
