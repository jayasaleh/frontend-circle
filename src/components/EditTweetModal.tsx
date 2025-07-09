import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Textarea } from './ui/textarea';
import { ImageUp, Loader2, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tweet } from '@/types/tweet';
import { usePatchTweet } from '@/features/home/hooks/usePatchTweet';

type EditTweetModalProps = {
  tweet: Tweet;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};
function EditTweetModal({ tweet, onOpenChange, open }: EditTweetModalProps) {
  // const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(tweet?.content || '');
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(
    tweet?.images || ''
  );

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const { mutate: updateTweet, isPending } = usePatchTweet({
    onSuccess: () => onOpenChange(false),
  });
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('content', content);
    if (photoFile) formData.append('images', photoFile);
    if (!previewImage && tweet.images) formData.append('image', 'true');
    updateTweet({ tweetId: tweet.id, formData });
  };
  useEffect(() => {
    if (open) {
      setContent(tweet.content);
      setPreviewImage(tweet.images);
      setPhotoFile(null);
    }
  }, [open, tweet]);
  return (
    <div>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Tweet</DialogTitle>
          </DialogHeader>
          <DialogDescription> </DialogDescription>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Textarea
              rows={4}
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
            {previewImage && (
              <div className="relative">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="rounded-lg w-full object-cover max-h-60"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 h-6 w-6 rounded-full"
                  onClick={() => setPreviewImage(null)}
                >
                  <X size={16} />
                </Button>
              </div>
            )}
            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-sky-500 hover:text-sky-400"
              >
                <ImageUp />
              </button>
              <DialogFooter>
                <Button type="submit" disabled={isPending}>
                  {isPending && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {isPending ? 'Saving...' : 'Save'}
                </Button>
              </DialogFooter>
            </div>
          </form>
          <Input
            id="photo-upload"
            type="file"
            className="hidden"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleImageChange}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditTweetModal;
