"use client";
import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import ReadyToBuild from "./ReadyToBuild";

const BouncingImages = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);

  useEffect(() => {
    // Create engine and render
    const engine = Matter.Engine.create();
    engineRef.current = engine;
    const { world } = engine;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: sceneRef.current.clientWidth,
        height: sceneRef.current.clientHeight,
        wireframes: false,
        background: "transparent",
      },
    });
    renderRef.current = render;

    // Update canvas size on window resize
    const updateCanvasSize = () => {
      render.canvas.width = sceneRef.current.clientWidth;
      render.canvas.height = sceneRef.current.clientHeight;
      render.options.width = sceneRef.current.clientWidth;
      render.options.height = sceneRef.current.clientHeight;
    };

    window.addEventListener("resize", updateCanvasSize);
    updateCanvasSize();

    // Create walls
    const wallThickness = 50;
    const walls = [
      Matter.Bodies.rectangle(
        render.options.width / 2,
        0 - wallThickness / 2,
        render.options.width,
        wallThickness,
        { isStatic: true, render: { visible: false } }
      ),
      Matter.Bodies.rectangle(
        render.options.width / 2,
        render.options.height + wallThickness / 2,
        render.options.width,
        wallThickness,
        { isStatic: true, render: { visible: false } }
      ),
      Matter.Bodies.rectangle(
        0 - wallThickness / 2,
        render.options.height / 2,
        wallThickness,
        render.options.height,
        { isStatic: true, render: { visible: false } }
      ),
      Matter.Bodies.rectangle(
        render.options.width + wallThickness / 2,
        render.options.height / 2,
        wallThickness,
        render.options.height,
        { isStatic: true, render: { visible: false } }
      ),
    ];
    Matter.World.add(world, walls);

    // Create image bodies
    const images = [
      "/logo/comp1.png",
      "/logo/comp2.png",
      "/logo/comp3.png",
      "/logo/comp4.png",
      "/logo/comp5.png",
      "/logo/comp6.png",
      "/logo/comp7.png",
      "/logo/comp8.png",
      "/logo/comp9.png",
      "/logo/comp10.png",
      "/logo/comp11.png",
      "/logo/comp12.png",
      "/logo/comp13.png",
      "/logo/comp14.png",
      "/logo/comp15.png",
      "/logo/comp16.png",
      "/logo/comp17.png",
      "/logo/comp18.png",
      "/logo/comp19.png",
      "/logo/comp20.png",
      "/logo/comp21.png",
      "/logo/comp22.png",
      "/logo/comp23.png",
      "/logo/comp24.png",
      "/logo/comp25.png",
      "/logo/comp26.png",
      "/logo/comp27.png",
      "/logo/comp28.png",
      "/logo/comp29.png",
      "/logo/comp30.png",
      "/logo/comp31.png",
      "/logo/comp32.png",
      "/logo/comp33.png",
      "/logo/comp34.png",
    ];

    const imageBodies = images.map((image) => {
      const x = Math.random() * (render.options.width - 100) + 50;
      const y = Math.random() * (render.options.height - 100) + 50;
      const isMobile = window.innerWidth < 800;

      const radius = isMobile ? 37.5 : 58;
      const scale = isMobile ? 0.11 : 0.17;

      return Matter.Bodies.circle(x, y, radius, {
        restitution: 1,
        friction: 0,
        frictionAir: 0.02, // Add some air resistance to slow down fast movement
        render: {
          sprite: {
            texture: image,
            xScale: scale,
            yScale: scale,
          },
        },
      });
    });

    Matter.World.add(world, imageBodies);

    // Limit velocity to prevent disappearing on fast shakes
    Matter.Events.on(engine, "beforeUpdate", () => {
      imageBodies.forEach((body) => {
        // Limit maximum velocity
        const maxVelocity = 10;
        if (body.velocity.x > maxVelocity) {
          Matter.Body.setVelocity(body, { x: maxVelocity, y: body.velocity.y });
        }
        if (body.velocity.x < -maxVelocity) {
          Matter.Body.setVelocity(body, { x: -maxVelocity, y: body.velocity.y });
        }
        if (body.velocity.y > maxVelocity) {
          Matter.Body.setVelocity(body, { x: body.velocity.x, y: maxVelocity });
        }
        if (body.velocity.y < -maxVelocity) {
          Matter.Body.setVelocity(body, { x: body.velocity.x, y: -maxVelocity });
        }

        // Ensure the bodies stay inside the canvas boundaries
        const padding = 10;
        if (body.position.x < -padding || body.position.x > render.options.width + padding) {
          Matter.Body.setPosition(body, { x: render.options.width / 2, y: body.position.y });
        }
        if (body.position.y < -padding || body.position.y > render.options.height + padding) {
          Matter.Body.setPosition(body, { x: body.position.x, y: render.options.height / 2 });
        }
      });
    });

    // Enable mouse control (for dragging)
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    Matter.World.add(world, mouseConstraint);

    // Remove event listeners that block scrolling
    mouse.element.removeEventListener("wheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

    // Intersection Observer to trigger animation on scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const runner = Matter.Runner.create();
          Matter.Runner.run(runner, engine);
          Matter.Render.run(render);
          observer.disconnect(); // Stop observing after animation starts
        }
      },
      { threshold: 0.1 }
    );

    if (sceneRef.current) {
      observer.observe(sceneRef.current);
    }

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      Matter.Render.stop(render);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative flex justify-center">
      <ReadyToBuild />
      <div
        ref={sceneRef}
        className="w-full h-[40vh] sm:h-[70vh] border-none p-0 m-0 bg-transparent"
      />
    </div>
  );
};

export default BouncingImages;
