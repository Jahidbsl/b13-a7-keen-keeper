'use client';

import React from 'react';
import { HashLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className="fixed inset-0 z- flex flex-col justify-center items-center bg-white">
      <HashLoader color="#244D3F" size={60} />
      <p className="mt-4 text-[#244D3F] font-medium">Loading...</p>
    </div>
  );
}