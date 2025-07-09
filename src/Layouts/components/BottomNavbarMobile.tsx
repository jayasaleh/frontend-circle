import { Button } from '@/components/ui/button';
import { useAuthLogin } from '@/stores/authLogin';
import { Heart, Home, Search, User } from 'lucide-react';
import { TbLogout } from 'react-icons/tb';
import { NavLink, useNavigate } from 'react-router-dom';

function BottomNavbarMobile() {
  const linkClass = 'flex flex-col items-center gap-1 p-2 rounded-lg';
  const activeClass = 'text-green-500'; // Kelas untuk link yang aktif
  const { logout } = useAuthLogin();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
    // Wadah utama: fixed di bawah, hanya terlihat di mobile (hilang di `md` ke atas)
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-neutral-800 p-2 z-50">
      <div className="flex justify-around items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : 'text-gray-400'}`
          }
        >
          <Home size={24} />
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : 'text-gray-400'}`
          }
        >
          <Search size={24} />
        </NavLink>

        <NavLink
          to="/follows"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : 'text-gray-400'}`
          }
        >
          <Heart size={24} />
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : 'text-gray-400'}`
          }
        >
          <User size={24} />
        </NavLink>
        <Button className="" onClick={handleLogout} variant="outline">
          <TbLogout size={20} className="dark:text-white" />
        </Button>
      </div>
    </nav>
  );
}

export default BottomNavbarMobile;
