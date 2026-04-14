"use client";
import React, { createContext, useEffect, useState } from "react";

export const FriendsContext = createContext();
const FriendsContextProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  const data = {
    friends,
    setFriends,
  };
  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
};

export default FriendsContextProvider;
