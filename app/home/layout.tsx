import React, { ReactNode } from "react";
import Footer from "../ui/website/footer/footer";
import Navbar from "../ui/website/navbar/navbar";

type LayoutProps = {
	children: ReactNode;
};

function Layout({ children }: LayoutProps) {
	return (
		<div>
			<Navbar />
			<main className="relative overflow-hidden">{children}</main>
			<Footer />
		</div>
	);
}

export default Layout;
