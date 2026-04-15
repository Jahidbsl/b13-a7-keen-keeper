'use client';

import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, Ghost } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
                <div className="relative mb-8 flex justify-center">
                    <div className="absolute inset-0 bg-indigo-200 blur-3xl rounded-full opacity-20 animate-pulse"></div>
                    <div className="relative bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-indigo-100/50">
                        <Ghost className="w-20 h-20 text-indigo-600" />
                    </div>
                </div>

                <h1 className="text-[5rem] font-black text-slate-900 leading-none mb-2">
                    404
                </h1>
                
                <h2 className="text-2xl font-bold text-slate-800 mb-4">
                    Page Not Found
                </h2>
                
                <p className="text-slate-500 mb-10 leading-relaxed">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <div className="flex flex-col gap-3">
                    <Link 
                        href="/"
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all active:scale-[0.98] shadow-lg shadow-indigo-200"
                    >
                        <Home className="w-5 h-5" />
                        Return Home
                    </Link>
                    
                    <button 
                        onClick={() => window.history.back()}
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border-2 border-slate-100 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-[0.98]"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </div>

                <div className="mt-12 flex justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;