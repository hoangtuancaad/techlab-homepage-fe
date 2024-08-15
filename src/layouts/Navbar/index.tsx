"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Routers from "../Routers";
import SubMenu from "./SubMenu";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
    const pathname = usePathname();

    //** States */
    const [menu, setMenu] = useState<{
        id: string;
        open: boolean;
    }>({
        id: "",
        open: false,
    });

    //** Variables */
    const { pageRouters } = Routers();

    return (
        <nav className="flex items-center justify-between">
            <ul className="flex items-center gap-4">
                {pageRouters.map(item => (
                    <li
                        key={item.url}
                        className={clsx(
                            "relative text-gray-700",
                            pathname === item.url && "text-primary",
                        )}
                        onMouseEnter={() =>
                            setMenu({
                                id: item.url,
                                open: true,
                            })
                        }
                        onMouseLeave={() =>
                            setMenu({
                                id: "",
                                open: false,
                            })
                        }
                    >
                        <Link href={item.url} className="flex items-center gap-1">
                            {item.label}
                            {item.children && (
                                <ChevronDownIcon
                                    className={clsx(
                                        "w-2.5",
                                        menu.id === item.url && "transform rotate-180",
                                    )}
                                />
                            )}
                        </Link>

                        {item.children && menu.id === item.url && menu.open && (
                            <SubMenu item={item} />
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
