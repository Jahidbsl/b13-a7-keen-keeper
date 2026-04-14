"use client";

import Details from "@/components/friends/Details";
import { FriendsContext } from "@/context/FriendsContextProvider";
import React, { useContext, use } from "react";

export default function FriendsDetailsPage({ params }) {
  const { friends } = useContext(FriendsContext);

  // ✅ unwrap params
  const { id } = use(params);

  if (!friends || friends.length === 0) {
    return <div>Loading...</div>;
  }

  const friend = friends.find(f => f.id === Number(id));

  if (!friend) {
    return <div>Friend not found</div>;
  }

  return (
    <div>
      <Details friend={friend} />
    </div>
  );
}