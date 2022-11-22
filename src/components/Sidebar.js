import React from "react";
import SideEvent from "./SideEvent";
import Labels from "./Labels";

export default function Sidebar() {
  return (
    <aside className="border-r-4 border-t-4 border-gray-200 float-right p-5 w-64">
      <SideEvent />
      <Labels />
    </aside>
  );
}
