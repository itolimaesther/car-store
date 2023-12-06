"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { initFlowbite } from "flowbite";

function Sidebar() {
	const [activeLink, setActiveLink] = useState("");

	const pathname = usePathname();
	useEffect(() => {
		setActiveLink(pathname);
		initFlowbite();
	}, [pathname]);

	return (
		<aside
			id="logo-sidebar"
			className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
			aria-label="Sidebar"
		>
			<div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
				<ul className="space-y-2 font-medium">
					<li
						className={`py-1 ${
							activeLink === "/dashboard/users"
								? "bg-blue-700 text-white"
								: "bg-white text-gray-700"
						}`}
					>
						<Link
							href="/dashboard/users"
							className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700"
						>
							<svg
								aria-hidden="true"
								className={`w-6 h-6 transition duration-75 ${
									activeLink === "/dashboard/users"
										? "text-white"
										: "text-gray-500"
								} dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
									clipRule="evenodd"
								></path>
							</svg>
							<span
								className={`py-1 ${
									activeLink === "/dashboard/users" ? "text-white ml-3" : "ml-3"
								}`}
							>
								Users
							</span>
						</Link>
					</li>
					<li>
						<button
							type="button"
							className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
							aria-controls="dropdown-pages"
							data-collapse-toggle="dropdown-pages"
						>
							<svg
								aria-hidden="true"
								className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
									clip-rule="evenodd"
								></path>
							</svg>
							<span className="flex-1 ml-3 text-left whitespace-nowrap">
								Pages
							</span>
							<svg
								aria-hidden="true"
								className="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</button>
						<ul id="dropdown-pages" className="hidden py-2 space-y-2">
							<li>
								<a
									href="#"
									className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
								>
									Settings
								</a>
							</li>
							<li>
								<a
									href="#"
									className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
								>
									Kanban
								</a>
							</li>
							<li>
								<a
									href="#"
									className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
								>
									Calendar
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</aside>
	);
}

export default Sidebar;
