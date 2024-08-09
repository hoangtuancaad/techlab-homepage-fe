"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from "@/components/Dropdown";
import { signOut } from "next-auth/react";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/16/solid";

export default function Profile() {
    return (
        <div className="flex justify-between items-center gap-6">
            <div>
                <Dropdown>
                    <DropdownButton>
                        <div className="flex gap-2">
                            <Image
                                className=""
                                src="/images/en.svg"
                                width={24}
                                height={24}
                                alt="logo"
                            />
                            English
                        </div>
                    </DropdownButton>

                    <DropdownMenu>
                        <DropdownItem>
                            <Link href="#" className="flex items-center gap-2">
                                <div className="flex gap-2">
                                    <Image
                                        className=""
                                        src="/images/en.svg"
                                        width={24}
                                        height={24}
                                        alt="logo"
                                    />
                                    English
                                </div>
                            </Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link href="#" className="flex items-center gap-2">
                                <div className="flex gap-2">
                                    <Image
                                        className=""
                                        src="/images/jp.svg"
                                        width={24}
                                        height={24}
                                        alt="logo"
                                    />
                                    Japan
                                </div>
                            </Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div>
                <Dropdown>
                    <DropdownButton>
                        <Image
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                            className="rounded-full"
                            width={40}
                            height={40}
                            alt="profile"
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
