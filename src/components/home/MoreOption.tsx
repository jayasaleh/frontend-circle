import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit2Icon, MoreVertical, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useDeleteTweet } from "@/hooks/useDeleteTweet";
import { AlertDialogDelete } from "../AlertDialog";
type deleteTweetProps = {
  tweetId: number;
};

function MoreOption({ tweetId }: deleteTweetProps) {
  const { mutate: deleteTweet, isPending: isDeleting } = useDeleteTweet();

  const handleDeleteTweet = () => {
    deleteTweet(tweetId);
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <MoreVertical size={15} />
        </DropdownMenuTrigger>
        <DropdownMenuContent side="left" className="space-x-2">
          <DropdownMenuGroup>
            <DropdownMenuItem className="hover:bg-blue-500">
              <Edit2Icon /> <span className="dark:text-white">Edit</span>
            </DropdownMenuItem>
            <AlertDialogDelete onConfirm={handleDeleteTweet}>
              <DropdownMenuItem
                className="hover:bg-red-500"
                onSelect={(e) => e.preventDefault()}
                disabled={isDeleting}
              >
                <Trash2 /> <span>Delete</span>
              </DropdownMenuItem>
            </AlertDialogDelete>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default MoreOption;
