"use client";

import React, { memo } from "react";
import cn from "classnames";
import { IconAntennaBars3 } from "@tabler/icons-react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

type TChartData = {
  options: ApexOptions;
  series: { data: number[] }[];
};

interface TStatsCard {
  dark?: boolean;
  name: string;
  subtitle?: string;
  stat?: string;
  statDiff?: { negative: boolean; value: string };
}

const StatsCard = ({ dark, name, subtitle }: TStatsCard) => {
  const chartData: TChartData = {
    series: [
      {
        data: [80, 60, 80, 70, 75, 60, 90],
      },
    ],
    options: {
      chart: {
        type: "line",
        toolbar: { show: false },
        zoom: { enabled: false },
        redrawOnParentResize: true,
      },
      colors: dark ? ["#FFFFFF"] : ["#23262e"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        curve: "straight",
      },
      tooltip: { enabled: false },
      markers: {
        size: 3,
        strokeWidth: 0,
        colors: dark ? ["#E5E7EB"] : ["#080e13"],
      },
      xaxis: {
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false },
      },
      yaxis: {
        labels: { show: false },
        axisBorder: { show: false },
      },
      grid: { show: false },
    },
  };

  return (
    <div
      className={cn({
        "rounded-lg p-5 border-[1px] flex flex-col gap-3": true,
        "bg-primary border-primary": dark,
        "bg-white border-gray-200": !dark,
      })}
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div
              className={cn({
                "text-sm font-bold": true,
                "text-primary": !dark,
                "text-white": dark,
              })}
            >
              {name}
              {/* Total Income */}
            </div>
            <IconAntennaBars3
              className={cn({
                "w-8 h-8": true,
                "text-white": dark,
                "text-primary": !dark,
              })}
            />
          </div>
          <div className="text-xs text-gray-500">{subtitle}</div>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <div className="flex items-center">
            <p
              className={cn({
                "text-lg font-bold": true,
                "text-white": dark,
                "text-primary": !dark,
              })}
            >
              $348,501
            </p>
            <span className="text-sm text-limeBright ml-2">+2.91%</span>
          </div>
          <div>
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="line"
              height="70px"
              width="90%"
            />
          </div>
        </div>
        <div className="flex items-center">
          <p
            className={cn({
              "text-xs": true,
              "text-white": dark,
              "text-priamry": !dark,
            })}
          >
            Profit is Taken
          </p>
          <span className="text-xs text-gray-500 ml-1">
            = $278,801 (~20% fees)
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(StatsCard);
