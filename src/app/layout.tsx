import React from "react";
import { Metadata } from "next";
import ReduxProvider from "@/app/providers/redux-profile";

const metadata: Metadata = {
	title: "JustNotes"
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang={"en"}>
			<body>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	)
}