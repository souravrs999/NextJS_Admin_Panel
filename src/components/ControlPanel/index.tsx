"use client";

import React, { ChangeEvent, useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import cn from "classnames";

type TData = {
  id: number;
  name: string;
  count: number;
  amount: string;
  date: string;
};

const data: TData[] = [
  {
    id: 1,
    name: "Cozy Home Furnishings",
    count: 520,
    amount: "$11,190,00",
    date: "Mon, Oct 14",
  },
  {
    id: 2,
    name: "Stellar Styles",
    count: 520,
    amount: "$8,292,00",
    date: "Sat, Nov 19",
  },
  {
    id: 3,
    name: "Luxe Living Store",
    count: 520,
    amount: "$72,489,00",
    date: "Sun, Aug 20",
  },
  {
    id: 4,
    name: "Reilly LLC",
    count: 520,
    amount: "$12,932,00",
    date: "Tue, Mar 17",
  },
  {
    id: 5,
    name: "O'Conner - Bayer",
    count: 520,
    amount: "$6,323,00",
    date: "Wed, Feb 23",
  },
];

const ControlPanel = () => {
  const [value, setValue] = useState<string>("");
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleTabSwitch = (val: number) => {
    setActiveTab(val);
  };

  return (
    <div className="flex flex-col gap-5 bg-white rounded-lg p-5 h-full w-full">
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold text-primary">Control Panel</p>
        <div className="rounded-full w-9 h-9 p-1 bg-primary grid place-items-center">
          <p className="text-white text-xs">+5</p>
        </div>
      </div>
      <div className="flex justify-between items-center border rounded-full overflow-hidden bg-gray-100 text-gray-500">
        <input
          type="text"
          className="w-full px-4 py-2 text-sm bg-gray-100 outline-none"
          value={value}
          onChange={handleInputChange}
          placeholder="Enter your search request..."
        />
        <div className="px-3 text-gray-400">
          <IconSearch className="h-5 w-5" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-primary font-bold text-sm">B2B DISTRIBUTION</p>
          <span className="text-xs text-gray-500">Sales Deals</span>
        </div>
        <div className="flex text-xs items-center rounded-full overflow-hidden bg-gray-200 cursor-pointer">
          <div
            className={cn({
              "px-2 py-1 rounded-full": true,
              "bg-primary text-white": activeTab === 0,
            })}
            onClick={() => handleTabSwitch(0)}
          >
            Completed
          </div>
          <div
            className={cn({
              "px-2 py-1 rounded-full": true,
              "bg-primary text-white": activeTab === 1,
            })}
            onClick={() => handleTabSwitch(1)}
          >
            Pending
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-gray-200 py-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-3 w-full"
          >
            <div className="flex gap-3 items-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 font-bold grid place-items-center">
                {item.name[0]}
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-primary text-sm font-bold">{item.name}</p>
                <span className="text-xs text-gray-400">
                  {item.count} items
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-primary text-sm font-bold">{item.amount}</p>
              <span className="text-xs text-gray-400">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ControlPanel;
