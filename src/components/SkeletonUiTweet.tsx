import { Skeleton } from '@/components/ui/skeleton';

export const TweetCardSkeleton = () => {
  return (
    // Wadah utama, meniru kelas CSS dari kartu tweet asli Anda
    <div className="flex gap-3 border-b border-gray-200 dark:border-gray-800 p-3">
      {/* Placeholder untuk Avatar */}
      <Skeleton className="h-10 w-10 rounded-full" />

      <div className="flex-1 space-y-3">
        {/* Placeholder untuk Header (Nama, Username, Waktu) */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-[120px] rounded" />
          <Skeleton className="h-4 w-[80px] rounded" />
        </div>

        {/* Placeholder untuk Konten Teks Tweet */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full rounded" />
          <Skeleton className="h-4 w-[90%] rounded" />
          <Skeleton className="h-4 w-[75%] rounded" />
        </div>

        {/* Placeholder untuk Tombol Aksi (Like & Replies) */}
        <div className="flex items-center gap-6 pt-2">
          <Skeleton className="h-5 w-16 rounded" />
          <Skeleton className="h-5 w-20 rounded" />
        </div>
      </div>
    </div>
  );
};
