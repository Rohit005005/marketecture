"use client";
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function Animation() {
    const animationContainer = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/loop_animation.json'
        });
    }, []);
    
    return (
        <div className="max-w-full" ref={animationContainer}></div>
    );
}