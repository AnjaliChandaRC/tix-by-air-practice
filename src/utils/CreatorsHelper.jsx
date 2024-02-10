import {
  Information,
  ManageContent,
  Members,
  MyCommunities,
  TextBlast,
} from "@/components/dashboards/common/icons/SidebarIcons";

// SIDEBAR LINKS USE IN CREATORS
export const SidebarData = [
  {
    icon: <MyCommunities />,
    title: "My Communities",
    sidebarLink: "/",
  },
  {
    icon: <Information />,
    title: "Information",
    sidebarLink: "/information",
  },
  {
    icon: <ManageContent />,
    title: "Manage Content",
    sidebarLink: "/",
  },
  {
    icon: <TextBlast />,
    title: "Text Blast",
    sidebarLink: "/",
  },
  {
    icon: <Members />,
    title: "Members",
    sidebarLink: "/",
  },
];
