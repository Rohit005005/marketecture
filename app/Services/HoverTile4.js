"use client";
import { useState } from 'react';

export default function HoverTile4() {
    const [hovered, setHovered] = useState(false);

    return (
        <h1
            className={`w-[455px] h-[250px] flex items-center justify-center font-bold text-center py-2 px-4 rounded-lg shadow-lg ${hovered ? 'text-base' : 'text-4xl'}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: hovered
                    ? 'linear-gradient(to right, rgb(195, 245, 229), rgb(198, 240, 212), rgb(221, 235, 203), rgb(221, 218, 227), rgb(231, 214, 249))'
                    : 'linear-gradient(to top, rgb(245, 201, 166), rgb(242, 172, 117))',
                color: 'black',
            }}
        >
            {hovered ? 'In the evolving business landscape, flexibility is key. We provide comprehensive setup services for cloud kitchens and office spaces, equipping you with everything needed to run your operations smoothly and efficiently.' : 'Cloud Kitchen and Office Space Setup'}
        </h1>
    );
}
