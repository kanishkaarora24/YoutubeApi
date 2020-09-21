import React from 'react'

const VideoElement = (props) => {
    const onVClick = ()=>{
        props.handleVideoChange(props.videos);
    };
    return (
        <div className="listingsPanel" onClick={onVClick}
            >
            <div className="grid-item">
            <img src={props.videos.snippet.thumbnails.default.url}/>
            <p className="snip-title">{props.videos.snippet.title}</p>
            </div>
        </div>
    )
}

export default VideoElement
