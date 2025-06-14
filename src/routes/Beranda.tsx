import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePostTweet } from "@/hooks/usePostTweet";
import { useAuthLogin } from "@/stores/authLogin";
import axios from "axios";
import { Heart, Image, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Beranda() {
  interface TweetForm {
    userId?: number;
    content: string;
    images?: string;
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
  const { register, handleSubmit, reset } = useForm<TweetForm>();

  const { mutate: postTweet, isPending } = usePostTweet({
    onSuccess: () => {
      toast.success("Berhasil posting tweet");
      reset();
    },
    onError: (err) => {
      toast.error(`Gagal Post tweet ${err.message}`);
    },
  });

  const { user } = useAuthLogin();

  if (!user) {
    return;
  }
  const onSubmit = (data: TweetForm) => {
    postTweet({
      content: data.content,
      userId: user.id,
      images: data.images,
    });
    const payload = {
      content: data.content,
      userId: user.id,
      ...(data.images && { images: data.images }),
    };
    postTweet(payload);
  };

  return (
    <div className="w-full border-x h-full p-2">
      {/*Posting Input*/}
      <div className="flex flex-col space-y-4 ">
        <h2 className="text-xs md:text-2xl font-bold">Home</h2>
        <div className="border-b-1 p-4 sticky top-0">
          <form
            className="flex items-center gap-3 "
            onSubmit={handleSubmit(onSubmit)}
          >
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
              id="content"
              {...register("content")}
            />
            <Button variant="ghost" size="icon" className="rounded-full">
              <Image size={20} />
            </Button>

            <Button className="rounded-full bg-green-600">Post</Button>
          </form>
        </div>
      </div>
      <div className="">
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
        </div>
      </div>
    </div>
  );
}

export default Beranda;
