"use client";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollImage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const scrollTriggerCreated = useRef(false); // Track if ScrollTrigger is created

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    // Check on mount
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        ease: "none",
      });

      // Define the animation timeline for scaling the video
      tl.fromTo(
        "#video",
        { scale: 0.4 }, // Initial scale
        { scale: 0.7, duration: 1, transformOrigin: "center center" } // End scale
      );

      // Create the ScrollTrigger instance
      ScrollTrigger.create({
        trigger: "#video-section",
        start: "top top",
        end: "+=200%",
        pin: true, // Pin the section during scroll
        animation: tl,
        scrub: 0.78, // Smoothly transition with scrolling
        pinSpacing: false, // No extra space below the section
      });

      // Mark that ScrollTrigger has been created
      scrollTriggerCreated.current = true;

      return () => {
        // Clean up ScrollTrigger and GSAP timeline only if they were created
        if (scrollTriggerCreated.current) {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
          tl.kill();
          scrollTriggerCreated.current = false; // Reset the flag after cleanup
        }
      };
    }
  }, [isMobile]);

  return (
    <div>
      {!isMobile ? (
        <div>
          <section
            id="video-section"
            className="relative h-screen w-screen overflow-hidden flex justify-center items-center"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <video
                id="video"
                src="/video.mp4" // Replace with your video URL
                className="object-cover w-full h-auto max-w-[100%] max-h-[100%]"
                controls // Video controls like play/pause
                autoPlay
                muted
                loop
              />
            </div>
          </section>
          <div className="spacer h-screen w-screen grid place-content-center relative"></div>
          <div className="spacer h-screen w-screen grid place-content-center relative">
            <h2></h2>
            <span className="absolute bottom-5 left-1/2 transform -translate-x-1/2"></span>
          </div>
        </div>
      ) : (
        <video
            id="video"
            src="/video.mp4" // Replace with your video URL
            className="p-10 mt-10"
            controls // Video controls like play/pause
            autoPlay
            muted
            loop
          />
      )}
    </div>
  );
};

export default ScrollImage;
