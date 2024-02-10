import Link from "next/link";
import React from "react";

const SidebarLink =({url,icons,title}) => {
  return (
    <Link href={url}>
      <span>{icons}</span>
      <span>{title}</span>
    </Link>
  );
};

export default SidebarLink;
