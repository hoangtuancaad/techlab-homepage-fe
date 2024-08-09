"use client";

import React from "react";
import clsx from "clsx";
import { Caveat } from "next/font/google";
import { isEmpty } from "@/utils";

const caveat = Caveat({
    weight: "400",
    subsets: ["latin"],
});

export default function Home() {
    const currentProjects = [
        {
            id: "1",
            name: "Project 1",
            createdAt: "2021-01-01",
            description: "This is the first project.",
            status: "New",
        },
        {
            id: 2,
            name: "Project 2",
            createdAt: "2021-02-01",
            description: "This is the second project.",
            status: "In progress",
        },
        {
            id: 3,
            name: "Project 3",
            createdAt: "2021-03-01",
            description: "This is the third project.",
            status: "In progress",
        },
        {
            id: 4,
            name: "Project 4",
            createdAt: "2021-04-01",
            description: "This is the fourth project.",
            status: "In progress",
        },
        {
            id: 5,
            name: "Project 5",
            createdAt: "2021-05-01",
            description: "This is the fifth project.",
            status: "In progress",
        },
    ];

    return (
        <>
            <div className={clsx(caveat.className, "flex flex-col gap-6 py-3 sm:py-5 text-center")}>
                <h1
                    className={clsx(
                        "w-fit mx-auto font-bold text-8xl",
                        "bg-[url('/images/yellow_highlight.svg')] bg-[center_right] bg-no-repeat bg-contain",
                    )}
                >
                    All your business on one platform.
                </h1>
                <h2
                    className={clsx(
                        "w-fit mx-auto pb-5 font-bold text-6xl",
                        "bg-[url('/images/blue_highlight.svg')] bg-[right_5%_bottom] bg-no-repeat bg-contain",
                    )}
                >
                    Simple, efficient, yet affordable!
                </h2>
            </div>

            <div className="py-4 md:py-8">
                <h3 className="title">Current projects</h3>

                {!isEmpty(currentProjects) && (
                    <div className="flex justify-between items-center flex-wrap gap-4">
                        {currentProjects.map(project => (
                            <div key={project.id} className="card">
                                <h4 className="font-bold">{project.name}</h4>
                                <p className="text-gray-300 sm:text-base text-sm">
                                    {project.description}
                                </p>
                                <p className="w-fit px-2 py-1 bg-gray-200 text-xs rounded-md">
                                    {project.createdAt}
                                </p>
                                <p className="font-bold text-sm">{project.status}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
