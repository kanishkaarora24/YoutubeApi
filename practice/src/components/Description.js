import React from 'react';

const config = require('../configuration');

const Description = (props) =>{
    if(!props.videos){
        return <div></div>
    }
    const videoId = props.videos.id.videoId;
    const url = config.youtube.video_url + videoId;
    
    return (
        <div>
            <div>
                <iframe className="frame" src={url}></iframe>
                <div>
                    <div className="title">{props.videos.snippet.title}</div>
                    <div className="desc">{props.videos.snippet.description}</div>
                </div>
            </div>
        </div>
    )
}
export default Description;
