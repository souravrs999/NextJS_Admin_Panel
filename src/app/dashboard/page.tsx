import ControlPanel from "@/components/ControlPanel";
import { ProgressCard } from "@/components/ProgressCard";
import dynamic from "next/dynamic";
import React from "react";

const SalesActivityCard = dynamic(
  () => import("@/components/SalesActivityCard"),
  { ssr: false }
);
const StatsCard = dynamic(() => import("@/components/StatsCard"), {
  ssr: false,
});
const SalesGoalCard = dynamic(() => import("@/components/SalesGoalCard"), {
  ssr: false,
});

export default function Dashboard() {
  return (
    <div className="grid gap-2 md:grid-cols-12 md:grid-rows-12 sm:grid-cols-1 sm:grid-rows-1 p-1">
      <div className="lg:col-span-3 md:col-span-6 col-span-12 order-1">
        <StatsCard dark name="Total income" subtitle="2,376 successful deals" />
      </div>
      <div className="lg:col-span-3 md:col-span-6 col-span-12 order-2">
        <StatsCard
          name="Total expenditure"
          subtitle="5,186 successful shipments"
        />
      </div>
      <div className="lg:col-span-3 md:col-span-6 col-span-12 order-3">
        <StatsCard name="Total income" subtitle="2,376 successful deals" />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3 row-span-3 order-4">
        <ControlPanel />
      </div>
      <div className="lg:col-span-6 col-span-12 row-span-2 order-5">
        <SalesActivityCard />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3 row-span-2 order-6 md:order-4 lg:order-5">
        <SalesGoalCard />
      </div>
      <div className="lg:col-span-3 md:col-span-6 col-span-12 order-7">
        <ProgressCard dark count={1200} description="Total cumulative orders" />
      </div>
      <div className="lg:col-span-3 md:col-span-6 col-span-12 order-8">
        <ProgressCard count={2853} description="Packages in inventory" />
      </div>
    </div>
  );
}
