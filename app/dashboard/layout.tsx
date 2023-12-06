import React, { ReactNode } from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";

type DashboardLayoutProps = {
	children: ReactNode;
};

function Layout({ children }: DashboardLayoutProps) {
	return (
		<div>
			<Navbar />
			<section className="p-2">
				<div className="p-2 sm:ml-64 mt-14">{children}</div>
			</section>
			<Sidebar />
		</div>
	);
}

export default Layout;
