import dynamic from "next/dynamic";
import React from "react";

const SalesActivityCard = dynamic(
  () => import("@/components/SalesActivityCard"),
  { ssr: false }
);
const StatsCard = dynamic(() => import("@/components/StatsCard"), {
  ssr: false,
});

export default function Dashboard() {
  return (
    <div className="grid gap-2 grid-cols-12 grid-rows-12 p-1">
      <div className="lg:col-span-3 md:col-span-6 sm:col-span-12">
        <StatsCard dark name="Total income" subtitle="2,376 successful deals" />
      </div>
      <div className="lg:col-span-3 md:col-span-6 sm:col-span-12">
        <StatsCard
          name="Total expenditure"
          subtitle="5,186 successful shipments"
        />
      </div>
      <div className="lg:col-span-3 md:col-span-6 sm:col-span-12">
        <StatsCard name="Total income" subtitle="2,376 successful deals" />
      </div>
      <div className="lg:col-span-6 sm:col-span-12 row-span-2">
        <SalesActivityCard />
      </div>
    </div>
  );
}
