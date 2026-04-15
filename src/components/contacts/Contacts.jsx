"use client";
import { FriendsContext } from "@/context/FriendsContextProvider";
import React, { useContext, useState } from "react";
import { BiMessageSquare, BiVideo } from "react-icons/bi";
import { IoIosCall, IoIosText, IoIosVideocam } from "react-icons/io";
import { PiPhone } from "react-icons/pi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = ({ friendId }) => {
  const [timeline, setTimeline] = useState([]);
  const { friends } = useContext(FriendsContext);

  const handleAction = (type) => {
    const time = new Date().toLocaleTimeString();
    const iconMap = {
      Call: <IoIosCall size={24} />,
      Text: <IoIosText size={24} />,
      Video: <IoIosVideocam size={24} />,
    };

    toast.success(
      <div className="flex items-center gap-2">
        {iconMap[type]}
        <span>{type} request sent!</span>
      </div>,
      {
        icon: false,
        style: { borderRadius: "10px", background: "#333", color: "#fff" },
      },
    );

    const friend = friends.find((f) => String(f.id) === String(friendId));

    const newEntry = {
      id: Date.now(),
      friendId: friendId,
      friendName: friend?.name,
      friendPicture: friend?.picture,
      type: type,
      time: time,
    };

    const existingData = JSON.parse(
      localStorage.getItem("saveTimeLine") || "[]",
    );
    const updatedTimeline = [newEntry, ...existingData];

    setTimeline(updatedTimeline);
    localStorage.setItem("saveTimeLine", JSON.stringify(updatedTimeline));
  };

  return (
    <div className="p-4">
      <ToastContainer position="top-center" autoClose={3000} theme="dark" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <button
          onClick={() => handleAction("Call")}
          className="flex flex-col items-center justify-center gap-4 bg-[#F9FAFB] p-8 md:p-12 rounded-2xl hover:bg-gray-100 transition border border-gray-100 group"
        >
          <PiPhone
            size={32}
            className="text-gray-400 group-hover:text-blue-500 transition-colors"
          />
          <span className="font-bold text-gray-900">Call</span>
        </button>

        <button
          onClick={() => handleAction("Text")}
          className="flex flex-col items-center justify-center gap-4 bg-[#F9FAFB] p-8 md:p-12 rounded-2xl hover:bg-gray-100 transition border border-gray-100 group"
        >
          <BiMessageSquare
            size={32}
            className="text-gray-400 group-hover:text-green-500 transition-colors"
          />
          <span className="font-bold text-gray-900">Text</span>
        </button>

        <button
          onClick={() => handleAction("Video")}
          className="flex flex-col items-center justify-center gap-4 bg-[#F9FAFB] p-8 md:p-12 rounded-2xl hover:bg-gray-100 transition border border-gray-100 group"
        >
          <BiVideo
            size={32}
            className="text-gray-400 group-hover:text-purple-500 transition-colors"
          />
          <span className="font-bold text-gray-900">Video</span>
        </button>
      </div>
    </div>
  );
};

export default Contacts;
