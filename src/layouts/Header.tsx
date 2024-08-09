"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Profile from "./Profile";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header>
            <div className="container flex items-center justify-between py-2">
                <Link href="/">
                    <Image src="/next.svg" alt="Logo" width={100} height={100} />
                </Link>

                <Navbar />

                <Profile />
            </div>
        </header>
    );
}
