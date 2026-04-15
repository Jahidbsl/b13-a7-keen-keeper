import React from "react";
import Image from "next/image";
import { BiArchive, BiMessageSquare, BiMoon, BiVideo } from "react-icons/bi";
import { CgEditExposure } from "react-icons/cg";
import { PiPhone } from "react-icons/pi";
import { TbTrash } from "react-icons/tb";

const Details = ({ friend }) => {
  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = friend;

  const callHandel =()=>{
    console.log('call now')
  }
  return (
    <div className="min-h-screen bg-[#F9FAFB] p-6 md:p-12 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-50 ring-1 ring-gray-200">
              <Image src={picture} alt={name} fill className="object-cover" />
            </div>

            <h2 className="text-xl font-bold text-[#1F2937]">{name}</h2>

            <div className="flex flex-wrap justify-center gap-1.5 mt-4">
              {tags?.map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-50 text-slate-500 text-[10px] sm:text-xs px-2.5 py-0.5 rounded-md border border-slate-100 hover:bg-slate-100 transition-colors cursor-pointer"
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

            <p className="mt-5 text-gray-500 italic text-sm leading-relaxed">
              {`"${bio}"`}
            </p>
            <p className="text-xs text-gray-400 mt-2 font-medium">
              Preferred: {email}
            </p>
          </div>

          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <button className="w-full flex items-center justify-center gap-3 p-4 hover:bg-gray-50 border-b border-gray-50 text-gray-700 transition font-medium">
              <BiMoon size={18} />
              <span className="text-sm">Snooze 2 Weeks</span>
            </button>
            <button className="w-full flex items-center justify-center gap-3 p-4 hover:bg-gray-50 border-b border-gray-50 text-gray-700 transition font-medium">
              <BiArchive size={18} /> <span className="text-sm">Archive</span>
            </button>
            <button className="w-full flex items-center justify-center gap-3 p-4 hover:bg-gray-50 text-red-500 transition font-medium">
              <TbTrash size={18} /> <span className="text-sm">Delete</span>
            </button>
          </div>
        </div>

      
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center">
              <h3 className="text-5xl font-bold text-[#1F2937]">
                {days_since_contact}
              </h3>
              <p className="text-gray-500 text-sm mt-2">Days Since Contact</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center">
              <h3 className="text-5xl font-bold text-[#1F2937]">{goal}</h3>
              <p className="text-gray-500 text-sm mt-2">Goal (Days)</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col justify-center">
              <h3 className="text-2xl md:text-2xl font-bold text-[#064E3B]">
                {next_due_date}
              </h3>
              <p className="text-gray-500 text-sm mt-2">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <h4 className="text-lg font-bold text-[#064E3B]">
                Relationship Goal
              </h4>
              <p className="text-gray-600 mt-1">
                Connect every{" "}
                <span className="font-bold text-gray-900">{goal} days</span>
              </p>
            </div>
            <button className="flex items-center gap-2 bg-[#F9FAFB] border border-gray-200 px-5 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-100 transition shadow-sm">
              <CgEditExposure size={14} /> Edit
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="text-lg font-bold text-[#064E3B] mb-8">
              Quick Check-In
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <button onClick={()=>callHandel()}
               className="flex flex-col items-center justify-center gap-4 bg-[#F9FAFB] p-8 md:p-12 rounded-2xl hover:bg-gray-100 transition border border-gray-100 group">
                <PiPhone
                  size={32}
                  className="text-gray-400 group-hover:text-blue-500 transition-colors"
                />
                <span className="font-bold text-gray-900">Call</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-4 bg-[#F9FAFB] p-8 md:p-12 rounded-2xl hover:bg-gray-100 transition border border-gray-100 group">
                <BiMessageSquare
                  size={32}
                  className="text-gray-400 group-hover:text-green-500 transition-colors"
                />
                <span className="font-bold text-gray-900">Text</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-4 bg-[#F9FAFB] p-8 md:p-12 rounded-2xl hover:bg-gray-100 transition border border-gray-100 group">
                <BiVideo
                  size={32}
                  className="text-gray-400 group-hover:text-purple-500 transition-colors"
                />
                <span className="font-bold text-gray-900">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
