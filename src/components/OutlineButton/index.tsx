import React from "react";

interface TOutlineButton {
  primary?: boolean;
  value: string;
}

export default function OutlineButton({ primary, value }: TOutlineButton) {
  return (
    <div className="rounded-lg border-[1px] border-gray-400 px-4 py-3 hover:bg-gray-100 cursor-pointer">
      <p className="text-primary text-sm font-bold">{value}</p>
    </div>
  );
}
