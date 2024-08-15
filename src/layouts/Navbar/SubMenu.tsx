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
                "absolute top-full right-[-1rem] min-w-44 bg-white shadow-lg animate-zoomIn",
            )}
        >
            {item?.children?.map(child => (
                <li key={child.url} className="border-b">
                    <Link href={child.url} className="block p-2 text-black hover:bg-gray-50">
                        {child.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
