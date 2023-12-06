"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from "../../../components/CustomButton";
import Link from "next/link";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const handleLogin = async (e: any) => {
		e.preventDefault();

		// Perform authentication logic here
		// For simplicity, assume authentication is successful
		if (email === "yourusername@gmail.com" && password === "yourpassword") {
			// Redirect to dashboard on successful login
			router.push("/dashboard");
		} else {
			// Handle incorrect credentials
			alert("Invalid credentials. Please try again.");
		}
	};
	return (
		<div className="flex items-center min-h-screen ">
			<div className="flex-1 mx-auto bg-white rounded-lg shadow-xl">
				<div className="flex min-h-screen flex-col md:flex-row">
					<div className="h-full md:h-auto md:w-1/2">
						<img
							className="object-cover w-full h-full"
							src="https://source.unsplash.com/user/erondu/1600x900"
							alt="img"
						/>
					</div>
					<div className="right_section">
						<div className="w-full">
							<div className="flex flex-row justify-between sm:mb-28 mb-20">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-20 h-20 text-blue-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M12 14l9-5-9-5-9 5 9 5z" />
									<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
									/>
								</svg>
								<div className="flex items-center">
									<p className="mr-2">Don't have an account? </p>
									<Button
										type="button"
										title="Create Account"
										variant="btn_green"
									/>
								</div>
							</div>
							<h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
								Pickup where you left off
							</h1>
							<div>
								<label className="block mt-4 text-sm">Email Address</label>
								<input
									type="email"
									className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
									placeholder=""
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div>
								<label className="block mt-4 text-sm">Password</label>
								<input
									className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
									placeholder=""
									type="password"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>

							<p className="mt-1 float-right">
								<Link
									className="text-sm text-green-600 hover:underline"
									href="/forgot-password"
								>
									Forgot password?
								</Link>
							</p>

							<button
								onClick={handleLogin}
								className="block w-full px-4 py-2 mt-16 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
							>
								Login
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
