import LikeButton from '@/features/home/LikeTweetButton';
import MoreOption from '@/features/home/MoreOption';
import { TweetCardSkeleton } from '@/components/SkeletonUiTweet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useGetTweetProfile } from '@/hooks/useGetTweetProfile';
import { FormatDate } from '@/lib/DateTime';
import { useAuthLogin } from '@/stores/authLogin';
import { MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

function AllPostProfile({ userId }: { userId: number }) {
  const { user } = useAuthLogin();
  if (!user) {
    return;
  }
  const { data: tweetsFeed, isLoading } = useGetTweetProfile(userId);

  if (isLoading) {
    return <TweetCardSkeleton />;
  }
  if (!tweetsFeed) {
    return (
      <div className="flex-col gap-5">
        <p>tidak ada data</p>
      </div>
    );
  }
  if (tweetsFeed.length === 0) {
    return (
      <div className="flex h-32 items-center justify-center">
        <i>~ belum ada Tweet ~</i>
      </div>
    );
  }
  return (
    <div className="flex-col gap-5">
      {tweetsFeed.map((tweet) => (
        <div className="flex gap-3 border-b-1 p-3" key={tweet.id}>
          <Avatar className="h-10 w-10">
            <AvatarImage src={tweet.user.photo} alt="Your Profile" />
            <AvatarFallback>{tweet.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex gap-1 items-center gap-y-2">
              <span className="font-bold dark:text-white text-sm ">
                {tweet.user.name}
              </span>
              <span className="text-gray-500 text-sm ">
                @{tweet.user.username}
              </span>
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
                <span className="text-sm">{tweet._count.likes}</span>
              </div>
              <Link
                to={`/detail/${tweet.id}`}
                className="flex items-center gap-1 hover:text-[#10b981]"
              >
                <MessageSquare size={20} />
                <span>{tweet._count.comments} Replies</span>
              </Link>
            </div>
          </div>
          <div>
            {user.id === tweet.userId ? <MoreOption tweetId={tweet.id} /> : ''}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllPostProfile;
