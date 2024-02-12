"use client"; // Indicates this module runs only on the client-side
import React from "react"; // Importing React library
import SidebarLink from "../SidebarLink"; // Importing SidebarLink component
import {
  GroupUserIcon,
  InfoIcon,
  ManageIcon,
  TextIcon,
  UserIcon,
} from "../../icons/SidebarIcons"; // Importing icon components
import { usePathname } from "next/navigation"; // Importing usePathname hook from Next.js

// Defining CreatorTabs component, responsible for rendering creator-specific tabs in the sidebar
const CreatorTabs = () => {
  const pathname = usePathname(); // Getting current pathname using usePathname hook

  // Returning JSX for CreatorTabs component
  return (
    <>
      {/* SidebarLink for My Communities */}
      <SidebarLink
        url="/creator/community" // URL for My Communities
        icons={<GroupUserIcon />} // Icon for My Communities
        title="My Communites" // Title for My Communities
      />
      {/* Rendering additional sidebar links based on the current pathname */}
      {pathname !== "/creator/community" ? ( // Checking if the current pathname is not "/creator/community"
        <>
          {/* SidebarLink for Information */}
          <SidebarLink
            url="/creator/information" // URL for Information
            icons={<InfoIcon />} // Icon for Information
            title="Information" // Title for Information
          />
          {/* SidebarLink for Manage Content */}
          <SidebarLink
            url="/manage" // URL for Manage Content
            icons={<ManageIcon />} // Icon for Manage Content
            title="Manage Content" // Title for Manage Content
          />
          {/* SidebarLink for Text Blast */}
          <SidebarLink
            url="/text" // URL for Text Blast
            icons={<TextIcon />} // Icon for Text Blast
            title="Text Blast" // Title for Text Blast
          />
          {/* SidebarLink for Members */}
          <SidebarLink
            url="/members" // URL for Members
            icons={<UserIcon />} // Icon for Members
            title="Members" // Title for Members
          />
        </>
      ) : (
        "" // Empty string if the current pathname is "/creator/community"
      )}
    </>
  );
};

export default CreatorTabs; // Exporting CreatorTabs component as default
