"use client";

import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { useEffect, useState } from "react";

const StatsPage = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("saveTimeLine") || "[]");
    // eslint-disable-next-line
    setActivities(savedData);
  }, []);
  const setData = [
    {
      name: "Call",
      value: activities.filter((item) => item.type === "Call").length,
      color: "#244D3F",
    },
    {
      name: "Text",
      value: activities.filter((item) => item.type === "Text").length,
      color: "#3B82F6",
    },
    {
      name: "Video",
      value: activities.filter((item) => item.type === "Video").length,
      color: "#10B981",
    },
  ];

  return (
    <div className="p-10 flex flex-col items-center gap-10">
      <PieChart width={400} height={400}>
        {/* Outer Pie */}
        <Pie
          data={setData}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={90}
          outerRadius={120}
          label
        >
          {setData.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>

        <Tooltip />
        <RechartsDevtools />
      </PieChart>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#244D3F]"></span>
          <p>Call</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#3B82F6]"></span>
          <p>Text</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#10B981]"></span>
          <p>Video</p>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
