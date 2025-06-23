import { Button } from "@/components/ui/button";
import { useFollowToggle } from "@/hooks/useFollowToggle";
import { FollowToggleProps } from "@/types/toggleFollow";

const FollowToggleButton = ({
  followId,
  initialIsFollowing,
}: FollowToggleProps) => {
  const { isFollowing, isLoading, handleToggleFollow } = useFollowToggle({
    followId,
    initialIsFollowing,
  });
  return (
    <Button
      onClick={handleToggleFollow}
      disabled={isLoading}
      variant={isFollowing ? "secondary" : "default"}
      size={"sm"}
      className="cursor-pointer"
    >
      {isLoading ? "..." : isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};

export default FollowToggleButton;
