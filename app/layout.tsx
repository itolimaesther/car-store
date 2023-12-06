import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Store",
	description: "Vendu",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="relative bg-gray-100">{children}</body>
		</html>
	);
}
