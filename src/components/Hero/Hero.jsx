import React from 'react'
import Video from "../../assets/herovideo.mp4"

const Hero = () => {
    return (
        <>
            <div>
                <video
                    src={Video}
                    autoPlay
                    muted
                    loop
                    className="mt-23"
                />
            </div>
        </>
    )
}

export default Hero