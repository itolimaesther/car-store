"use client";

import { Menu, Transition } from "@headlessui/react";
import { SubProps } from "@/types";
import Image from "next/image";

function classNames(...classes: any[]) {
	return classes.filter(Boolean).join(" ");
}

interface SubMenuProps {
	category: SubProps;
}

function Dropdown({ category }: SubMenuProps) {
	return (
		<Menu.Item key={category.key}>
			{({ active }) => (
				<a
					href={category.href}
					className={classNames(
						active ? "bg-gray-100 text-gray-900" : "text-gray-700",
						" px-4 py-2 text-sm flex gap-2 items-center"
					)}
				>
					{category.hasOwnProperty("icon") ? (
						<Image
							src={`${category.icon}`}
							alt={category.label}
							width={24}
							height={24}
						/>
					) : null}
					{category.label}
				</a>
			)}
		</Menu.Item>
	);
}

export default Dropdown;
