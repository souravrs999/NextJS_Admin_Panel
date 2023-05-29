import React from "react";
import PrimaryButton from "../PrimaryButton";
import OutlineButton from "../OutlineButton";

export default function HeaderBar() {
  return (
    <div className="flex items-center justify-between m-1 p-2 rounded-lg bg-white">
      <div></div>
      <div></div>
      <div className="flex gap-1">
        <OutlineButton value="Contact" />
        <PrimaryButton value="Checkout" />
      </div>
    </div>
  );
}
