import React from "react";
// import { redirect } from "next/navigation";
// import { getServerSession } from "next-auth";
// import { ROUTE } from "@/config/routes";
// import Header from "@/layouts/Header";
import Home from "@/layouts/Home";

export default async function HomePage() {
    // const session = await getServerSession();

    // if (!session) {
    //     redirect(ROUTE.LOGIN);
    // }

    return <Home />;
}
