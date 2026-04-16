"use client";

import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChartPie } from "lucide-react";

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

  return activities.length === 0 ? (
    <div className="flex flex-col items-center justify-center min-h-[450px] p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm">
     
      <div className="relative group mb-8">
        <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full group-hover:bg-blue-500/20 transition-all duration-500"></div>
        <div className="relative w-20 h-20 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center border border-gray-100">
          <ChartPie className="w-10 h-10 text-gray-400 stroke-[1.25px]" />
        </div>
      </div>

    
      <div className="text-center max-w-sm">
        <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
          Visuals are ready when you are
        </h2>
        <p className="mt-3 text-gray-500 text-base leading-relaxed">
          Track your videos ,calls and messages to see a detailed breakdown of
          your activity stats.
        </p>
      </div>

      <Link
        href="/"
        className="mt-10 px-8 py-3 bg-[#244D3F] text-white text-sm font-medium rounded-full hover:bg-gray-800 hover:shadow-lg active:scale-95 transition-all duration-200"
      >
        Create First Activity
      </Link>
    </div>
  ) : (
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
