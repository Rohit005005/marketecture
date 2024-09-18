"use client";
import { useState } from 'react';

export default function HoverTile3() {
    const [hovered, setHovered] = useState(false);

    return (
        <h1
            className={`w-[455px] h-[250px] flex items-center justify-center font-bold text-center py-2 px-4 rounded-lg shadow-lg ${hovered ? 'text-base' : 'text-4xl'}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: hovered
                    ? 'linear-gradient(to right, rgb(195, 245, 229), rgb(198, 240, 212), rgb(221, 235, 203), rgb(221, 218, 227), rgb(231, 214, 249))'
                    : 'linear-gradient(to top, rgb(228, 254, 200), rgb(199, 248, 149))',
                color: 'black',
            }}
        >
            {hovered ? 'A well-designed space can significantly impact productivity and customer experience. We offer complete interior design services, from initial concept to final furnishing. Our solutions cater to all types of spaces, ensuring functionality and aesthetic appeal.' : 'Interior Design and Furnishing'}
        </h1>
    );
}
