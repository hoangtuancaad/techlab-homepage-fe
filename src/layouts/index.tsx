"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ProfileProps } from "@/types/profileProps";

type LayoutProps = {
    session: ProfileProps;
    children: React.ReactNode;
};

export default function Layouts(props: LayoutProps) {
    return (
        <main>
            <Header />

            <section>{props.children}</section>

            <Footer />
        </main>
    );
}
