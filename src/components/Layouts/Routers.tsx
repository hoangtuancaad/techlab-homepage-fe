"use client";

import React from "react";
import { PAGE } from "@/config/page";
import { InboxIcon } from "@heroicons/react/24/outline";

export default function Routers() {
    return {
        pageRouters: [
            {
                url: PAGE.page1,
                label: "Page 1",
                icon: <InboxIcon className="w-6" />,
            },
            {
                url: PAGE.page2,
                label: "Page 2",
                icon: <InboxIcon className="w-6" />,
            },
            {
                url: PAGE.page3,
                label: "Page 3",
                icon: <InboxIcon className="w-6" />,
            },
        ],
    };
}
