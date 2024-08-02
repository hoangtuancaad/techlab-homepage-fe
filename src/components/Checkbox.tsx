"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";

type CheckboxProps = {
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    children?: React.ReactNode;
};

export default function Checkbox({ children, checked = false, onChange }: CheckboxProps) {
    //** States */
    const [selected, setSelected] = useState(checked);

    //** Styles */
    const checkBoxClassName = clsx(
        "relative w-5 h-5 inline-flex items-center justify-center flex-shrink-0 mr-2 text-white border border-gray-300 rounded-md transition-transform overflow-hidden",
        selected && "bg-primary border-primary",
    );

    //** Functions */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(event.target.checked);

        typeof onChange === "function" && onChange(event);
    };

    //** Effects */
    useEffect(() => {
        setSelected(checked);
    }, [checked]);

    return (
        <label className="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="form-checkbox text-indigo-600 hidden"
                checked={selected}
                onChange={event => handleChange(event)}
            />
            <p className={checkBoxClassName}>
                <svg
                    aria-hidden="true"
                    role="presentation"
                    viewBox="0 0 17 18"
                    className={clsx(
                        "w-4 h-3 z-10 transition-opacity",
                        selected ? "opacity-1" : "opacity-0",
                    )}
                >
                    <polyline
                        fill="none"
                        points="1 9 7 14 15 4"
                        stroke="currentColor"
                        strokeDasharray="22"
                        strokeDashoffset="44"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        style={{ transition: "stroke-dashoffset 250ms linear 0.2s" }}
                    ></polyline>
                </svg>
            </p>
            {children && children}
        </label>
    );
}
