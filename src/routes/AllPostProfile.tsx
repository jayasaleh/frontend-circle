import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageSquare } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function AllPostProfile() {
  return (
    <div className="overflow-auto h-[100vh]">
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
            <p className="text-justify text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              quis aut eos iste consequatur. Tempora quos id saepe nesciunt
              quam, assumenda quod, laborum eveniet recusandae quia, beatae
              quidem nam laboriosam!
            </p>
            <div className="flex items-center gap-4 mt-2 text-gray-400">
              <button className="flex items-center gap-1 hover:text-[#10b981]">
                <Heart className="w-4 h-4" />
                <span>36</span>
              </button>
              <button className="flex items-center gap-1 hover:text-[#10b981]">
                <MessageSquare className="w-4 h-4" />
                <span>38 Replies</span>
              </button>
            </div>
          </div>
        </div>
        <hr className="mt-3 mb-3" />

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
            <p className="text-justify text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              quis aut eos iste consequatur. Tempora quos id saepe nesciunt
              quam, assumenda quod, laborum eveniet recusandae quia, beatae
              quidem nam laboriosam!
            </p>
            <div className="flex items-center gap-4 mt-2 text-gray-400">
              <button className="flex items-center gap-1 hover:text-[#10b981]">
                <Heart className="w-4 h-4" />
                <span>36</span>
              </button>
              <button className="flex items-center gap-1 hover:text-[#10b981]">
                <MessageSquare className="w-4 h-4" />
                <span>38 Replies</span>
              </button>
            </div>
          </div>
        </div>
        <hr className="mt-3 mb-3" />
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
              <span className="font-bold text-sm dark:text-white ">
                Mulianto
              </span>
              <span className="text-gray-500 text-sm ">@Mulianto</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500 text-sm">1h</span>
            </div>
            <p className="text-justify text-sm ">
              Lorem ipsum dolor sit picture
            </p>

            <div className="w-96">
              <Link to="/status-foto" className="hover:opacity-50 ">
                <img
                  src="https://jagogame.id/wp-content/uploads/2024/10/Yu-Gi-Oh-Early-Days-Collection-2.jpg"
                  alt="foto"
                  className="w-fit"
                />
              </Link>
            </div>

            <div className="flex items-center gap-4 mt-2 text-gray-400">
              <button className="flex items-center gap-1 hover:text-[#10b981]">
                <Heart className="w-4 h-4" />
                <span>2183</span>
              </button>
              <button className="flex items-center gap-1 hover:text-[#10b981]">
                <MessageSquare className="w-4 h-4" />
                <span>253 Replies</span>
              </button>
            </div>
          </div>
        </div>
        <hr className="mt-3 mb-3" />
      </div>
    </div>
  );
}

export default AllPostProfile;
