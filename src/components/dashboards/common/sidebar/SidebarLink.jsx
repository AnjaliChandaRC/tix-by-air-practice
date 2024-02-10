import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarLink = ({ url, icons, title }) => {
  const pathname = usePathname();
  usePathname;
  return (
    <Link
      href={url}
      className={`flex items-center gap-[10px] rounded-s-full py-5 my-5 ps-5 relative ${
        pathname === url ? "bg-white" : ""
      }`}
    >
      {pathname === url ? (
        <>
          <span className="absolute w-[30px] h-[30px] bg-white bottom-[-30px] end-0 before:content-[''] before:absolute before:w-[30px] before:h-[30px] before:bg-smokyblack before:bottom-0 before:end-0 before:rounded-tr-[40px]"></span>
          <span className="absolute w-[30px] h-[30px] bg-white top-[-30px] end-0 after:content-[''] after:absolute after:w-[30px] after:h-[30px] after:bg-smokyblack after:top-0 after:end-0 after:rounded-br-[40px]"></span>
        </>
      ) : (
        ""
      )}
      <span className={pathname === url ? "icon_active" : ""}>{icons}</span>
      <span
        className={`text-sm leading-[100%] ff_inter font-semibold ${
          pathname === url ? "text-black" : "text-white"
        }`}
      >
        {title}
      </span>
    </Link>
  );
};

export default SidebarLink;
