import React from 'react'
import SidebarLink from '../SidebarLink'
import { GroupUserIcon, InfoIcon, ManageIcon, TextIcon, UserIcon } from '../../icons/SidebarIcons'

const CreatorTabs = () => {
  return (
    <>
      <SidebarLink url="/creator" icons={<GroupUserIcon />} title="My Communities" />
      <SidebarLink url="/information" icons={<InfoIcon />} title="Information" />
      <SidebarLink url="/manage" icons={<ManageIcon />} title="Manage Content" />
      <SidebarLink url="/text" icons={<TextIcon />} title="Text Blast" />
      <SidebarLink url="/members" icons={<UserIcon />} title="Members" />
    </>
  )
}

export default CreatorTabs