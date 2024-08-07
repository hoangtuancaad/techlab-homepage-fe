"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { DEFAULT_PAGE } from "@/config/page";
import { STATUS_CODE } from "@/constants";

export default function Login() {
    const router = useRouter();
    const searchParams = useSearchParams();

    //** States */
    const [errorLogin, setErrorLogin] = useState<string>("");

    //** Functions */
    const onSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const username = data.get("username");
        const password = data.get("password");

        await signIn("credentials", {
            username,
            password,
            redirect: false,
            callbackUrl: searchParams.get("callbackUrl") || `/${DEFAULT_PAGE}`,
        }).then(res => {
            if (res?.status !== STATUS_CODE.OK) {
                return setErrorLogin("Username or password is incorrect");
            }

            setErrorLogin("");
            router.push(searchParams.get("callbackUrl") || DEFAULT_PAGE);
            router.refresh();
        });
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col gap-8">
                <h2 className="font-bold text-2xl text-center">Sign in to your account</h2>

                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={onSubmitLogin}>
                        <Input className="w-full" name="username" label="Username" />
                        <Input
                            className="w-full"
                            name="password"
                            type="password"
                            label="Password"
                        />
                        {errorLogin && (
                            <p className="mt-3 font-semibold text-sm text-right text-error">
                                {errorLogin}
                            </p>
                        )}
                        <Button className="w-full" type="submit">
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
