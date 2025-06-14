"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ImageIcon, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CreatePostModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [postContent, setPostContent] = useState("");

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full mb-4 flex items-center gap-2 justify-center rounded-full font-bold">
          <Plus size={50} className="dark:text-white" />
          <span className="text-md text-white">Create Post</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] bg-[#121212] border-gray-800 p-0 overflow-hidden">
        <div className="flex justify-end p-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <div className="px-4 pb-4">
          <div className="flex gap-3">
            <Avatar className="h-10 w-10 border border-gray-700">
              <AvatarImage
                src="https://i.pinimg.com/736x/40/c4/9d/40c49df48aeeac3b9dda97e66e7312de.jpg"
                alt="@username"
              />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div
                contentEditable
                className={cn(
                  "w-full min-h-[80px] outline-none bg-transparent text-white placeholder:text-gray-500",
                  !postContent &&
                    "before:content-['What_is_happening?!'] before:text-gray-500"
                )}
                onInput={(e) =>
                  setPostContent(e.currentTarget.textContent || "")
                }
              />
            </div>
          </div>
          <div className="h-[1px] w-full bg-gray-800 my-4" />
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full text-green-500 hover:bg-green-500/10"
            >
              <ImageIcon className="h-5 w-5" />
              <span className="sr-only">Add image</span>
            </Button>
            <Button
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6"
              disabled={!postContent.trim()}
            >
              Post
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
