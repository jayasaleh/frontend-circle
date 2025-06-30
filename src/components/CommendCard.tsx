// file: src/components/comments/CommentCard.tsx

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { CommentWithUser } from '@/types/tweet'; // Tipe data untuk satu komentar

interface CommentCardProps {
  comment: CommentWithUser;
}

const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <div className="flex gap-3 border-b p-3">
      <Avatar className="h-9 w-9">
        <AvatarImage
          src={comment.user.photo || ''}
          alt={comment.user.username}
        />
        <AvatarFallback>
          {comment.user.name.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm">{comment.user.name}</span>
          <span className="text-gray-500 text-xs">
            @{comment.user.username}
          </span>
          <span className="text-gray-500 text-xs">
            · {formatSocialMediaTime(comment.createdAt)}
          </span>
        </div>
        <p className="text-sm mt-1">{comment.content}</p>
      </div>
    </div>
  );
};

export default CommentCard;
