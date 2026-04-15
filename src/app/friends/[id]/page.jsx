"use client";

import Details from "@/components/friends/Details";
import { FriendsContext } from "@/context/FriendsContextProvider";
import React, { useContext, use } from "react";
import { HashLoader } from "react-spinners";

export default function FriendsDetailsPage({ params }) {
  const { friends } = useContext(FriendsContext);

  const { id } = use(params);

  if (!friends || friends.length === 0) {
    return (
      <div
        className="h-screen flex justify-center items-center"
        aria-live="polite"
      >
        <HashLoader color="#4F46E5" />
        <span className="sr-only">Loading content...</span>
      </div>
    );
  }

  const friend = friends.find((f) => f.id === Number(id));

  if (!friend) {
    return <div>Friend not found</div>;
  }

  return (
    <div>
      <Details friend={friend} />
    </div>
  );
}
