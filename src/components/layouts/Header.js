import React from 'react';
import Logo from '@assets/img/logo.svg';
import UserImage from '@assets/img/user.svg';
import Avatar from '@components/Avatar';
import Bell from '@components/NotificationBell';

export default function Header() {
  return (
    <header className='w-full px-6 sm:px-8 lg:px-10 py-4 bg-primary-900'>
      <div className='w-full flex justify-between items-center text-white'>
        <div className='flex items-center'>
          <img src={Logo} alt='FinTech logo' className='mr-3' />
          <h1 className='font-head font-extrabold text-xl hidden sm:block'>
            FinTech
          </h1>
        </div>
        <div>
          <ul className='flex items-center'>
            <li className='mr-4'>
              <Bell on />
            </li>
            <li>
              <Avatar url={UserImage} name='Adedeji Stephen' />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
