"use client";
import { useSpring, animated, useSprings } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const bookCard = ({ book }) => {
  // 1. Define the spring state
  const [props, set] = useSpring(() => ({
    scale: 1,
    shadow: "0px 5px 15px rgba(0,0,0,0.1)",
    config: { tension: 300, friction: 10 }, // Bouncy config
  }));

  console.log(book);
  return (
    <animated.div
      // 2. Apply the animated props to the style
      style={{
        transform: props.scale.to((s) => `scale(${s})`),
        boxShadow: props.shadow,
      }}
      // 3. Trigger changes on hover
      onMouseEnter={() =>
        set({ scale: 1.05, shadow: "0px 15px 30px rgba(0,0,0,0.2)" })
      }
      onMouseLeave={() =>
        set({ scale: 1, shadow: "0px 5px 15px rgba(0,0,0,0.1)" })
      }
      className="card mx-auto bg-base-100 shadow-sm w-full"
    >
      <figure className="flex items-center justify-center px-0 pt-5 w-[250px] h-[300px] mx-auto">
        <Image
          src={book.image_url}
          alt="Book"
          width={200}
          height={200}
          unoptimized
          className="flex justify-center w-full h-full mx-auto"
        ></Image>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{book.title}</h2>

        <div className="card-actions">
          <Link href={`/books/${book.id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </animated.div>
  );
};

export default bookCard;
