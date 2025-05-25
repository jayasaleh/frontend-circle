import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Heart, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface ContentProps {
  post: {
    description: string;
  };
}
const ContentPost: React.FC<ContentProps> = ({ post = {} }) => {
  return (
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
          <div className="flex gap-1 items-center gap-y-2">
            <span className="font-bold dark:text-white text-sm ">
              Jaya Saleh
            </span>
            <span className="text-gray-500 text-sm ">@jayasaleh</span>{" "}
            <span className="text-gray-500">•</span>
            <span className="text-gray-500 text-sm">1h</span>
          </div>
          <p className="text-justify text-sm dark:text-gray-300 text-gray-600">
            {post.description}
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
      <hr className="mt-3 " />
    </div>
  );
};

export default ContentPost;
