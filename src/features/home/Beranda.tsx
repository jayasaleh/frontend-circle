import { TweetCardSkeleton } from '@/components/SkeletonUiTweet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { HomePageSkeleton } from '@/features/home/components/HomeSkeletonCard';
import { useGetTweets } from '@/hooks/useGetTweets';
import { usePostTweet } from '@/hooks/usePostTweet';
import TweetCard from '@/Layouts/components/TweetCard';
import { useAuthLogin } from '@/stores/authLogin';
import { TweetForm } from '@/types/tweetForm';
import { Image, Loader2 } from 'lucide-react';
import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

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

  const { data: tweetsFeed, isLoading } = useGetTweets();

  if (!user) {
    return <p>Loading user...</p>;
  }

  if (isLoading) {
    return <HomePageSkeleton />;
  }

  if (!tweetsFeed) {
    return <TweetCardSkeleton />;
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
                <AvatarImage
                  src={user.photo}
                  alt="Your Profile"
                  className="object-cover"
                />
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

        <div className="flex-col">
          {tweetsFeed.map((tweet) => (
            <TweetCard tweet={tweet} key={tweet.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Beranda;
