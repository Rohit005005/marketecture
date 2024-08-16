"use client";

import { useEffect, useRef, useState } from "react";
import Animation from "./Animation";
import CreativeMedia from "./CreativeMedia";
import Marketing from "./Marketing";
import Services from "./Services";
import Technology from "./Technology";

export default function FixedServicesLayout() {
    const [visibleComponent, setVisibleComponent] = useState(null);

    const servicesRef = useRef(null);
    const creativeMediaRef = useRef(null);
    const marketingRef = useRef(null);
    const technologyRef = useRef(null);

    useEffect(() => {
        const options = {
            threshold: 1.0, 
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibleComponent(entry.target.dataset.name);
                }
            });
        }, options);

        if (servicesRef.current) {
            observer.observe(servicesRef.current);
        }
        if (creativeMediaRef.current) {
            observer.observe(creativeMediaRef.current);
        }
        if (marketingRef.current) {
            observer.observe(marketingRef.current);
        }
        if (technologyRef.current) {
            observer.observe(technologyRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
                <div className="sticky top-20">
                    <Animation />
                </div>
            </div>

            <div className="overflow-y-auto max-w-screen">
                <div
                    ref={servicesRef}
                    data-name="services"
                    className={`transition-opacity duration-1000 ${visibleComponent === "services" ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Services />
                </div>
                <div
                    ref={creativeMediaRef}
                    data-name="creativeMedia"
                    className={`transition-opacity duration-1000 ${visibleComponent === "creativeMedia" ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <CreativeMedia />
                </div>
                <div
                    ref={marketingRef}
                    data-name="marketing"
                    className={`transition-opacity duration-1000 ${visibleComponent === "marketing" ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Marketing />
                </div>
                <div
                    ref={technologyRef}
                    data-name="technology"
                    className={`transition-opacity duration-1000 ${visibleComponent === "technology" ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Technology />
                </div>
            </div>
        </div>
    );
}
