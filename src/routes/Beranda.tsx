import { FormatDate } from '@/lib/DateTime';
import MoreOption from '@/features/home/MoreOption';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { Textarea } from '@/components/ui/textarea';
import { useGetTweets } from '@/hooks/useGetTweets';
import { usePostTweet } from '@/hooks/usePostTweet';
import { useAuthLogin } from '@/stores/authLogin';
import { TweetForm } from '@/types/tweetForm';
import { Heart, Image, Loader2, MessageSquare } from 'lucide-react';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import LikeButton from '@/features/home/LikeTweetButton';
import { Helmet } from 'react-helmet-async';
import { HomePageSkeleton } from '@/features/home/components/HomeSkeletonCard';

function Beranda() {
  const { register, handleSubmit, setValue, reset } = useForm<TweetForm>();
  const { user } = useAuthLogin();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleInputRef = () => {
    fileRef.current?.click();
  };

  const { mutate: postTweet, isPending } = usePostTweet({
    onSuccess: () => {
      toast.success('Berhasil posting tweet');
      reset();
      setPreviewImage(null);
    },
    onError: (err) => {
      toast.error(`Gagal Post tweet ${err.message}`);
    },
  });

  const { data: tweetsFeed, isLoading, isError } = useGetTweets();

  if (!user) {
    return <p>Loading user...</p>;
  }

  if (isLoading) {
    return <HomePageSkeleton />;
  }

  if (!tweetsFeed) {
    return <p>Loading tweets...</p>;
  }

  const onSubmit = (data: TweetForm) => {
    const formData = new FormData();
    formData.append('content', data.content);
    formData.append('userId', String(user.id));

    if (data.images) {
      formData.append('images', data.images);
    }
    postTweet(formData);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setValue('images', file);
    }
  };
  return (
    <>
      <Helmet>
        <title>Circle</title>
        <meta
          name="description"
          content="Lihat apa yang terjadi di Circle saat ini. Feed utama dari teman dan komunitas Anda."
        />
      </Helmet>
      <div className="w-full border-x h-full p-2">
        {/*Posting Input*/}
        <div className="flex flex-col ">
          <div className="border-b-1 p-4 sticky top-0">
            <form
              className="flex items-center gap-3 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.photo} alt="Your Profile" />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <Textarea
                placeholder="What's is happening?"
                className="text-lg flex-1"
                id="content"
                {...register('content')}
                required
              />
              <Label htmlFor="images" className="cursor-pointer inline-block">
                <Image
                  size={25}
                  className="hover:text-primary "
                  onClick={handleInputRef}
                />
              </Label>
              <Input
                id="images"
                type="file"
                hidden
                {...register('images')}
                onChange={handleImageChange}
              />

              <Button
                className="rounded-full hover:bg-green-700 dark:text-white"
                type="submit"
                disabled={isPending}
              >
                {isPending ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  'Post'
                )}
              </Button>
            </form>
            {previewImage && (
              <div className="w-full flex p-2 ml-11">
                <div className="w-1/2">
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="rounded-md w-full"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex-col gap-5">
          {tweetsFeed.map((tweet) => (
            <div className="flex gap-3 border-b-1 p-3" key={tweet.id}>
              <Link to={`/profile/${tweet.user.id}`}>
                <Avatar className="h-10 w-10">
                  <AvatarImage src={tweet.user.photo} alt="Your Profile" />
                  <AvatarFallback>{tweet.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </Link>
              <div className="flex-1">
                <div className="flex gap-1 items-center gap-y-2">
                  <Link to={`/profile/${tweet.user.id}`}>
                    <span className="font-bold dark:text-white text-sm ">
                      {tweet.user.name}
                    </span>
                    <span className="text-gray-500 text-sm ">
                      @{tweet.user.username}
                    </span>
                  </Link>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500 text-sm">
                    {FormatDate(tweet.createdAt)}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <p className="text-justify text-sm dark:text-gray-300 text-gray-600">
                    {tweet.content}
                  </p>
                  {tweet.images && (
                    <Dialog>
                      <DialogTrigger>
                        <div className="w-1/2">
                          <img
                            src={tweet.images}
                            className="rounded-md w-full"
                            alt="Tweet image"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        <img
                          src={tweet.images}
                          className="rounded-md w-full"
                          alt="Tweet image"
                        />
                      </DialogContent>
                    </Dialog>
                  )}
                </div>

                <div className="flex items-center gap-6 mt-2 text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <LikeButton tweetId={tweet.id} />
                    <span className="text-sm">{tweet.likes.length}</span>
                  </div>
                  <Link
                    to={`/detail/${tweet.id}`}
                    className="flex items-center gap-1 hover:text-[#10b981]"
                  >
                    <MessageSquare size={20} />
                    <span>{tweet.comments.length} Replies</span>
                  </Link>
                </div>
              </div>
              <div>
                {user.id === tweet.userId ? (
                  <MoreOption tweetId={tweet.id} />
                ) : (
                  ''
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Beranda;
