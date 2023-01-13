
import React , {forwardRef} from 'react';
import'./post.css';

// ===============Material  UI Imports =============
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const Post =  forwardRef(({displayName,userName,verified,text,image,avatar},ref) => {
// eslint-disable-next-line no-unused-vars
// function random() {Math.floor(Math.random() * 70) + 1;}
  return (
    <div className='post' ref={ref}>
      <div className='post_avatar'>

        <Avatar src={avatar}></Avatar>
    </div>
    
      <div className='post_body'>
    <div className='post_header'>

<div className='post_headerText'>
    <h3> 
        {displayName} {" "} 
        <span className='post_headerSpecial'>
          {verified &&   <VerifiedIcon  className='verified_badge'/> }
            @{userName}    <DeleteOutlineOutlinedIcon  className='deleteTweet'/>
        </span>
    </h3>
 
</div>
<div className = 'post_headerDescription'>
  <p> {text}</p>
</div>
<img src ={image} className='tweet_img' alt =''/>
<div className = 'post_footer'>
<ChatBubbleOutlineOutlinedIcon className='post_footerIcon'/>
<RepeatOutlinedIcon className='post_footerIcon' />
<FavoriteBorderOutlinedIcon className='post_footerIcon'/>
<FileUploadOutlinedIcon className='post_footerIcon'/>
</div>
    </div>
        
      </div>

    </div>
  )
});

export default Post