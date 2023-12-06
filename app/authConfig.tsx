export const authConfig = {
	providers: [],
	pages: {
		signIn: "/login",
	},
	callbacks: {
		authorized({ request }: any) {
			// const isLoggedIn = auth?.user;
			const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
			if (isOnDashboard) {
				// if (isLoggedIn) return true;
				return false;
			} else {
				return Response.redirect(new URL("/dashboard", request.nextUrl));
			}
			return true;
		},
	},
};
