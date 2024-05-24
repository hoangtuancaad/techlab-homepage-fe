"use client";

import { isEmpty } from "@/utils";
import React from "react";

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
        <div className="py-4">
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
    );
}
