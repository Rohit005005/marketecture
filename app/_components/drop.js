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
      "/logo/img1.png",
      "/logo/img2.png",
      "/logo/img3.png",
      "/logo/img4.png",
      "/logo/img5.png",
      "/logo/img6.png",
      "/logo/img7.png",
      "/logo/img8.png",
      "/logo/img9.png",
      "/logo/img10.png",
      "/logo/img11.png",
      "/logo/img12.png",
      "/logo/img13.png",
      "/logo/img14.png",
      "/logo/img15.png",
      "/logo/img16.png",
      "/logo/img17.png",
      "/logo/img18.png",
      "/logo/img19.png",
      "/logo/img20.png",
      "/logo/img21.png",
      "/logo/img22.png",
      "/logo/img23.png",
    ];

    const imageBodies = images.map((image) => {
      const x = Math.random() * (render.options.width - 100) + 50;
      const y = Math.random() * (render.options.height - 100) + 50;
      const isMobile = window.innerWidth < 800;

      const radius = isMobile ? 22 : 51;
      const scale = isMobile ? 0.065 : 0.15;
      const restitution = isMobile ? 0.5 : 0.8; // Lower restitution for mobile to reduce bounce
      const frictionAir = isMobile ? 0.05 : 0.02; // Increase air resistance on mobile

      return Matter.Bodies.circle(x, y, radius, {
        restitution: restitution,
        friction: 0,
        frictionAir: frictionAir,
        render: {
          sprite: {
            texture: image,
            xScale: scale,
            yScale: scale,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          },
        },
      });
    });

    Matter.World.add(world, imageBodies);

    // Limit velocity to prevent disappearing on fast shakes
    Matter.Events.on(engine, "beforeUpdate", () => {
      const maxVelocity = 10;
      const minVelocity = 0.05; // Minimum velocity threshold to avoid jitter

      imageBodies.forEach((body) => {
        if (Math.abs(body.velocity.x) < minVelocity) {
          Matter.Body.setVelocity(body, { x: 0, y: body.velocity.y });
        }
        if (Math.abs(body.velocity.y) < minVelocity) {
          Matter.Body.setVelocity(body, { x: body.velocity.x, y: 0 });
        }

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
        className="w-full h-[40vh] sm:h-[80vh] border-none p-0 m-0 bg-transparent"
      />
    </div>
  );
};

export default BouncingImages;
