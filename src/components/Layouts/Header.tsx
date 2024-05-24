"use client";

import React from "react";
import Link from "next/link";
import Search from "../Search";
import Profile from "./Profile";

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
