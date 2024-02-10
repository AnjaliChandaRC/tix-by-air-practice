import Link from "next/link";
import React from "react";

const SidebarLink = ({ url, icons, title }) => {
  return (
    <Link
      href={url}
      className="flex items-center gap-[10px] py-5 bg -white my-5 ps-5"
    >
      <span>{icons}</span>
      <span className="text-white text-sm leading-[100%] ff_inter">
        {title}
      </span>
    </Link>
  );
};

export default SidebarLink;
