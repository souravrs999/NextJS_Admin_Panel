import React from "react";

interface TPrimaryButton {
  primary?: boolean;
  value: string;
}

export default function PrimaryButton({ primary, value }: TPrimaryButton) {
  return (
    <div className="rounded-lg bg-primary px-3 py-2 hover:bg-secondary cursor-pointer">
      <p className="text-white text-sm">{value}</p>
    </div>
  );
}
