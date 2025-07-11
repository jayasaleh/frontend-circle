import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import LikeButton from '@/features/home/LikeTweetButton';
import MoreOption from '@/features/home/MoreOption';
import { FormatDate } from '@/lib/DateTime';
import { useAuthLogin } from '@/stores/authLogin';
import { Tweet } from '@/types/tweet';
import { MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeedsApiResponse {
  tweet: Tweet;
}
const TweetCard = ({ tweet }: FeedsApiResponse) => {
  const { user } = useAuthLogin();
  return (
    <div className="flex gap-3 border-b border-neutral-800 p-4" key={tweet.id}>
      <Link to={`/profile/${tweet.user.id}`}>
        <Avatar className="h-10 w-10">
          <AvatarImage
            src={tweet.user.photo || ''}
            alt={tweet.user.username}
            className="object-cover"
          />
          <AvatarFallback>
            {tweet.user.name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </Link>

      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <Link
                to={`/profile/${tweet.user.id}`}
                className="hover:underline"
              >
                <span className="font-bold text-sm">{tweet.user.name}</span>
              </Link>
              <span className="text-sm text-muted-foreground">
                @{tweet.user.username}
              </span>
              <span className="text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground hover:underline">
                {FormatDate(tweet.createdAt)}
              </span>
            </div>
            <p className="text-sm mt-1 whitespace-pre-wrap">{tweet.content}</p>
          </div>
          <div>{user?.id === tweet.userId && <MoreOption tweet={tweet} />}</div>
        </div>

        {tweet.images && (
          <Dialog>
            <DialogTrigger asChild>
              <img
                src={tweet.images}
                className="mt-3 rounded-xl border border-neutral-700 max-h-96 w-3/4 object-cover cursor-pointer"
                alt="Tweet image"
              />
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

        <div className="flex items-center gap-6 mt-3 text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <LikeButton tweetId={tweet.id} />
            <span className="text-sm">{tweet._count.likes}</span>
          </div>
          <Link
            to={`/detail/${tweet.id}`}
            className="flex items-center gap-1.5 hover:text-sky-500"
          >
            <MessageSquare size={18} />
            <span className="text-sm">{tweet._count.comments} Replies</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
