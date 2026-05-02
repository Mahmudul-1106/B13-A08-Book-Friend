"use client";
import React from "react";
import Link from "next/link";
import { useSpring, animated, config } from "@react-spring/web";

const NotFound = () => {
  // Simple floating animation for the 404 text
  const floatAnim = useSpring({
    from: { transform: "translateY(10px)" },
    to: { transform: "translateY(-10px)" },
    loop: { reverse: true },
    config: config.slow,
  });

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      {/* Animated 404 Header */}
      <animated.h1
        style={floatAnim}
        className="text-9xl font-extrabold text-purple-600 opacity-20 absolute select-none"
      >
        404
      </animated.h1>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-blue-950 mb-4">
          Oops! This Page is Missing
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          It looks like the page you are looking for has been moved, deleted, or
          never existed in our library. Let's get you back to your friends!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="btn btn-primary btn-wide shadow-lg">
              Back to Home
            </button>
          </Link>

          <Link href="/allbooks">
            <button className="btn btn-outline btn-secondary btn-wide">
              Browse All Books
            </button>
          </Link>
        </div>
      </div>

      {/* Decorative element using DaisyUI glass effect */}
      <div className="mt-16 grid grid-cols-3 gap-4 opacity-50">
        <div className="w-12 h-16 bg-purple-200 rounded-lg transform -rotate-12 border-2 border-purple-300"></div>
        <div className="w-12 h-16 bg-blue-200 rounded-lg border-2 border-blue-300"></div>
        <div className="w-12 h-16 bg-purple-200 rounded-lg transform rotate-12 border-2 border-purple-300"></div>
      </div>
    </div>
  );
};

export default NotFound;
