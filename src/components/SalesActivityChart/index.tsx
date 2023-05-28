"use client";

import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

const SalesActivityChart = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    colors: ["#9CA3AF"],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
    },
    annotations: {
      yaxis: [
        {
          y: 8,
          opacity: 1,
          fillColor: "#C1EF0B",
          borderColor: "#C1EF0B",
          strokeDashArray: 5,
        },
      ],
    },
    tooltip: {
      enabled: true,
      custom: ({ series, seriesIndex, dataPointIndex }) => {
        return `<div class="salesActivityTooltip">
              <span>+${series[seriesIndex][dataPointIndex]} %</span>
            </div>`;
      },
    },
    grid: {
      show: true,
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      position: "top",
      tickAmount: 100,
      axisBorder: { show: false },
      axisTicks: { show: false },
      crosshairs: {
        show: true,
        width: 2,
        position: "front",
        opacity: 1,
        stroke: {
          width: 2,
          color: "#C1EF0B",
          dashArray: 0,
        },
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: { show: false },
    },
  };

  const chartSeries = [
    {
      name: "Series 1",
      data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 40)),
    },
  ];

  return (
    <div id="chart" className="w-full h-full">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default SalesActivityChart;
