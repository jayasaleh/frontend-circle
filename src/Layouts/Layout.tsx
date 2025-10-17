import { useAuthLogin } from '@/stores/authLogin';
import { PiSpinner } from 'react-icons/pi';
import { Outlet } from 'react-router-dom';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import BottomNavbarMobile from './components/BottomNavbarMobile';

function Layout() {
  const hasHydrated = useAuthLogin((state) => state._hasHydrated);

  if (!hasHydrated) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <PiSpinner className="animate-spin" size={40} />
      </div>
    );
  }

  return (
    <div className=" grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr_1fr] h-screen ">
      <aside className="hidden md:w-full  md:block border-r border-gray-700">
        <LeftSide />
      </aside>
      <main className=" md:max-w-[850px] pt-2 ">
        <h1 className="text-2xl md:hidden lg:hidden text-center font-bold text-green-700 mt-2">
          Circle
        </h1>
        <Outlet />
      </main>
      <aside className="hidden lg:min-w-[300px] lg:block border-l border-gray-700">
        <RightSide />
      </aside>
      <BottomNavbarMobile />
    </div>
  );
}

export default Layout;
