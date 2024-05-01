"use client";

import React from "react";
import { ProfileProps } from "@/types/profileProps";

type LayoutProps = {
    session: ProfileProps;
    children: React.ReactNode;
};

export default function Layouts(props: LayoutProps) {
    return (
        <main className="h-screen">
            <section className="container py-4">{props.children}</section>
        </main>
    );
}
