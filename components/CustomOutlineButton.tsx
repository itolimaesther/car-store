import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
	type: "button" | "submit";
	title: string;
	variant: string;
	full?: boolean;
};

const CustomOutlineButton = ({ type, title, variant, full }: ButtonProps) => {
	return (
		<Link
			className={`flexCenter gap-3 rounded-lg border ${variant} ${
				full && "w-full"
			}`}
			type={type}
			href="/auth/login"
		>
			<label className="bold-16 whitespace-nowrap cursor-pointer">
				{title}
			</label>
		</Link>
	);
};

export default CustomOutlineButton;
