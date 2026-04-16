"use client";
import { FriendsContext } from "@/context/FriendsContextProvider";
import { Search } from "lucide-react";
import Image from "next/image";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { BiPhoneCall, BiMessageDetail, BiVideo } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { HashLoader } from "react-spinners";

const Timeline = () => {
  const [searchName, setSearchName] = useState("");
  const [sortingType, setSortingType] = useState("");
  const [activities, setActivities] = useState([]);
  const { friends } = useContext(FriendsContext);
  const shortedTimeLineList = useMemo(() => {
    let list = [...activities];
    if (searchName.trim() !== "") {
      list = list.filter((item) => {
        const friend = friends.find(
          (f) => String(f.id) === String(item.friendId),
        );
        const friendName = friend?.name || item.friendName || "";
        return friendName.toLowerCase().includes(searchName.toLowerCase());
      });
    }

    if (
      sortingType === "call" ||
      sortingType === "text" ||
      sortingType === "video"
    ) {
      list = list.filter((item) => item.type.toLowerCase() === sortingType);
    }

    if (sortingType === "oldest") {
      list.sort((a, b) => a.id - b.id);
    } else {
      list.sort((a, b) => b.id - a.id);
    }

    return list;
  }, [sortingType, activities, searchName, friends]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("saveTimeLine") || "[]");
    // eslint-disable-next-line
    setActivities(savedData);
  }, []);

  const iconMap = {
    Call: <BiPhoneCall className="text-blue-500" size={20} />,
    Text: <BiMessageDetail className="text-green-500" size={20} />,
    Video: <BiVideo className="text-purple-500" size={20} />,
  };

  if (!friends || friends.length === 0) {
    return (
      <div className="text-center p-10 font-medium">
        {" "}
        <HashLoader color="#244D3F" size={60} />{" "}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="max-w-2xl mx-auto p-6">
        <div className="mb-8 border-b border-base-300 pb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Activity Timeline
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            
            <div className="relative w-full sm:max-w-sm">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search color="#244D3F" />
              </div>
              <input
                type="text"
                placeholder="Search name..."
                value={searchName}
                onChange={(e) => setSearchName(e.target.value.toLocaleLowerCase())}
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-2xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#244D3F] transition-all shadow-sm"
              />
            </div>

            <div className="dropdown dropdown-end w-full sm:w-auto">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost border border-gray-200 bg-white hover:bg-gray-50 rounded-2xl px-5 w-full justify-between"
              >
                <span className="text-gray-600 font-medium">
                  Sort:{" "}
                  <span className="text-gray-900 capitalize">
                    {sortingType || "All"}
                  </span>
                </span>
                <IoMdArrowDropdown className="text-gray-500" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-white rounded-2xl z- w-52 p-2 shadow-xl border border-gray-100"
              >
                <li onClick={() => setSortingType("")}>
                  <a className="rounded-xl">All Activities</a>
                </li>
                <div className="divider my-1 opacity-50"></div>
                <li onClick={() => setSortingType("call")}>
                  <a className="rounded-xl">Calls Only</a>
                </li>
                <li onClick={() => setSortingType("text")}>
                  <a className="rounded-xl">Messages</a>
                </li>
                <li onClick={() => setSortingType("video")}>
                  <a className="rounded-xl">Videos</a>
                </li>
                <div className="divider my-1 opacity-50"></div>
                <li onClick={() => setSortingType("newest")}>
                  <a className="rounded-xl font-medium">Newest First</a>
                </li>
                <li onClick={() => setSortingType("oldest")}>
                  <a className="rounded-xl font-medium">Oldest First</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {shortedTimeLineList.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          <p>No activities recorded yet. Go to contacts and make a call!</p>
        </div>
      ) : (
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gray-200">
          {shortedTimeLineList.map((item) => {
            const friend = friends.find(
              (f) => String(f.id) === String(item.friendId),
            );

            const name = friend?.name || item.friendName || "Unknown Contact";
            const picture = friend?.picture || item.friendPicture;

            return (
              <div key={item.id} className="relative flex items-start group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm shrink-0 z-10 transition group-hover:scale-110">
                  {iconMap[item.type]}
                </div>

                <div className="ml-6 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {friend?.picture ? (
                        <div className="relative w-10 h-10 shrink-0">
                          <Image
                            src={picture}
                            alt={name || "User"}
                            fill
                            sizes="40px"
                            className="rounded-full object-cover border border-gray-200"
                          />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold shrink-0 border border-gray-200">
                          {name?.charAt(0) || "U"}
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-gray-900 leading-none">
                          {item.type} with{" "}
                          {friend ? friend.name : "Unknown Contact"}
                        </h3>
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                          {item.type} Activity
                        </span>
                      </div>
                    </div>
                    <time className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-lg border border-gray-100">
                      {item.time}
                    </time>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    You initiated a{" "}
                    <span className="font-medium text-gray-800">
                      {item.type.toLowerCase()}
                    </span>{" "}
                    request to{" "}
                    <span className="font-semibold text-blue-600">
                      {friend ? friend.name : "this contact"}
                    </span>{" "}
                    on {new Date(item.id).toLocaleDateString()}.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {activities.length > 0 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => {
              if (confirm("Are you sure you want to clear your history?")) {
                localStorage.removeItem("saveTimeLine");
                setActivities([]);
              }
            }}
            className="px-6 py-2 text-sm font-medium text-red-500 border border-red-100 rounded-full hover:bg-red-50 transition-colors"
          >
            Clear Activity History
          </button>
        </div>
      )}
    </div>
  );
};

export default Timeline;
