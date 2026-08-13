import React from "react";
import { cn } from "../lib/util";

export const Container = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return <div className={cn("max-w-140 mx-auto", className)}>{children}</div>;
};
