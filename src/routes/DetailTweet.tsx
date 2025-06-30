import LikeButton from '@/components/home/LikeTweetButton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useGetDetailTweet } from '@/hooks/useGetDetailTweet';
import { usePostComment } from '@/hooks/usePostComment';
import { FormatDate } from '@/lib/DateTime';
import { cn } from '@/lib/utils';
import { useAuthLogin } from '@/stores/authLogin';
import { Heart, Loader2, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
function DetailTweet() {
  const [replyContent, setReplyContent] = useState('');
  const { user } = useAuthLogin();
  if (!user) {
    return;
  }
  const params = useParams();
  const tweetId = params.id ? parseInt(params.id, 10) : 0;
  const { mutate: commentTweet, isPending: isReplying } = usePostComment(
    tweetId,
    {
      onSuccess: () => {
        setReplyContent('');
      },
    }
  );
  const { data: tweetDetails, isLoading, isError } = useGetDetailTweet(tweetId);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Gagal memuat tweet.</div>;
  if (!tweetDetails) {
    return <p>tes</p>;
  }
  const handlePostReply = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!replyContent) {
      toast.error('Reply tidak boleh kosong');
      return;
    }
    commentTweet({ content: replyContent, tweetId: tweetId });
  };
  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex gap-4 border-b-1 p-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={tweetDetails.user.photo} alt="Your Profile" />
          <AvatarFallback>{tweetDetails.user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex flex-col mb-2">
            <div className="flex items-center gap-1">
              <span className="font-bold dark:text-white text-sm ">
                {tweetDetails.user.name}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500 text-sm">
                {FormatDate(tweetDetails.createdAt)}
              </span>
            </div>
            <span className="text-gray-500 text-sm ">
              @{tweetDetails.user.username}
            </span>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <p className="text-justify text-sm dark:text-gray-300 text-gray-600">
              {tweetDetails.content}
            </p>
          </div>

          <div className="flex items-center gap-6 mt-2 text-gray-400">
            <LikeButton tweetId={tweetDetails.id} />
            {tweetDetails._count.likes} Like
            <Link
              to={'/detail'}
              className="flex items-center gap-1 hover:text-[#10b981]"
            >
              <MessageSquare size={20} />
              <span className="text-sm">
                {tweetDetails._count.comments} Replies
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="border-b-1 p-4 sticky top-0">
          <form className="flex items-center gap-4" onSubmit={handlePostReply}>
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.photo} alt="Your Profile" />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div
                contentEditable
                className={cn(
                  'w-full min-h-[40px] md:max-w-[450px] outline-none bg-transparent text-white placeholder:text-gray-500',
                  !replyContent &&
                    "before:content-['Reply..'] before:text-gray-500"
                )}
                onInput={(e) =>
                  setReplyContent(e.currentTarget.textContent || '')
                }
                id="content"
              />
            </div>
            <Button
              className="rounded-full hover:bg-green-700 dark:text-white"
              type="submit"
              disabled={isReplying}
            >
              {isReplying && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Reply
            </Button>
          </form>
        </div>
        <div className="flex flex-col mt-2">
          {tweetDetails.comments.map((comment) => (
            <div className="flex gap-4 border-b-1 p-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={comment.user.photo} alt="Your Profile" />
                <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 ">
                <div className="flex items-center gap-y-3 mb-2">
                  <div className="flex flex-col ">
                    <div className="flex items-center gap-1">
                      <span className="font-bold dark:text-white text-sm ">
                        {comment.user.name}
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-500 text-sm">
                        {FormatDate(comment.createdAt)}
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm ">
                      @{comment.user.username}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <p className="text-justify text-sm dark:text-gray-300 text-gray-600">
                    {comment.content}
                  </p>
                </div>

                <div className="flex items-center gap-6 mt-2 text-gray-400">
                  <button className="flex items-center gap-1 ">
                    <Heart
                      size={20}
                      className="hover:text-[#10b981] cursor-pointer"
                    />
                    <span className="text-sm"> 0</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailTweet;
