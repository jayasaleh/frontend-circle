import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

function MediaProfile() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="h-[100vh] overflow-auto mt-4 no-scrollbar">
        <div className="grid grid-cols-3 grid-rows-3 gap-1">
          <img
            src="https://images-cdn.ubuy.co.id/634552e0f9fb47138b7a2720-yugioh-tcg-exodia-egyptian-god-cards.jpg"
            alt=""
            className="w-full h-50 object-cover transition-transform duration-300 hover:scale-120"
          />
          <img
            src="https://suarakreatif.com/wp-content/uploads/2024/09/download.jpeg"
            alt=""
            className="w-full h-50 object-cover transition-transform duration-300 hover:scale-120"
          />
          <img
            src="https://i.ytimg.com/vi/EBYsx1QWF9A/maxresdefault.jpg"
            alt=""
            className="w-full h-50 object-cover transition-transform duration-300 hover:scale-120"
          />
          <img
            src="https://i.pinimg.com/736x/fd/f9/1a/fdf91a5eefd4a1fe14ce71c414ab7531.jpg"
            alt=""
            className="w-full h-50 object-cover transition-transform duration-300 hover:scale-120"
          />
          <img
            src="https://i.ytimg.com/vi/EBYsx1QWF9A/maxresdefault.jpg"
            alt=""
            className="w-full h-50 object-cover transition-transform duration-300 hover:scale-120"
          />
          <img
            src="https://images7.alphacoders.com/476/476227.jpg"
            alt=""
            className="w-full h-50 object-cover transition-transform duration-300 hover:scale-120"
          />{" "}
          <img
            src="https://i1.sndcdn.com/artworks-XmMxPQY7i54j3OBb-2wnVcw-t500x500.jpg"
            alt=""
            className="w-full h-50 object-cover transition-transform duration-300 hover:scale-120"
          />{" "}
          <img
            src="https://i.pinimg.com/736x/b3/9d/2a/b39d2a63c02d18535f3e0058b7304bb1.jpg"
            alt=""
            className="w-full h-50 object-cover transition-transform duration-300 hover:scale-120"
          />{" "}
          <img
            src="https://images7.alphacoders.com/476/476227.jpg"
            alt=""
            className="w-full h-50 object-cover transition-transform duration-300 hover:scale-120"
          />
        </div>
      </div>
    </div>
  );
}

export default MediaProfile;
