import { TweetCardSkeleton } from '@/components/SkeletonUiTweet';
import { useGetTweetProfile } from '@/hooks/useGetTweetProfile';
import { useAuthLogin } from '@/stores/authLogin';
import { Link } from 'react-router-dom';

function MediaProfile({ userId }: { userId: number }) {
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
  return (
    <div className="flex flex-1 flex-col">
      <div className="h-[100vh] overflow-auto mt-4 no-scrollbar">
        <div className="grid grid-cols-3 grid-rows-3 gap-1">
          {tweetsFeed.map(
            (tweet) =>
              tweet.images && (
                <Link to={`/detail/${tweet.id}`}>
                  <img
                    src={tweet.images}
                    alt=""
                    className="w-full h-50 object-cover transition-transform duration-300 hover:scale-120"
                  />
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default MediaProfile;
