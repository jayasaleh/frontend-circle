import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Edit2Icon, MoreVertical, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { useDeleteTweet } from '@/hooks/useDeleteTweet';
import { AlertDialogDelete } from '../AlertDialog';
import EditTweetModal from '../EditTweetModal';
import { FaSpinner } from 'react-icons/fa';
import { useState } from 'react';
type deleteTweetProps = {
  tweetId: number;
};

function MoreOption({ tweetId }: deleteTweetProps) {
  const { mutate: deleteTweet, isPending: isDeleting } = useDeleteTweet();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const handleDeleteTweet = () => {
    deleteTweet(tweetId);
    // setIsMenuOpen(false);
  };

  return (
    <div>
      <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <MoreVertical size={15} />
        </DropdownMenuTrigger>
        <DropdownMenuContent side="left" className="space-x-2">
          <DropdownMenuGroup>
            <EditTweetModal>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                <Edit2Icon /> <span className="dark:text-white">Edit</span>
              </DropdownMenuItem>
            </EditTweetModal>

            <DropdownMenuItem
              onSelect={() => {
                setIsMenuOpen(false);
                setIsAlertOpen(true);
              }}
              className=" focus:text-red-500 ..."
              disabled={isDeleting}
            >
              <Trash2 /> {isDeleting ? 'Deleting...' : 'Delete'}
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialogDelete
        open={isAlertOpen}
        onOpenChange={setIsAlertOpen}
        onConfirm={handleDeleteTweet}
      />
    </div>
  );
}

export default MoreOption;
