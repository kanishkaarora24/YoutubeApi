import React from 'react';
import VideoElement from './VideoElement'

const Collection = (props) => {
  
    const vItems = props.videos.map(video => {
        return <VideoElement handleVideoChange = {props.handleVideoChange} key={video.etag} videos={video}/>
    });
    return <div>
        {vItems}
    </div>
};

export default Collection;
