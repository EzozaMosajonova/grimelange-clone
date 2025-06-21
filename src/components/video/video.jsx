import React from 'react'
import Video from "../../assets/video.mp4"

const VideoComponent = () => {
    return (
        <>
            <div>
                <video
                    src={Video}
                    autoPlay
                    muted
                    loop
                    className="mt-10"
                />
            </div>
        </>
    )
}

export default VideoComponent