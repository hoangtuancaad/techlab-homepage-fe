"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Routers from "./Routers";
import Button from "../Button";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useAppStore } from "@/stores/useAppStore";

export default function Navbar() {
    const { pageRouters } = Routers();

    //** Stores */
    const { isCollapse, toggleNavbar } = useAppStore();

    return (
        <nav className="h-full p-3 shadow-xl">
            <Button
                className="w-[4rem] bg-transparent text-current mb-5 p-0"
                onClick={() => {
                    toggleNavbar();
                }}
            >
                <Bars3Icon className="w-8" />
            </Button>

            <ul>
                {pageRouters.map(router => (
                    <li key={router.url}>
                        <Link
                            href="#"
                            className="w-[8rem] flex items-center gap-2 py-3 whitespace-nowrap"
                        >
                            <p className="w-[4rem] flex justify-center text-gray-500">
                                {router.icon}
                            </p>
                            <span
                                className={clsx(isCollapse ? "w-0 opacity-0" : "w-fit opacity-1")}
                            >
                                {router.label}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
