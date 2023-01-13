import React, {  useState } from 'react'
import './tweetbox.css'
import db from './../firebase/firebase'
// =====================================Material Ui imports==============
import { Avatar,Button, Tooltip } from '@mui/material'
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';


import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
const Tweetbox = () => {

  

  const [tweetMessage,setTweetMessage] = useState('');
  const [tweetImage,setTweeetImage] = useState('');
  const [tweetGif,setTweetGif] = useState('');
  // const [tweetMessage,setTweetMessage] = useState('');
  const sendTweet = e => {
  e.preventDefault();

    db.collection('posts').add({
    displayName:"Sameer",
    userName:"samyaa",
    verified: true,
    text : tweetMessage,
    image: tweetImage,
    avatar : "https://i.pravatar.cc/150?img=3"
  })

  setTweetMessage('');
  setTweeetImage('');
  setTweetGif('');
  }
  return (
    <div className='tweetBox'>

    <form className=''>
    <div className ='tweetBox__input'>
    <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=3" />
    <input 
    onChange={(e)=>{setTweetMessage(e.target.value)}} 
    value={tweetMessage} 
    type="text" 
    placeholder="What's happenning?"/>
    </div>
    {/* <input type="text" className='tweetBox_imputImage' placeholder=" Optional:Enter image url"/> */}
    <div className='tweetIcon_div'>
    <div className='tweetImage'>
    <Tooltip title="images">
    <label for="imageUpload">
    <BrokenImageOutlinedIcon className='tweet_icons'  /></label></Tooltip>
    <input 
    value={tweetImage}
    onChange={(e)=>{setTweeetImage(e.target.value)}}
    type= "text" 
    id='imageUpload' 
    accept="image/png, image/jpeg" 
    className="tweetBox_imputImage"/>
    </div>

    <div className='tweetgif'>
    <Tooltip title=" gif">
    <label for="gifUpload">
    <GifBoxOutlinedIcon className='tweet_icons'  />
    </label>
    </Tooltip>
    <input 
    value={tweetGif}
    onChange={(e)=>{setTweetGif(e.target.value)}}
    type="file" 
    id='gifUpload' 
    accept='image/gif'/>
    
    </div>
    {/* <tooltip title="Upload poll">
    <AlignHorizontalLeftOutlinedIcon className='tweet_icons'/>
    </tooltip> */}
    <div className = "tweetemoji">
    <Tooltip title="Emoji">
    <SentimentSatisfiedOutlinedIcon className='tweet_icons'/>
    </Tooltip>
    <Button onClick={sendTweet} type='submit' className='tweetbox_button'>Tweet</Button>
    </div>
    </div>
 </form>

    </div>
  )
}

export default Tweetbox;