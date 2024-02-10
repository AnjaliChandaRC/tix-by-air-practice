"use client";
import React from "react";
import SidebarLink from "../SidebarLink";
import {
  GroupUserIcon,
  InfoIcon,
  ManageIcon,
  TextIcon,
  UserIcon,
} from "../../icons/SidebarIcons";
import { usePathname } from "next/navigation";

const CreatorTabs = () => {
  const pathname = usePathname();

  return (
    <>
      <SidebarLink
        url="/creator/community"
        icons={<GroupUserIcon />}
        title="My Communites"
      />
      {pathname !== "/creator/community" ? (
        <>
          <SidebarLink
            url="/information"
            icons={<InfoIcon />}
            title="Information"
          />
          <SidebarLink
            url="/manage"
            icons={<ManageIcon />}
            title="Manage Content"
          />
          <SidebarLink url="/text" icons={<TextIcon />} title="Text Blast" />
          <SidebarLink url="/members" icons={<UserIcon />} title="Members" />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default CreatorTabs;
