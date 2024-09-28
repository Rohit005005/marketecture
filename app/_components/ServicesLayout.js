"use client";

import { useEffect, useRef, useState } from "react";
import CreativeMedia from "./CreativeMedia";
import Marketing from "./Marketing";
import Services from "./Services";
import Technology from "./Technology";
import Animation from "./animation";
import SalesExecution from "./SalesExecution";
import StrategicMarketing from "./StrategicMarketing";
import InteriorDesignAndFurnishing from "./InteriorDesignAndFurnishing";
import CloudKitchenAndOfficeSpaceSetup from "./CloudKitchenAndOfficeSpaceSetup";
import MaterialsProcurement from "./MaterialsProcurement";
import RealEstate from "./RealEstate";

export default function FixedServicesLayout() {
    const [visibleComponent, setVisibleComponent] = useState(null);

    const servicesRef = useRef(null);
    const creativeMediaRef = useRef(null);
    const marketingRef = useRef(null);
    const technologyRef = useRef(null);
    const salesExecutionRef = useRef(null);
    const strategicMarketingRef = useRef(null);
    const interiorDesignAndFurnishingRef = useRef(null);
    const cloudKitchenAndOfficeSpaceSetupRef = useRef(null);
    const materialsProcurementRef = useRef(null);
    const realEstateRef = useRef(null);
    

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
        if (salesExecutionRef.current) {
            observer.observe(salesExecutionRef.current);
        }
        if (strategicMarketingRef.current) {
            observer.observe(strategicMarketingRef.current);
        }
        if (interiorDesignAndFurnishingRef.current) {
            observer.observe(interiorDesignAndFurnishingRef.current);
        }
        if (cloudKitchenAndOfficeSpaceSetupRef.current) {
            observer.observe(cloudKitchenAndOfficeSpaceSetupRef.current);
        }
        if (materialsProcurementRef.current) {
            observer.observe(materialsProcurementRef.current);
        }
        if (realEstateRef.current) {
            observer.observe(realEstateRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
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
                <div
                    ref={salesExecutionRef}
                    data-name="salesExecution"
                    className={`transition-opacity duration-1000 ${visibleComponent === "salesExecution" ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <SalesExecution />
                </div>
                <div
                    ref={strategicMarketingRef}
                    data-name="strategicMarketing"
                    className={`transition-opacity duration-1000 ${visibleComponent === "strategicMarketing" ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <StrategicMarketing />
                </div>
                <div
                    ref={interiorDesignAndFurnishingRef}
                    data-name="interiorDesignAndFurnishing"
                    className={`transition-opacity duration-1000 ${visibleComponent === "interiorDesignAndFurnishing" ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <InteriorDesignAndFurnishing />
                </div>
                <div
                    ref={cloudKitchenAndOfficeSpaceSetupRef}
                    data-name="cloudKitchenAndOfficeSpaceSetup"
                    className={`transition-opacity duration-1000 ${visibleComponent === "cloudKitchenAndOfficeSpaceSetup" ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <CloudKitchenAndOfficeSpaceSetup />
                </div>
                <div
                    ref={materialsProcurementRef}
                    data-name="materialProcurement"
                    className={`transition-opacity duration-1000 ${visibleComponent === "materialProcurement" ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <MaterialsProcurement />
                </div>
                <div
                    ref={realEstateRef}
                    data-name="realEstate"
                    className={`transition-opacity duration-1000 ${visibleComponent === "realEstate" ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <RealEstate />
                </div>
            </div>
        </div>
    );
}
