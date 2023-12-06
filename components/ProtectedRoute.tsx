"use client";

import React, { useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

type ProtectedRouteProps = {
	children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
	const router = useRouter();

	useEffect(() => {
		// Your authentication logic to check if user is logged in
		if (typeof window !== "undefined") {
			const isLoggedIn = true; // Replace this with your authentication logic

			if (!isLoggedIn) {
				router.push("/auth/login");
			}
		}
	}, [router]);

	return <>{children}</>;
}

export default ProtectedRoute;
