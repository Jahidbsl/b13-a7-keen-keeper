"use client";
import { useContext } from "react";
import FriendsCards from "./FriendsCards";
import { FriendsContext } from "@/context/FriendsContextProvider";

const Friends = () => {
const { friends } = useContext(FriendsContext);
  return (
    <div className="max-w-7xl mx-auto mt-12 px-4 border-t border-slate-100 pt-12 mb-20">
      <div className=" mb-8">
        <h3 className="text-3xl font-extrabold text-[#244D3F]">Your Friends</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
        {friends.map((friend) => (
          <FriendsCards key={friend.id} friend={friend}></FriendsCards>
        ))}
      </div>
    </div>
  );
};

export default Friends;
