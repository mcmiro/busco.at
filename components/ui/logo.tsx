'use client';
import React from 'react';
import Image from 'next/image';
import Busco from '@/public/logo.svg';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="w-[100px] h-full relative">
      <Link href="/">
        <Image src={Busco.src} layout="fill" alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
