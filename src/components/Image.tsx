"use client";

import React from "react";
import clsx from "clsx";
import Image from "next/image";

//** Interfaces */
interface ImageProps extends Omit<React.ComponentProps<typeof Image>, "src" | "alt"> {
    src?: string;
    alt?: string;
    isInteractive?: boolean;
}

export default function ImageComponent({
    className,
    src = "/assets/no-image.svg",
    alt = "Image",
    isInteractive = false,
    ...props
}: ImageProps) {
    //** Variables */
    const imageClassName = clsx(
        "relative flex justify-center items-center w-full h-full overflow-hidden",
        // access to img element
        "img:relative img:h-full img:w-full img:object-contain",
        isInteractive &&
            "img:transition img:duration-300 img:ease-in-out img:hover:scale-105 img:hover:opacity-80",
        className,
    );

    return (
        <div className={imageClassName}>
            <Image
                fill
                src={src}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={alt}
                priority={true}
                {...props}
            />
        </div>
    );
}
