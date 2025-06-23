"use client";

import { useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ImageIcon, Loader2, Plus, Trash2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuthLogin } from "@/stores/authLogin";
import { usePostTweet } from "@/hooks/usePostTweet";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { TweetForm } from "@/types/tweetForm";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function CreatePostModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [postContent, setPostContent] = useState("");
  const imageInputRef = useRef<HTMLInputElement>(null);
  const { register, handleSubmit, setValue, reset } = useForm<TweetForm>();
  const { user } = useAuthLogin();
  const [previewImageModal, setPreviewImageModal] = useState<string | null>(
    null
  );
  const { mutate: postTweet, isPending } = usePostTweet({
    onSuccess: () => {
      toast.success("Berhasil posting tweet");
      reset();

      setIsOpen(false);
    },
    onError: (err) => {
      toast.error(`Gagal Post tweet ${err.message}`);
    },
  });
  if (!user) {
    return <p>Loading user...</p>; // ✅ return elemen, bukan "return;" saja
  }
  const onSubmit = (data: TweetForm) => {
    const formData = new FormData();
    formData.append("content", postContent);
    formData.append("userId", String(user.id));

    if (data.images) {
      formData.append("images", data.images);
    }
    postTweet(formData);
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setValue("images", file);
      setPreviewImageModal(imageUrl);
    }
  };
  const handleRemoveImage = () => {
    setPreviewImageModal(null); // Sembunyikan preview
    setValue("images", undefined); // Hapus file dari state form

    // Reset input file agar bisa memilih file yang sama lagi
    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full mb-4 flex items-center gap-2 justify-center rounded-full font-bold bg-green-600 h-10 hover:bg-green-700">
          <Plus size={20} className="dark:text-white" />
          <span className="text-md text-white">Create Post</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] bg-[#121212] border-gray-800 p-0 overflow-hidden">
        <div className="flex justify-end p-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <X />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <form className="px-4 pb-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-3">
            <Avatar className="h-10 w-10 border border-gray-700">
              <AvatarImage src={user.photo} alt="@username" />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div
                contentEditable
                className={cn(
                  "w-full min-h-[80px] outline-none bg-transparent text-white placeholder:text-gray-500",
                  !postContent &&
                    "before:content-['What_is_happening?!'] before:text-gray-500"
                )}
                onInput={(e) =>
                  setPostContent(e.currentTarget.textContent || "")
                }
                id="content"
              />
            </div>
          </div>
          <div className="h-[1px] w-full bg-gray-800 my-4" />
          <div className="flex justify-between items-center">
            <Label
              className=" text-green-500 hover:text-green-700"
              htmlFor="image"
            >
              <ImageIcon className="h-5 w-5" />
              <span className="sr-only">Add image</span>
            </Label>
            <Input id="image" type="file" hidden onChange={handleImageChange} />
            {previewImageModal && (
              <div className="w-full pl-14 pt-3">
                {/* PENTING: Wadah ini harus 'relative' untuk menjadi acuan posisi tombol hapus */}
                <div className="relative w-fit max-w-full">
                  <img
                    src={previewImageModal}
                    alt="Preview"
                    // Styling gambar: sudut lebih bulat, tinggi maksimal, dan object-cover
                    className="max-h-[350px] rounded-xl object-cover"
                  />
                  {/* Tombol hapus dengan styling yang lebih baik */}
                  <button
                    type="button" // Type 'button' agar tidak men-submit form
                    onClick={handleRemoveImage} // Panggil fungsi penghapus gambar
                    className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
                    aria-label="Hapus gambar" // Baik untuk aksesibilitas
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            )}
            <Button
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 "
              type="submit"
              disabled={isPending}
            >
              {isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Post"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
