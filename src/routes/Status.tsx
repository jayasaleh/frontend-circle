import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Heart, Image, ImageIcon, MessageSquare } from "lucide-react";
import React from "react";

function Status() {
  return (
    <div className="w-2/4">
      <header className=" flex items-center ">
        <div className="flex items-center">
          <Button variant="ghost" className="font-bold">
            <span className="text-2xl">←</span>{" "}
            <span className="text-xl"> Status</span>
          </Button>
        </div>
      </header>
      <div className="p-4 flex-col gap-5">
        <div className="flex gap-3 ">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src="https://i.pinimg.com/736x/40/c4/9d/40c49df48aeeac3b9dda97e66e7312de.jpg"
              alt="Your Profile"
            />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex flex-col gap-0 mb-5 ml-1">
              <span className="font-bold dark:text-white text-xl ">
                Jaya Saleh
              </span>
              <span className="text-gray-500 text-sm ">@jayasaleh</span>{" "}
            </div>
          </div>
        </div>
        <div>
          <p className="text-justify text-sm dark:text-gray-300 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quis
            aut eos iste consequatur. Tempora quos id saepe nesciunt quam,
            assumenda quod, laborum eveniet recusandae quia, beatae quidem nam
            laboriosam!
          </p>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-gray-500 text-sm">11:32pm</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500">Jul 26, 2023</span>
          </div>
          <div className="flex items-center gap-x-4 mt-1 text-gray-400">
            <button className="flex items-center gap-1 hover:text-[#10b981]">
              <Heart className="w-4 h-4" />
              <span>2096</span>
            </button>
            <button className="flex items-center gap-x-1 hover:text-[#10b981]">
              <MessageSquare className="w-4 h-4" />
              <span>156 Replies</span>
            </button>
          </div>
        </div>
      </div>
      <hr className="mt-1 mb-3 border-t border-border" />
      <div className="pr-15">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 ml-3">
            <AvatarImage
              src="https://i.pinimg.com/736x/40/c4/9d/40c49df48aeeac3b9dda97e66e7312de.jpg"
              alt="Your Profile"
            />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <Textarea
            placeholder="Type your reply!"
            rows={100}
            name="post"
            className="text-3xl flex-1 focus:outline-none focus:ring-0 p-2 border-accent-foreground  h-15 bg-transparent text-foreground"
          />
          <Button variant="ghost" size="icon" className="rounded-full">
            <ImageIcon size={30} />
          </Button>
          <Button className="rounded-full bg-green-600">Post</Button>
        </div>
      </div>
      <div className="p-4 flex-col gap-5">
        <div className="flex gap-3 ">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Your Profile"
            />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex gap-1 items-center gap-y-2">
              <span className="font-bold dark:text-white text-sm ">
                Vulgrim
              </span>
              <span className="text-gray-500 text-sm ">@vgrim123</span>{" "}
              <span className="text-gray-500">•</span>
              <span className="text-gray-500 text-sm">1h</span>
            </div>
            <p className="text-justify text-sm dark:text-gray-300 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              quis aut eos iste consequatur. Tempora quos id saepe nesciunt
              quam, assumenda quod, laborum eveniet recusandae quia, beatae
              quidem nam laboriosam!
            </p>
            <div className="flex items-center gap-4 mt-2 text-gray-400">
              <button className="flex items-center gap-1 hover:text-[#10b981]">
                <Heart className="w-4 h-4" />
                <span>2096</span>
              </button>
              <button className="flex items-center gap-1 hover:text-[#10b981]">
                <MessageSquare className="w-4 h-4" />
                <span>156 Replies</span>
              </button>
            </div>
          </div>
        </div>
        <hr className="mt-1 mb-1" />
      </div>
      <div className="p-4 flex-col gap-5">
        <div className="flex gap-3 ">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Your Profile"
            />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex gap-1 items-center gap-y-2">
              <span className="font-bold dark:text-white text-sm ">
                Dani Jackson
              </span>
              <span className="text-gray-500 text-sm ">@danij</span>{" "}
              <span className="text-gray-500">•</span>
              <span className="text-gray-500 text-sm">1h</span>
            </div>
            <p className="text-justify text-sm dark:text-gray-300 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              quis aut eos iste consequatur. Tempora quos id saepe nesciunt
              quam, assumenda quod, laborum eveniet recusandae quia, beatae
              quidem nam laboriosam!
            </p>
            <div className="flex items-center gap-4 mt-2 text-gray-400">
              <button className="flex items-center gap-1 hover:text-[#10b981]">
                <Heart className="w-4 h-4" />
                <span>2096</span>
              </button>
              <button className="flex items-center gap-1 hover:text-[#10b981]">
                <MessageSquare className="w-4 h-4" />
                <span>156 Replies</span>
              </button>
            </div>
          </div>
        </div>
        <hr className="mt-3 mb-1" />
      </div>
    </div>
  );
}

export default Status;
