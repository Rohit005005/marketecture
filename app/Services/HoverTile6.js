"use client";
import { useState } from 'react';

export default function HoverTile6() {
    const [hovered, setHovered] = useState(false);

    return (
        <h1
            className={`w-[455px] h-[250px] flex items-center justify-center font-bold text-center py-2 px-4 rounded-lg shadow-lg ${hovered ? 'text-base' : 'text-4xl'}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: hovered
                    ? 'linear-gradient(to right, rgb(195, 245, 229), rgb(198, 240, 212), rgb(221, 235, 203), rgb(221, 218, 227), rgb(231, 214, 249))'
                    : 'linear-gradient(to top, rgb(244, 183, 241), rgb(239, 143, 234))',
                color: 'black',
            }}
        >
            {hovered ? 'Are you searching for a new home? We’ve got you covered on all fronts, whether you\'re looking for a new flat or villa from a trusted A-category builder, or even planning to construct a house from scratch.' : 'Real Estate'}
        </h1>
    );
}
