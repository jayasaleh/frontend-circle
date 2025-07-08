import EditTweetModal from '@/components/EditTweetModal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useDeleteTweet } from '@/hooks/useDeleteTweet';
import { Tweet } from '@/types/tweet';
import { Edit2Icon, MoreVertical, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { AlertDialogDelete } from '../../components/AlertDialog';

type MoreOptionProps = {
  tweet: Tweet;
};
function MoreOption({ tweet }: MoreOptionProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { mutate: deleteTweet, isPending: isDeleting } = useDeleteTweet();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const handleDeleteTweet = () => {
    deleteTweet(tweet.id);
  };

  return (
    <>
      <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <MoreVertical size={15} />
        </DropdownMenuTrigger>
        <DropdownMenuContent side="left" className="space-x-2">
          <DropdownMenuGroup>
            <DropdownMenuItem
              onSelect={() => {
                setIsMenuOpen(false);
                setIsEditModalOpen(true);
              }}
              className="cursor-pointer"
            >
              <Edit2Icon /> <span className="dark:text-white">Edit</span>
            </DropdownMenuItem>

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
      <EditTweetModal
        tweet={tweet}
        open={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
      />
      <AlertDialogDelete
        open={isAlertOpen}
        onOpenChange={setIsAlertOpen}
        onConfirm={handleDeleteTweet}
      />
    </>
  );
}

export default MoreOption;
