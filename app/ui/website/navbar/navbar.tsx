"use client";

import { Fragment, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../../../../components/CustomButton";
import { Menu, Transition, Dialog } from "@headlessui/react";
import Dropdown from "../../../../components/Dropdown";
import CustomOutlineButton from "../../../../components/CustomOutlineButton";

function classNames(...classes: any[]) {
	return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<nav className="flexBetween max-container padding-container relative z-30 py-5">
			<Link href="/">
				<Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
			</Link>

			<ul className="nav_links">
				{NAV_LINKS.map((link) => (
					<div>
						{link.categories ? (
							<Menu as="div" className="relative inline-block text-left">
								<Menu.Button className="inline-flex justify-center w-full text-sm font-medium text-gray-700 focus:outline-none border-0">
									{link.label}
									<ChevronDownIcon
										className="ml-2 -mr-1 h-5 w-5 text-gray"
										aria-hidden="true"
									/>
								</Menu.Button>

								<Transition
									as={Fragment}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									{link.hasOwnProperty("categories") ? (
										<Menu.Items
											as="section"
											className="custom_block px-6 absolute left-0 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
										>
											<div className="py-1 grid grid-rows-3 grid-flow-col">
												{link.categories.map((category) => (
													<Dropdown category={category} />
												))}
											</div>
										</Menu.Items>
									) : (
										<Menu.Items as="section" className="custom_block">
											<div className="py-1 grid grid-cols-2 grid-rows-3 grid-flow-col">
												{link.categories.map((category) => (
													<Dropdown category={category} />
												))}
											</div>
										</Menu.Items>
									)}
								</Transition>
							</Menu>
						) : (
							<Link
								href={link.href}
								key={link.key}
								className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
							>
								{link.label}
							</Link>
						)}
					</div>
				))}
				<div className="lg:justify-center flex gap-x-4">
					<CustomOutlineButton
						type="button"
						title="Sign in"
						variant="btn_blue_outline"
					/>
					<CustomButton
						type="button"
						title="Create Account"
						variant="btn_blue"
					/>
				</div>
			</ul>

			{/* Mobile Menu Start*/}
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img
								className="h-8 w-auto"
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
								alt=""
							/>
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>

					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{NAV_LINKS.map((link) => (
									<div>
										{link.categories ? (
											<Menu
												as="div"
												className="relative inline-block text-left"
											>
												<Menu.Button className="inline-flex py-2 justify-center text-gray-700 focus:outline-none border-0 text-base font-semibold leading-7 items-center">
													{link.label}
													<ChevronDownIcon
														className="ml-2 -mr-1 h-5 w-5 text-gray"
														aria-hidden="true"
													/>
												</Menu.Button>

												<Transition
													as={Fragment}
													enter="transition ease-out duration-100"
													enterFrom="transform opacity-0 scale-95"
													enterTo="transform opacity-100 scale-100"
													leave="transition ease-in duration-75"
													leaveFrom="transform opacity-100 scale-100"
													leaveTo="transform opacity-0 scale-95"
												>
													{link.hasOwnProperty("categories") ? (
														<Menu.Items
															as="section"
															className="w-72 px-6 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
														>
															<div className="py-1 ">
																{link.categories.map((category) => (
																	<Dropdown category={category} />
																))}
															</div>
														</Menu.Items>
													) : (
														<Menu.Items as="section" className="">
															<div className="py-1">
																{link.categories.map((category) => (
																	<Dropdown category={category} />
																))}
															</div>
														</Menu.Items>
													)}
												</Transition>
											</Menu>
										) : (
											<Link
												href={`${link.href}`}
												key={link.key}
												className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-5"
											>
												{link.label}
											</Link>
										)}
									</div>
								))}
							</div>
							<div className="py-6">
								<CustomOutlineButton
									type="button"
									title="Signin"
									variant="btn_blue_outline block w-full mb-5"
								/>
								<CustomButton
									type="button"
									title="Create Account"
									variant="btn_blue block w-full"
								/>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
			{/* Mobile Menu Ends */}

			<div className="flex lg:hidden">
				<button
					type="button"
					className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					onClick={() => setMobileMenuOpen(true)}
				>
					<span className="sr-only">Open main menu</span>
					<Bars3Icon aria-hidden="true" width={32} height={32} />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
