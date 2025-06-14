import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router-dom";
import { Heart, MessageSquare } from "lucide-react";
import axios from "axios";
import TestButtom from "@/test/test-buttom";
import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

type User = {
  id: number;
  username: string;
  email: string;
  name: string;
  password: string;
  createdAt: string;
  role: string;
  photo: string;
  receiverNotifications: any[];
};

function Profile() {
  // Make a request for a user with a given ID
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/users")
      .then(function (response) {
        setUsers(response.data);
        console.log(setUsers);
        // console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async (): Promise<User[]> => {
    const res = await api.get("/users");
    if (!res) {
      throw new Error("Failed to fetch users");
    }
    return res.data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;
  return (
    <div className="flex flex-1 flex-col">
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            {user.name} {user.name} - {user.email}
          </li>
        ))}
      </ul>
      {/* {users.map((user) => (
        <div key={user.id} className="border p-4 mb-2 rounded">
          <p>
            <strong>Nama:</strong> {user.name}
          </p>
          <p>
            <strong>Username:</strong> @{user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      ))} */}

      <header className=" flex items-center ">
        <div className="flex items-center">
          <Button variant="ghost" className="font-bold">
            <span className="text-2xl">←</span>{" "}
            <span className="text-xl"> Jaya Saleh</span>
          </Button>
        </div>
      </header>
      <div className="w-full">
        <div className="relative p-2">
          {/* Background Image */}
          <div className="h-30 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl"></div>

          {/* Profile Avatar - Positioned to overlap the background */}
          <div className="absolute -bottom-9 left-4">
            <Avatar className="h-20 w-20 border-4 border-background">
              <AvatarImage
                src="https://i.pinimg.com/736x/40/c4/9d/40c49df48aeeac3b9dda97e66e7312de.jpg"
                alt="Profile"
              />
              <AvatarFallback>JS</AvatarFallback>
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
            <h3 className="text-lg font-bold">Jaya Saleh</h3>
            <p className="text-sm text-muted-foreground mb-3">@jayasaleh</p>
            <p className="text-sm">Halo guys welcome to my profile huehue</p>
            <div className="flex justify-between w-full mt-2 mb-4">
              <div className="text-center">
                <p className="font-bold">254</p>
                <p className="text-xs text-muted-foreground">Posts</p>
              </div>
              <div className="text-center">
                <p className="font-bold">14.2K</p>
                <p className="text-xs text-muted-foreground">Followers</p>
              </div>
              <div className="text-center">
                <p className="font-bold">1.5K</p>
                <p className="text-xs text-muted-foreground">Following</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TestButtom />
    </div>
  );
}

export default Profile;
