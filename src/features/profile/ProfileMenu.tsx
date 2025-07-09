import AllPostProfile from '@/features/profile/AllPostProfile';
import MediaProfile from '@/features/profile/MediaProfile';
import { useState } from 'react';

const ProfileMenu = ({ userId }: { userId: number }) => {
  const [button, setButton] = useState('All Post');
  return (
    <div>
      <div className="flex justify-center gap-5">
        {['All Post', 'Media Profile'].map((field, i) => (
          <button
            key={i}
            onClick={() => setButton(field)}
            className={`text-xl font-semibold rounded-none w-90 cursor-pointer  ${
              button == field ? 'border-b-2 border-[#4CAF50]' : ''
            }`}
          >
            {field}
          </button>
        ))}
      </div>

      {button == 'All Post' ? (
        <AllPostProfile userId={userId} />
      ) : (
        <MediaProfile userId={userId} />
      )}
    </div>
  );
};

export default ProfileMenu;
