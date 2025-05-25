"use client";

import { useState } from "react";
import { Camera, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ProfileEditDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("Jaya Saleh");
  const [username, setUsername] = useState("jayasaleh");
  const [bio, setBio] = useState("Halo guys welcome to my profile huehue");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-3 bg-[#1a1a1a] border-[#333] text-white overflow-hidden">
        <div className="relative">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle className="text-md font-medium">
              Edit profile
            </DialogTitle>
          </DialogHeader>

          <div className="relative">
            {/* Banner image with gradient */}
            <div className="h-30 w-full bg-gradient-to-r from-green-500 to-blue-500 rounded-md mx-auto mt-2"></div>

            {/* Profile picture with upload button */}
            <div className="absolute -bottom-12 left-6">
              <div className="relative w-24 h-24 rounded-full border-4 border-[#1a1a1a] overflow-hidden bg-[#5d7fef]">
                <img
                  src="https://i.pinimg.com/736x/40/c4/9d/40c49df48aeeac3b9dda97e66e7312de.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer">
                  <div className="bg-[#333] p-2 rounded-full">
                    <Camera className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-2 pt-16 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-400 text-sm">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#222] border-[#333] focus-visible:ring-green-500 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="username" className="text-gray-400 text-sm">
                Username
              </Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-[#222] border-[#333] focus-visible:ring-green-500 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio" className="text-gray-400 text-sm">
                Bio
              </Label>
              <Textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="bg-[#222] border-[#333] focus-visible:ring-green-500 text-white min-h-[100px]"
              />
            </div>

            <div className="flex justify-end ">
              <Button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
