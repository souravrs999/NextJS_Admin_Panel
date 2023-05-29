"use client";

import React, { memo } from "react";
import { IconDots } from "@tabler/icons-react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const SalesGoalCard = () => {
  const options: ApexOptions = {
    chart: {
      type: "radialBar",
    },
    colors: ["#080e13", "#23262e", "#9CA3AF"],
    series: [70, 75, 80],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "20%",
        },
        track: {
          strokeWidth: "80%",
        },
        dataLabels: { show: false },
      },
    },
    stroke: {
      curve: "smooth",
      lineCap: "round",
    },
  };

  return (
    <div className="flex flex-col gap-3 bg-white p-7 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <p className="text-primary font-bold">Sales Goal</p>
          <IconDots className="h-5 w-5 text-secondary ml-2" />
        </div>
        <div className="border-gray-400 rounded-md px-4 py-1 text-xs border-[1px]">
          Today
        </div>
      </div>
      <div className="flex justify-between items-center gap-3">
        <div className="flex flex-col items-end">
          <div className="flex gap-1 items-center">
            <p className="text-4xl font-bold text-primary">75</p>
            <span className="text-gray-400 text-lg mt-1">%</span>
          </div>
          <p className="text-gray-400 text-xs">Sales Completion</p>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex gap-1 items-center">
            <p className="text-4xl font-bold text-primary">21</p>
            <span className="text-gray-400 text-lg mt-1">/27</span>
          </div>
          <p className="text-gray-400 text-xs">Trackings completed</p>
        </div>
      </div>
      <div className="grid place-items-center">
        <ReactApexChart
          options={options}
          series={options.series}
          type="radialBar"
          height={300}
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-primary rounded-[4px]" />
            <p className="text-xs text-gray-500 ml-2">Delivey Complete</p>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-xs text-secondary">7/10</p>
            <p className="text-xs text-gray-400">70%</p>
            <IconDots className="h-4 w-4 text-gray-400" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-secondary rounded-[4px]" />
            <p className="text-xs text-gray-500 ml-2">Packages</p>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-xs text-secondary">10/10</p>
            <p className="text-xs text-gray-400">100%</p>
            <IconDots className="h-4 w-4 text-gray-400" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-gray-400 rounded-[4px]" />
            <p className="text-xs text-gray-500 ml-2">Trackers</p>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-xs text-secondary">6/10</p>
            <p className="text-xs text-gray-400">60%</p>
            <IconDots className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SalesGoalCard);
