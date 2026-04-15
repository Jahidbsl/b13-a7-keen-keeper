import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendsCards = ({ friend }) => {
  const { name, picture, days_since_contact, tags, status } = friend;
  return (
    <Link href={`friends/${friend.id}`}>
      <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 h-full">
        <figure className="pt-6 px-4">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32">
            <Image
              src={picture}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-full object-cover border-4 border-slate-50 shadow-inner"
            />
          </div>
        </figure>

        <div className="card-body items-center text-center p-4 sm:p-6">
          <div className="space-y-1">
            <h2 className="card-title text-lg sm:text-xl font-bold text-slate-800">
              {name}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-slate-400 italic">
              Last contact: {days_since_contact}d ago
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-1.5 mt-4">
            {tags.map((tag, ind) => (
              <span
                key={ind}
                className="bg-slate-50 text-slate-500 text-[10px] sm:text-xs px-2.5 py-0.5 rounded-md border border-slate-100 hover:bg-slate-100 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="mt-4 w-full">
            <span
              className={`inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-sm border transition-colors ${
                status === "almost-due"
                  ? "bg-amber-50 text-amber-700 border-amber-200"
                  : status === "on-track"
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                    : "bg-rose-50 text-rose-700 border-rose-200"
              }`}
            >
              {status}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FriendsCards;
