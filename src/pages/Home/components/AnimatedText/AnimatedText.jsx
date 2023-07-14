import React, { useEffect, useRef, useState } from 'react'
import styles from './AnimatedText.module.css'
import { TypeAnimation } from 'react-type-animation'

const text = [
    'Revolutionize your video experience with our intelligent upload platform.', 2000,
    'Transcribe, search, and locate moments instantly in your videos.', 2000,
    'Harness the power of AI for precise video navigation.', 2000,
    'Unlock the full potential of your content with smart search.', 2000,
    'Find and share moments that matter, faster than ever.', 2000,
    'Turn spoken words into searchable text with our AI.', 2000,
    'Jump to key points in videos with pinpoint accuracy.', 2000,
    'From upload to transcript, transforming the way you search.', 2000,
    'Redefining video exploration with our powerful, AI-driven search bar.', 2000,
    'Join us on a journey through intelligent video analysis.', 2000,
]

const colors = {
    1: '#20a7d8',
    2: '#CD921E',
    3: '#c10528',
    4: 'purple',
}

const AnimatedText = () => {

    let [num, setNum] = useState(4);

    useEffect(() => {
        const id = setInterval(() => {
            setNum(Math.ceil(Math.random(4) * (4-0) + 0))

        }, 3000)

        return () => {
            clearInterval(id)
        }
    }, [])

    
    return (
        <div className={styles.container}>
            {console.log(num)}
            <div className={styles.text} style={{ backgroundColor: colors[num], padding: '10px'}}>
                <TypeAnimation
                    sequence={text}
                    speed={70}
                    repeat={Infinity}
                    omitDeletionAnimation={true}
                />
                {/* <h1 style={{ color: colors[num]}}>hello world</h1> */}
            </div>
        </div>
    )
}

export default AnimatedText