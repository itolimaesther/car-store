"use client";
import React from "react";
import { usePathname } from "next/navigation";
import FrontLayout from "./FrontLayout";
import { NextRouter } from "next/router";

function CommonLayout({ children }: any) {
	const pathname = usePathname();
	return (
		<>
			{pathname !== null && !pathname.includes("/auth") ? (
				<FrontLayout children={children} />
			) : (
				<>{children}</>
			)}
		</>
	);
}

export default CommonLayout;
