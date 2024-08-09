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
                children: [
                    {
                        url: "page1.1",
                        label: "Page 1.1",
                    },
                    {
                        url: "page1.2",
                        label: "Page 1.2",
                    },
                    {
                        url: "page1.3",
                        label: "Page 1.3",
                    },
                ],
            },
            {
                url: PAGE.page2,
                label: "Page 2",
                icon: <InboxIcon className="w-6" />,
                children: [
                    {
                        url: "page2.1",
                        label: "Page 2.1",
                    },
                    {
                        url: "page2.2",
                        label: "Page 2.2",
                    },
                    {
                        url: "page2.3",
                        label: "Page 2.3",
                    },
                ],
            },
            {
                url: PAGE.page3,
                label: "Page 3",
                icon: <InboxIcon className="w-6" />,
            },
        ],
    };
}
