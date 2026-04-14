"use client";
import { FriendsContext } from '@/context/FriendsContextProvider';
import React, { useContext } from 'react';

const FriendsStats = () => {
    const { friends } = useContext(FriendsContext);
    return (
         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 transition-transform hover:scale-[1.02]">
          <span className="text-3xl font-bold text-slate-800">
            {
                friends.length
            }
          </span>
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">
            Total Friends
          </span>
        </div>

        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 transition-transform hover:scale-[1.02]">
          <span className="text-3xl font-bold text-green-600">
           {friends.filter(f => f.status === "on-track").length}
          </span>
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">
            On Track
          </span>
        </div>

        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 transition-transform hover:scale-[1.02]">
          <span className="text-3xl font-bold text-amber-500">
            {friends.filter(f => f.status !== "on-track").length}
          </span>
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">
            Need Attention
          </span>
        </div>

        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 transition-transform hover:scale-[1.02]">
          <span className="text-3xl font-bold text-blue-600">
           {friends.filter(f => f.days_since_contact <= 30).length}
          </span>
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">
            Interactions This Mounth
          </span>
        </div>
      </div>
    );
};

export default FriendsStats;