"use client";

import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { ProfileProps } from "@/types/profileProps";
import { useAppStore } from "@/stores/useAppStore";
import clsx from "clsx";

type LayoutProps = {
    session: ProfileProps;
    children: React.ReactNode;
};

export default function Layouts(props: LayoutProps) {
    //** Stores */
    const { isCollapse } = useAppStore();

    return (
        <main className="h-screen">
            <div className="flex">
                <div
                    className={clsx(
                        "h-screen transition-all",
                        isCollapse ? "w-[6rem]" : "w-[15rem]",
                    )}
                >
                    <Navbar />
                </div>
                <div
                    className={`${isCollapse ? "w-[calc(100%-6rem)]" : "w-[calc(100%-15rem)]"} px-5`}
                >
                    <Header />
                    <section className="py-4">{props.children}</section>
                </div>
            </div>
        </main>
    );
}
