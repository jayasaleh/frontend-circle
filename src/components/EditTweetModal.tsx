import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Textarea } from './ui/textarea';
import { ImageUp, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

type EditTweetModalProps = {
  children: React.ReactNode;
};

function EditTweetModal({ children }: EditTweetModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Tweet</DialogTitle>
          </DialogHeader>
          <DialogDescription> </DialogDescription>
          <form className="space-y-4">
            <Textarea rows={4} />

            <div className="flex justify-between items-center">
              <label className="cursor-pointer text-blue-500 hover:text-blue-600">
                <ImageUp />
                <Input type="file" className="hidden" accept="image/*" />
              </label>
              <DialogFooter>
                <Button type="submit">simpan</Button>
              </DialogFooter>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditTweetModal;
