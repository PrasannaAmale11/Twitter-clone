import React from 'react'
import "./sidebar.css"

import SidebarOption from './SidebarOption';
// ================Material UI Icons //
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
// import SearchIcon from '@mui/icons-material/Search';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// =======================Buttons =======================
import Button from '@mui/material/Button';

const Sidebar = () => {
  return (
    <div className='sidebar'>

  <TwitterIcon className='sidebar-twittericon'/>
  <SidebarOption  active Icon = {HomeIcon} text= "Home"/>
  <SidebarOption  Icon ={TagIcon} text = "Explore"/>
  <SidebarOption  Icon={NotificationsNoneOutlinedIcon} text = "Notifications"/>
  <SidebarOption  Icon={MailOutlinedIcon} text = "Messages"/>
  <SidebarOption  Icon={BookmarkBorderOutlinedIcon} text = "Bookmarks"/>
  <SidebarOption  Icon={ListAltIcon} text = "Lists"/>
  <SidebarOption  Icon={AccountCircleOutlinedIcon} text = "Profile"/>
  <SidebarOption  Icon={MoreHorizIcon} text = "More"/>
   
   {/* ===========Tweet Button==================== */}

   <Button variant="outlined" className='sidebar_tweet' fullWidth> Tweet</Button>
    </div>
  )
}

export default Sidebar