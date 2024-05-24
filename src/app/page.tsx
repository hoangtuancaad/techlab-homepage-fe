import React from "react";
// import { redirect } from "next/navigation";
// import { getServerSession } from "next-auth";
// import { ROUTE } from "@/config/routes";
// import Header from "@/components/Layouts/Header";
import Home from "@/components/Layouts/Home";

export default async function HomePage() {
    // const session = await getServerSession();

    // if (!session) {
    //     redirect(ROUTE.LOGIN);
    // }

    return <Home />;
}
