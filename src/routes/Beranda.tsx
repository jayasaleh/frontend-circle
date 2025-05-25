import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dot, Ghost, Heart, Image, MessageSquare } from "lucide-react";
import ContentPost from "@/components/ContentPost";
import { NavLink } from "react-router-dom";
import { RiImageAiLine } from "react-icons/ri";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";

function Beranda() {
  interface Posting {
    description: string;
    image: string;
  }
  interface User {
    name: string;
    photo: string;
    username: string;
  }
  type Tweets = {
    id: number;
    content: string;
    userId: number;
    createdAt: Date;
    commentCount: number;
    username: string;
    name: string;
    photo: string;
    user: User;
  };
  const [tweets, setTweets] = useState<Tweets[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/tweets")
      .then(function (response) {
        setTweets(response.data);
        console.log(response.data);
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

  // const [post, setPost] = React.useState<Posting>({
  //   description: "",
  //   image: "",
  // });
  // const [content, setContent] = React.useState<Posting[]>([]);
  // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   setPost((prevPost) => ({
  //     ...prevPost,
  //     description: event.target.value,
  //   }));
  //   console.log(post);
  // }
  // function submitPost() {
  //   setContent([...content, post]);
  // }
  return (
    <div className="w-full">
      {/*Posting Input*/}
      <div className="flex flex-col space-y-4">
        <h2 className="text-xs md:text-2xl font-bold">Home</h2>
        <div className="border rounded-lg p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="https://i.pinimg.com/736x/40/c4/9d/40c49df48aeeac3b9dda97e66e7312de.jpg"
                alt="Your Profile"
              />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <Input
              placeholder="What's is happening?"
              className="text-lg flex-1"
              name="post"
            />
            <Button variant="ghost" size="icon" className="rounded-full">
              <Image size={20} />
            </Button>
            <Button className="rounded-full bg-green-600">Post</Button>
          </div>
        </div>
      </div>
      <div className="overflow-auto h-[100vh]">
        {/* {content.reverse().map((post) => (
          <ContentPost post={post} />
        ))} */}
        <div className="p-4 flex-col gap-5">
          {tweets.map((tweet) => (
            <>
              <div className="flex gap-3 ">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="" alt="Your Profile" />
                  <AvatarFallback>{tweet.user.name}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex gap-1 items-center gap-y-2">
                    <span className="font-bold dark:text-white text-sm ">
                      {tweet.user.name}
                    </span>
                    <span className="text-gray-500 text-sm ">
                      {tweet.username}
                    </span>{" "}
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-500 text-sm">
                      {tweet.createdAt.toString()}
                    </span>
                  </div>
                  <p className="text-justify text-sm dark:text-gray-300 text-gray-600">
                    {tweet.content}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-gray-400">
                    <button className="flex items-center gap-1 hover:text-[#10b981]">
                      <Heart className="w-4 h-4" />
                      <span>2096</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-[#10b981]">
                      <MessageSquare className="w-4 h-4" />
                      <span>{tweet.commentCount}</span>
                    </button>
                  </div>
                </div>
              </div>
              <hr className="mt-3 mb-3" />
            </>
          ))}

          {/* 
          <div className="flex gap-3 ">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="https://i1.sndcdn.com/artworks-XmMxPQY7i54j3OBb-2wnVcw-t500x500.jpg"
                alt="Your Profile"
              />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex gap-1 items-center gap-y-2">
                <span className="font-bold dark:text-white text-sm ">
                  Rian Supit
                </span>
                <span className="text-gray-500 text-sm ">@riankucing</span>{" "}
                <span className="text-gray-500">•</span>
                <span className="text-gray-500 text-sm">5h</span>
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
                  <span>255</span>
                </button>
                <button className="flex items-center gap-1 hover:text-[#10b981]">
                  <MessageSquare className="w-4 h-4" />
                  <span>55 Replies</span>
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
                <span className="text-gray-500 text-sm">10h</span>
              </div>
              <p className="text-justify text-sm dark:text-gray-300 text-gray-600">
                Lorem ipsum dolor sit picture
              </p>

              <div className="w-full">
                <Dialog>
                  <DialogTrigger>
                    {" "}
                    <img
                      src="https://jagogame.id/wp-content/uploads/2024/10/Yu-Gi-Oh-Early-Days-Collection-2.jpg"
                      alt="foto"
                      className="w-fit"
                    />
                  </DialogTrigger>
                  <DialogContent className="lg:min-w-600 md:min-w-300 sm:min-w-300">
                    <DialogHeader>
                      <DialogDescription>
                        <div className="flex justify-between gap-6">
                          <div className="w-2/3">
                            <img
                              src="https://jagogame.id/wp-content/uploads/2024/10/Yu-Gi-Oh-Early-Days-Collection-2.jpg"
                              alt="foto"
                              className="w-full"
                            />
                          </div>
                          <div className="w-1/3 flex flex-col">
                            <div className="flex  gap-3 ">
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
                                  <span className="text-gray-500 text-sm ">
                                    @jayasaleh
                                  </span>{" "}
                                  <span className="text-gray-500">•</span>
                                  <span className="text-gray-500 text-sm">
                                    1h
                                  </span>
                                </div>
                                <p className="text-justify text-sm dark:text-gray-300 text-gray-600">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Maxime quis aut eos iste
                                  consequatur. Tempora quos id saepe nesciunt
                                  quam, assumenda quod, laborum eveniet
                                  recusandae quia, beatae quidem nam laboriosam!
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
                            <div className="mt-10">
                              <div className="flex gap-x-5">
                                <Avatar className="h-10 w-10">
                                  <AvatarImage
                                    src="https://i.pinimg.com/736x/40/c4/9d/40c49df48aeeac3b9dda97e66e7312de.jpg"
                                    alt="Your Profile"
                                  />
                                  <AvatarFallback>JS</AvatarFallback>
                                </Avatar>
                                <Input placeholder="Type Your Reply?" />
                                <label htmlFor="images">
                                  <RiImageAiLine size={30} />
                                </label>
                                <input
                                  type="file"
                                  hidden
                                  id="images"
                                  name="images"
                                />
                                <Button
                                  className="rounded-full bg-green-600"
                                  onClick={submitPost}
                                >
                                  Post
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <NavLink
                  to="/status-foto"
                  className="hover:opacity-50 "
                ></NavLink>
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
          <hr className="mt-3 mb-3" /> */}
        </div>
      </div>
    </div>
  );
}

export default Beranda;
