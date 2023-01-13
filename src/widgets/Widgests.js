import React from 'react'
import './widgests.css'
// =====================Twitter Embed =================
import { TwitterTimelineEmbed, TwitterShareButton,    TwitterTweetEmbed} from 'react-twitter-embed';

// ===================Material Ui imports=================
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Widgests = () => {
  return (
    <div className='widgests'>
      <div className='widgests_input'>
        <SearchOutlinedIcon className='widgests_searchIcon'/>
        <input
        type='text'placeholder='Search Twitter'/>
      </div>
        <div className='widgests_widgetContainer'>
        <h2>What's happenning</h2>

        <TwitterTweetEmbed tweetId={'1613144560388931584'}/>
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="AlNassrFC_EN"
        options={{height: 400}}/>
        
        <TwitterShareButton
        
        options={{ text: 'Hello Twitter', via: 'PrasannaAmale' }} />

        </div>
        

    </div>
  )
}

export default Widgests