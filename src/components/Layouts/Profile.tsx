"use client";

import { BellIcon } from "@heroicons/react/24/outline";
import React from "react";
import ImageComponent from "../Image";

export default function Profile() {
    return (
        <div className="flex justify-between items-center gap-6">
            <div className="relative">
                <span className="absolute top-[-0.5rem] right-[-0.5rem] w-5 h-5 flex justify-center items-center bg-primary text-xs text-white rounded-full">
                    5
                </span>
                <BellIcon className="w-6" />
            </div>
            <div className="w-10 h-10">
                <ImageComponent
                    className="rounded-full"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
            </div>
        </div>
    );
}
