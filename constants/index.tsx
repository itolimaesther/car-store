// NAVIGATION
export const NAV_LINKS = [
	{ href: "/about-us", key: "about-us", label: "About Us" },
	{
		label: "Features",
		categories: [
			{
				href: "/e-commerce-website",
				key: "e-commerce-website",
				icon: "/next.svg",
				label: "E-commerce Website",
			},
			{
				href: "/marketing",
				key: "marketing",
				icon: "/next.svg",
				label: "Marketing",
			},
			{
				href: "/invoice-and-receipt",
				key: "invoice-and-receipt",
				icon: "/next.svg",
				label: "Invoice and Receipt",
			},
			{
				href: "/inventory-management",
				key: "inventory-management",
				icon: "/next.svg",
				label: "Inventory Management",
			},
			{
				href: "/customer-management",
				key: "customer-management",
				icon: "/next.svg",
				label: "Customer Management",
			},
			{
				href: "/business-analytics",
				key: "business-analytics",
				icon: "/next.svg",
				label: "Business Analytics",
			},
		],
	},
	{
		label: "Categories",
		categories: [
			{ href: "/fashion", key: "fashion", label: "Fashion" },
			{
				href: "/beauty-and-wellness",
				key: "beauty-and-wellness",
				label: "Beauty and Wellness",
			},
			{ href: "/pharmacy", key: "pharmacy", label: "Pharmacy" },
		],
	},
	{ href: "/pricing", key: "pricing ", label: "Pricing " },
];

// CAMP SECTION
export const PEOPLE_URL = [
	"/person-1.png",
	"/person-2.png",
	"/person-3.png",
	"/person-4.png",
];

// FEATURES SECTION
export const FEATURES = [
	{
		title: "Real maps can be offline",
		icon: "/map.svg",
		variant: "green",
		description:
			"We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
	},
	{
		title: "Set an adventure schedule",
		icon: "/calendar.svg",
		variant: "green",
		description:
			"Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
	},
	{
		title: "Technology using augment reality",
		icon: "/tech.svg",
		variant: "green",
		description:
			"Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
	},
	{
		title: "Many new locations every month",
		icon: "/location.svg",
		variant: "orange",
		description:
			"Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
	},
];

// FOOTER SECTION
export const FOOTER_LINKS = [
	{
		title: "Company",
		links: ["About Us", "Pricing", "Categories"],
	},
	{
		title: "Helps",
		links: ["Contact", "Faqs"],
	},

	{
		title: "Legal",
		links: ["Terms & Condition", "Privacy"],
	},
];

// export const FOOTER_CONTACT_INFO = {

//   links: [
//     { label: 'Admin Officer', value: '123-456-7890' },
//     { label: 'Email Officer', value: 'hilink@akinthil.com' },
//   ],
// };

// export const SOCIALS = {
//   title: 'Social',
//   links: [
//     '/facebook.svg',
//     '/instagram.svg',
//     '/twitter.svg',
//     '/youtube.svg',
//     '/wordpress.svg',
//   ],
// };
