"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import { usePathname } from 'next/navigation';
import UsageTrack from './UsageTrack';
import Link from 'next/link'; // Importando Link do Next.js

function Sidenav() {
  const MenuList = [
    {
      name: 'Home',
      icon: Home,
      path: '/dashboard',
    },
    {
      name: 'History',
      icon: FileClock,
      path: '/dashboard/history',
    },
    {
      name: 'Billing',
      icon: WalletCards,
      path: '/dashboard/billing',
    },
    {
      name: 'Settings',
      icon: Settings,
      path: '/dashboard/settings',
    },
  ];

  const path = usePathname();
  const [currentPath, setCurrentPath] = useState(path); // Adiciona um estado para o caminho atual

  useEffect(() => {
    console.log(path);
    setCurrentPath(path); // Atualiza o estado sempre que o caminho muda
  }, [path]); // Mantém 'path' como dependência

  return (
    <div className='h-screen relative p-5 shadow-sm border bg-white'>
      <div className='flex justify-center'>
        <Image src={'/logo.svg'} alt='logo' width={120} height={100} />
      </div>
      <hr className='my-6 border' />

      <div className='mt-3'>
        {MenuList.map((menu, index) => (
          <Link href={menu.path} key={index} passHref> {/* Utilizando o componente Link */}
            <div
              className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${currentPath === menu.path && 'bg-primary text-white'}`}
            >
              <menu.icon className='h-6 w-6' />
              <h2 className='text-lg'>{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className='absolute bottom-10 left-0 w-full'>
        <UsageTrack />
      </div>
    </div>
  );
}

export default Sidenav;
