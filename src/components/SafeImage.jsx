"use client";

import Image from "next/image";
import { useState } from "react";

const SafeImage = ({ src, alt, width, height, className }) => {
  // Use the fallback if src is null or undefined initially
  //   const fallback =
  //     "https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/669726e7b6388b54f9aa2769_66553f0390479b8e5a3fc524_image_CMEex1C1_1716770910814_raw.jpeg";

  const fallback = "/image-avater.jpeg";

  const [imgSrc, setImgSrc] = useState(src || fallback);

  return (
    <Image
      // key={imgSrc}
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      // If the URL is broken (like http://uhbh), this triggers:
      onError={() => setImgSrc(fallback)}
    />
  );
};

export default SafeImage;
