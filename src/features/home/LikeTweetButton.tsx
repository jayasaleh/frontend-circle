import { useLikeButton } from '@/hooks/useLikeTweetToggle';
import { cn } from '@/lib/utils';
import { Heart, Loader2 } from 'lucide-react';
import { Button } from '../../components/ui/button';

interface LikeButtonProps {
  tweetId: number;
}

const LikeButton = ({ tweetId }: LikeButtonProps) => {
  const { isLiked, isLoading, doLike, doUnlike } = useLikeButton(tweetId);

  const handleLikeToggle = () => {
    if (isLiked) {
      doUnlike(tweetId);
    } else {
      doLike(tweetId);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-muted-foreground hover:text-red-500"
      onClick={handleLikeToggle}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Heart
          size={18}
          className={cn('transition-colors', {
            'fill-red-500 text-red-500': isLiked,
          })}
        />
      )}
    </Button>
  );
};

export default LikeButton;
