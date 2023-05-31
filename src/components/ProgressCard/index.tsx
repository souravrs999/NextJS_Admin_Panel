import React from "react";
import cn from "classnames";

interface TProgressCard {
  dark?: boolean;
  count: number;
  description: string;
}

export const ProgressCard = ({ dark, count, description }: TProgressCard) => {
  return (
    <div
      className={cn({
        "w-full h-full rounded-lg p-5 flex flex-col gap-9": true,
        "bg-primary": dark,
        "bg-white": !dark,
      })}
    >
      <div className="flex flex-col gap-1">
        <p
          className={cn({
            "font-bold text-4xl": true,
            "text-white": dark,
            "text-primary": !dark,
          })}
        >
          {count}
        </p>
        <p
          className={cn({
            "text-sm": true,
            "text-gray-400": dark,
            "text-gray-500": !dark,
          })}
        >
          {description}
        </p>
      </div>
      <div className="w-full flex flex-col">
        <div
          className={cn({
            "flex justify-between text-xs": true,
            "text-white": dark,
            "text-gray-500": !dark,
          })}
        >
          <span>0%</span>
          <span>100%</span>
        </div>
        <div
          className={cn({
            "flex-start flex h-7 w-full overflow-hidden rounded-lg text-xs":
              true,
            "bg-secondary": dark,
            "bg-gray-300": !dark,
          })}
        >
          <div
            style={{ width: "50%" }}
            className={cn({
              "flex h-full items-baseline justify-center overflow-hidden break-all rounded-lg":
                true,
              "bg-white": dark,
              "bg-primary": !dark,
            })}
          />
        </div>
      </div>
    </div>
  );
};
