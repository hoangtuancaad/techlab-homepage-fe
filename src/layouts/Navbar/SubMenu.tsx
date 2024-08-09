"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";

export default function SubMenu({
    item,
}: {
    item: {
        url: string;
        label: string;
        children?: { url: string; label: string }[];
    };
}) {
    return (
        <ul
            className={clsx(
                "absolute top-full right-[-1rem] min-w-40 bg-white shadow-lg animate-zoomIn",
            )}
        >
            {item?.children?.map(child => (
                <li key={child.url} className="p-2 border-b">
                    <Link href={child.url} className="block">
                        {child.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
