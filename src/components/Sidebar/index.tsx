"use client";

import React, { useRef, useState } from "react";
import cn from "classnames";
import Image from "next/image";

import { IconDotsVertical } from "@tabler/icons-react";
import { SideBarComposition } from "@/config";
import SidebarMenuItem from "../SidebarMenuItem";

export default function Sidebar({}) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const handleSidebarCollapse = () => {
    if (!sidebarRef.current || sidebarRef.current.clientWidth < 100)
      setCollapsed(false);
    else setCollapsed(true);
  };

  return (
    <div
      className={cn({
        "grid min-h-screen": true,
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        "transition-[grid-template-columns] duration-300 ease-in-out p-1": true,
      })}
    >
      <div
        ref={sidebarRef}
        className="bg-primary rounded-lg overflow-hidden h-full"
        onMouseEnter={handleSidebarCollapse}
        onMouseLeave={handleSidebarCollapse}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="py-3 px-2 bg-secondary ">
            <div className="flex">
              <div className="relative inline-block ml-1">
                <div className="rounded-full w-10 h-10 overflow-hidden">
                  <Image
                    src="/assets/avatar_cover.jpg"
                    alt="logo"
                    priority
                    height={48}
                    width={48}
                  />
                </div>
                <div className="w-[10px] h-[10px] bg-success rounded-full absolute bottom-1 right-1 transform translate-x-1/3 translate-y-1/3 ring-1 ring-primary" />
              </div>
              <div
                className={cn({
                  invisible: collapsed,
                  "flex overflow-hidden items-center justify-between w-full px-3 transition-all duration-500 ease-in-out":
                    true,
                })}
              >
                <div className="flex flex-col gap-[1px]">
                  <p className="text-xs text-gray-50">Amelie Laurent</p>
                  <p className="text-xs text-gray-400">amelie@untitledui.com</p>
                </div>
                <IconDotsVertical className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="p-3 flex-1">
            {SideBarComposition?.middlePanel.map((panelItem) => (
              <SidebarMenuItem
                key={panelItem.id}
                collapsed={collapsed}
                menu={panelItem}
                child={panelItem.children}
              />
            ))}
          </div>
          <div className="p-3">
            <div className="border-t-[1px] border-gray-700 pt-2">
              {SideBarComposition?.bottomPanel.map((panelItem) => (
                <SidebarMenuItem
                  key={panelItem.id}
                  collapsed={collapsed}
                  menu={panelItem}
                  child={panelItem.children}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
