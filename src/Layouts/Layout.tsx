// file: src/layouts/Layout.tsx atau nama file layout Anda

import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

// ✅ 1. Impor hook Zustand dan ikon spinner
import { useAuthLogin } from '@/stores/authLogin';
import { PiSpinner } from 'react-icons/pi';

function Layout() {
  // ✅ 2. Dapatkan status hidrasi dari store
  const hasHydrated = useAuthLogin((state) => state._hasHydrated);

  // ✅ 3. Lakukan pengecekan di sini, sebelum me-render layout utama
  if (!hasHydrated) {
    // Tampilkan loading screen di seluruh halaman sampai state siap
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <PiSpinner className="animate-spin" size={40} />
      </div>
    );
  }

  // ✅ 4. Jika sudah terhidrasi, baru tampilkan layout utama aplikasi Anda
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] h-screen ">
      <aside className=" md:w-full hidden md:block border-r border-gray-700">
        <LeftSide />
      </aside>
      <main className=" md:max-w-[850px] pt-2 ">
        <Outlet />
      </main>
      <aside className="md:min-w-[300px] md:block border-l border-gray-700">
        <RightSide />
      </aside>
    </div>
  );
}

export default Layout;
