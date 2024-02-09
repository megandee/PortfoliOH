import React, {useEffect, useRef} from 'react'
import "./landing.scss"
import { init } from 'ityped'

export default function Landing() {
    const textRef = useRef()
    
    useEffect (()=>{
        init(textRef.current, {
            showCursor: true,
            startDelay: 2000,
            typeSpeed: 50,
            backDelay: 1500,
            backSpeed:60,
            loop: false,
            disableBackTyping: false,
            strings: ["design", "develop", "create."],
          });
    }, [])


    return (
        <div className="landing" id="landing" 
            >
            <div className="imgContainer">
                
                </div>
            <div className="text">
                <div className="wrapper">
                    <h1>I'm Megan DeRisi</h1>
                    <h3>And I <span ref={textRef}></span></h3>
                </div>
            </div>
        </div>
    )
}