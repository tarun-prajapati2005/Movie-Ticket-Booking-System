import React from 'react'

const BlurCircle = ({ top = "auto", left = "auto", right = "auto", bottom = "auto" }) => {
    return (
        <div className='absolute  -z-60 h-58 w-58 aspect-square rounded-full  bg-primary/30 blur-3xl  bg bg-linear-to-br from-[#722F37] via-[#5b1b1e] to-[#1a0506] ' style={{ top: top, left: left, right: right, bottom: bottom }}>

        </div>
    )
}

export default BlurCircle