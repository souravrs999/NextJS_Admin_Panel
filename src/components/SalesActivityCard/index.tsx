import dynamic from "next/dynamic";
import React from "react";
const SalesActivityChart = dynamic(() => import("../SalesActivityChart"), {
  ssr: false,
});

export default function SalesActivityCard() {
  return (
    <div className="flex flex-col bg-primary rounded-xl p-7 w-[42rem] h-[32rem]">
      <div className="flex justify-between items-center">
        <p className="text-4xl text-white">Sales Activity</p>
        <div className="text-xs text-primary font-extrabold">
          <span className="bg-limeBright px-3 py-1 rounded-full">DETAILS</span>
        </div>
      </div>
      <div className="max-w-md mt-3">
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex h-full mt-3">
        <div className="w-5/6">
          <SalesActivityChart />
        </div>
        <div className="w-l/6 ml-3 flex flex-col items-end justify-end mb-5">
          <h5 className="text-white text-7xl">3K</h5>
          <p className="text-gray-500 text-xs">Deals forecast</p>
        </div>
      </div>
    </div>
  );
}
