'use client'; 

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AlertCircle, RefreshCcw, Home, Ghost } from 'lucide-react';

export default function Error({ error, reset }) {
    const router = useRouter();

    useEffect(() => {
       
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-6">
            <div className="max-w-xl w-full">
                <div className="bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 md:p-12 text-center">
                    
                   
                    <div className="relative w-24 h-24 mx-auto mb-8">
                        <div className="absolute inset-0 bg-red-50 rounded-full scale-150 blur-2xl opacity-60"></div>
                        <div className="relative flex items-center justify-center w-full h-full bg-white rounded-3xl shadow-inner border border-red-50">
                            <Ghost className="w-12 h-12 text-red-500 animate-bounce" />
                        </div>
                    </div>

                   
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
                        Something went wrong!
                    </h2>
                   

                  
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <button
                            onClick={() => reset()}
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-semibold hover:bg-indigo-700 transition-all active:scale-95 shadow-lg shadow-indigo-200"
                        >
                            <RefreshCcw className="w-5 h-5" />
                            Try Again
                        </button>

                        <button
                            onClick={() => router.push('/')}
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-50 text-slate-700 border border-slate-200 rounded-2xl font-semibold hover:bg-slate-100 transition-all active:scale-95"
                        >
                            <Home className="w-5 h-5" />
                            Back to Home
                        </button>
                    </div>

                   
                    <div className="mt-10 pt-8 border-t border-slate-50">
                        <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">
                            Error Reference: {error?.digest || "ERR_500_GLOBAL"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}