import { useState } from 'react';
import Followers from './Followers';
import Following from './Following';

function FollowMenu() {
  const [button, setButton] = useState('Following');
  return (
    <div>
      <div className="w-full rounded-2xl  ">
        {['Following', 'Followers'].map((field, i) => (
          <button
            key={i}
            onClick={() => setButton(field)}
            className={`w-1/2 text-xl cursor-pointer  font-semibold ${
              button == field ? 'bg-green-700 ' : ''
            }${button === 'Following' ? 'rounded-l-2xl' : 'rounded-r-2xl'}`}
          >
            {field}
          </button>
        ))}
      </div>
      {button == 'Following' ? <Following /> : <Followers />}
    </div>
  );
}

export default FollowMenu;
