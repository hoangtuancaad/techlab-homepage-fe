import React from "react";
import type { Metadata } from "next";
import Login from "@/layouts/Login";
import Layouts from "@/layouts";
import AuthProvider from "@/components/AuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import { ProfileProps } from "@/types/profileProps";
import { Roboto } from "next/font/google";
import "./globals.scss";

const roboto = Roboto({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session: ProfileProps | null = (await getServerSession(authOptions)) as ProfileProps;

    //** Functions */
    const renderRootLayout = () => {
        if (session) {
            return <Layouts session={session}>{children}</Layouts>;
        }

        return <Login />;
    };

    return (
        <html lang="en">
            <body className={roboto.className}>
                <AuthProvider>{renderRootLayout()}</AuthProvider>
            </body>
        </html>
    );
}
