"use client";

import React from "react";
import Link from "next/link";
import ImageComponent from "@/components/Image";
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from "@/components/Dropdown";
import { signOut } from "next-auth/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/16/solid";

export default function Profile() {
    return (
        <div className="flex justify-between items-center gap-6">
            <div className="relative">
                <span className="absolute top-[-0.5rem] right-[-0.5rem] w-5 h-5 flex justify-center items-center bg-primary text-xs text-white rounded-full">
                    5
                </span>
                <BellIcon className="w-6" />
            </div>
            <div>
                <Dropdown>
                    <DropdownButton>
                        <ImageComponent
                            className="rounded-full"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        />
                    </DropdownButton>

                    <DropdownMenu>
                        <DropdownItem>
                            <Link
                                href="#"
                                className="flex items-center gap-2"
                                onClick={async () => {
                                    await signOut({ redirect: false, callbackUrl: "/" });
                                    window.location.reload();
                                }}
                            >
                                <ArrowLeftEndOnRectangleIcon className="w-4" />
                                Logout
                            </Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    );
}
