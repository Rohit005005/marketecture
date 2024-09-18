"use client";
import { useState } from 'react';

export default function HoverTile5() {
    const [hovered, setHovered] = useState(false);

    return (
        <h1
            className={`w-[455px] h-[250px] flex items-center justify-center font-bold text-center py-2 px-4 rounded-lg shadow-lg ${hovered ? 'text-base' : 'text-4xl'}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: hovered
                    ? 'linear-gradient(to right, rgb(195, 245, 229), rgb(198, 240, 212), rgb(221, 235, 203), rgb(221, 218, 227), rgb(231, 214, 249))'
                    : 'linear-gradient(to top, rgb(211, 178, 250), rgb(185, 128, 247))',
                color: 'black',
            }}
        >
            {hovered ? 'We source all necessary materials for your projects, ensuring high quality and timely delivery. Our extensive network of suppliers allows us to provide competitive prices and reliable service.' : 'Materials Procurement'}
        </h1>
    );
}
