import React,{useState, useEffect} from 'react'
import FlipMove from 'react-flip-move';
import "./feed.css"
import './TweetBox'
import './Post.js'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import Tweetbox from './TweetBox';
import { Tooltip } from '@mui/material';
import Post from './Post.js';
import db from '../firebase/firebase';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) =>  doc.data()))
    );
  }, []);




  return (
    <div className='feed'>
      <div className='feed_header'>
{/* ==============Header================== */}
<h2>Home</h2>
<Tooltip title="New feed">
<AutoAwesomeOutlinedIcon className='new_feedstar'/>
</Tooltip>

</div>

{/* ================Tweet Box================ */}
<Tweetbox/>


{/* ===================Posts=================== */}
<FlipMove>

{posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
</FlipMove>

{/* <Post "/> */}



    </div>
  )
}

export default Feed;