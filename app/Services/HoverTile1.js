"use client";
import { useState } from 'react';

export default function HoverTile1() {
    const [hovered, setHovered] = useState(false);

    return (
        <h1
            className={`w-[455px] h-[250px] flex items-center justify-center font-bold text-center py-2 px-2 rounded-lg shadow-lg ${hovered ? 'text-base' : 'text-4xl'}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: hovered
                    ? 'linear-gradient(to right, rgb(195, 245, 229), rgb(198, 240, 212), rgb(221, 235, 203), rgb(221, 218, 227), rgb(231, 214, 249))'
                    : 'linear-gradient(to top, rgb(255, 255, 255), rgb(141, 152, 217))',
                color: 'black',
            }}
        >
            {hovered ? 'Beyond creating marketing strategies, we actively undertake sales operations to drive your business forward. Our team is skilled in turning prospects into loyal customers, boosting your bottom line.' : 'Sales Execution'}
        </h1>
    );
}
