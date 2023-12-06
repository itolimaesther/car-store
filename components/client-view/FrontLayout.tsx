"use client";

import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function FrontLayout({ children }: any) {
	return (
		<>
			<Navbar />
			<main className="relative overflow-hidden">{children}</main>
			<Footer />
		</>
	);
}

export default FrontLayout;
