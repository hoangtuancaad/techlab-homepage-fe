"use client";

import React from "react";
import Link from "next/link";
import Profile from "./Profile";
import Search from "@/components/Search";

export default function Header() {
    return (
        <header className="header">
            <Link href="/">Dashboard</Link>
            <div className="w-[30rem]">
                <Search />
            </div>
            <Profile />
        </header>
    );
}
