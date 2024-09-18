"use client";
import { useState } from 'react';

export default function HoverTile2() {
    const [hovered, setHovered] = useState(false);

    return (
        <h1
            className={`w-[455px] h-[250px] flex items-center justify-center font-bold text-center py-2 px-2 rounded-lg shadow-lg ${hovered ? 'text-base' : 'text-4xl'}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: hovered
                    ? 'linear-gradient(to right, rgb(195, 245, 229), rgb(198, 240, 212), rgb(221, 235, 203), rgb(221, 218, 227), rgb(231, 214, 249))'
                    : 'linear-gradient(to top, rgb(255, 255, 255), rgb(242, 219, 120))',
                color: 'black',
            }}
        >
            {hovered ? 'We craft tailored marketing strategies that align with your business goals. Our campaigns are designed to maximise your reach and engagement, ensuring your brand stands out in the competitive marketplace.' : 'Strategic Marketing'}
        </h1>
    );
}
