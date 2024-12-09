
import React from 'react';
import { getInitials } from '../../utils/helper';

const ProfileInfo = ({ userInfo, onLogout }) => {
  return (
    <div className='flex items-center justify-center gap-3'>
      <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100'>
        {getInitials(userInfo?.fullName)}
      </div>
      <div className="flex items-center justify-center gap-2">
        <p className="text-sm font-medium">{userInfo?.fullName}</p>
        <p className='text-lg'>|</p>
        <button
          className='text-xs outline-none h-[36px] bg-[#faa935] rounded-full font-Source text-white tracking-wider uppercase w-[100px] flex items-center justify-center'
          onClick={onLogout}
        >Logout</button>      </div>
    </div>
  );
};

export default ProfileInfo;
