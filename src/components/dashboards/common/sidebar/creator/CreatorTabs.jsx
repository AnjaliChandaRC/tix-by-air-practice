import React from 'react'
import SidebarLink from '../SidebarLink'
import { MyCommunities } from '../../icons/SidebarIcons'

const CreatorTabs = () => {
  return (
    <>
      <SidebarLink url="/creator" icons={<MyCommunities/>} title="Information"/>
      <SidebarLink url="/creator" icons={<MyCommunities/>} title="Manage Content"/>

    </>
  )
}

export default CreatorTabs