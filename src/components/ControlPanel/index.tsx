"use client";

import React, { ChangeEvent, useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import cn from "classnames";

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
        {[...Array(5).keys()].map((item) => (
          <div key={item} className="flex items-center justify-between py-3">
            <div className="flex gap-3 items-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 font-bold grid place-items-center">
                C
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-primary text-sm font-bold">
                  Cozy Home Furnishings
                </p>
                <span className="text-xs text-gray-400">520 items</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-primary text-sm font-bold">$11,190,00</p>
              <span className="text-xs text-gray-400">Mon, Oct 14</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ControlPanel;
