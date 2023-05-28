import React, { useEffect, useState } from "react";
import cn from "classnames";
import {
  IconChevronDown,
  IconPointFilled,
  TablerIconsProps,
} from "@tabler/icons-react";

type TChild = {
  id: string;
  name: string;
};

interface TProps {
  collapsed: boolean;
  menu: {
    id: string;
    name: string;
    icon: (props: TablerIconsProps) => JSX.Element;
  };
  marker?: number;
  child?: TChild[];
}

export default function SidebarMenuItem({
  collapsed,
  menu,
  marker,
  child,
}: TProps) {
  const [expanded, setExpanded] = useState(false);

  const handleMenuExpand = () => {
    setExpanded((ex) => !ex);
  };

  useEffect(() => {
    if (collapsed) setExpanded(false);
  }, [collapsed]);

  return (
    <>
      <div
        key={menu.id}
        className="mt-1 flex items-center justify-between px-2 py-1 rounded-md hover:bg-secondary"
      >
        <div className="flex items-center gap-2">
          <menu.icon className="text-white w-5 h-5" />
          <p
            className={cn({
              invisible: collapsed,
              "text-white text-xs": true,
            })}
          >
            {menu.name}
          </p>
        </div>
        {marker && (
          <div
            className={cn({
              invisible: collapsed,
              "grid place-content-center w-4 h-4 rounded-full bg-success": true,
            })}
          >
            <p className="text-white text-xs">{marker}</p>
          </div>
        )}
        {child && (
          <div className="p-1" onClick={handleMenuExpand}>
            <IconChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        )}
      </div>
      <div
        className={cn({
          "p-1 transition-all duration-500 ease-in-out overflow-hidden": true,
          "h-0": !expanded,
        })}
      >
        {child?.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-2 text-primary hover:text-white hover:bg-secondary rounded-md"
          >
            <IconPointFilled className="h-4 w-4 flex-2" />
            <p className="flex-2 ml-3 text-white text-xs">{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
