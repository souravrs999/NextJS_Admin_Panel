import React from "react";
import Image from "next/image";
import cn from "classnames";

interface TAvatar {
  border?: boolean;
}

export const Avatar = ({ border }: TAvatar) => {
  return (
    <div
      className={cn({
        "rounded-full w-10 h-10 overflow-hidden": true,
        "ring-white ring-2": border,
      })}
    >
      <Image
        src="/assets/avatar_cover.jpg"
        alt="logo"
        priority
        height={48}
        width={48}
      />
    </div>
  );
};
