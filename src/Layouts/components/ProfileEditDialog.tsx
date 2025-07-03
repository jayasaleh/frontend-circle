// file: src/components/modals/ProfileEditDialog.tsx

'use client';

import { useRef, useState, useEffect } from 'react';
import { Camera, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useAuthLogin } from '@/stores/authLogin';
import { useUpdateProfile } from '@/features/profile/hooks/useUpdateProfile';

export default function ProfileEditDialog() {
  const { user } = useAuthLogin();
  const [open, setOpen] = useState(false);

  // State untuk form input
  const [name, setName] = useState(user?.name || '');
  const [username, setUsername] = useState(user?.username || '');
  const [bio, setBio] = useState(user?.bio || '');

  // State untuk file gambar dan URL preview-nya
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(
    user?.photo || null
  );

  // Ref untuk memicu klik pada input file yang tersembunyi
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ✅ Panggil hook mutasi, berikan callback untuk menutup dialog saat sukses
  const { mutate: updateProfile, isPending } = useUpdateProfile({
    onSuccess: () => setOpen(false),
  });

  // Handler untuk perubahan gambar
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoFile(file); // Simpan objek File ke dalam state
      setPreviewImage(URL.createObjectURL(file)); // Buat URL preview untuk ditampilkan
    }
  };

  // Handler untuk submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah halaman refresh

    const formData = new FormData();

    // Hanya tambahkan field jika nilainya berubah dari data asli
    if (name !== user?.name) formData.append('name', name);
    if (username !== user?.username) formData.append('username', username);
    if (bio !== user?.bio) formData.append('bio', bio);
    if (photoFile) {
      formData.append('photo', photoFile);
    }

    // Hanya jalankan mutasi jika ada perubahan
    if (formData.entries().next().done === false) {
      updateProfile(formData);
    } else {
      // Jika tidak ada perubahan, tutup saja modalnya
      setOpen(false);
    }
  };

  // Reset state form setiap kali modal dibuka/ditutup
  useEffect(() => {
    if (user) {
      setName(user.name);
      setUsername(user.username);
      setBio(user.bio || '');
      setPreviewImage(user.photo || null);
      setPhotoFile(null);
    }
  }, [user, open]);

  if (!user) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-24 text-xs rounded-full">
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black border-neutral-800 text-white">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>
        {/* ✅ Hubungkan form dengan handler onSubmit */}
        <form onSubmit={handleSubmit}>
          {/* Bagian Banner & Avatar */}
          <div className="relative mb-16">
            <div className="h-32 w-full bg-neutral-700 rounded-lg"></div>
            <div className="absolute -bottom-12 left-4">
              <div className="relative group">
                <div className="w-24 h-24 rounded-full border-4 border-black bg-black">
                  {/* ✅ Tampilkan previewImage di sini */}
                  <img
                    src={previewImage || user.photo}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Camera className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Bagian Form Input */}
          <div className="p-4 space-y-4">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
          </div>

          {/* ✅ Pindahkan Tombol Aksi ke DialogFooter untuk layout yang benar */}
          <DialogFooter className="px-4 pb-4">
            <Button type="submit" className="rounded-full" disabled={isPending}>
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isPending ? 'Saving...' : 'Save'}
            </Button>
          </DialogFooter>
        </form>
        {/* ✅ Hubungkan ref dan onChange ke input file */}
        <Input
          id="photo-upload-trigger"
          type="file"
          className="hidden"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleImageChange}
        />
      </DialogContent>
    </Dialog>
  );
}
