import React from "react";
import Root from "@/app/root";
import { Metadata } from "next";

const metadata: Metadata = {
	title: "JustNotes"
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang={"en"}>
			<body>
				<Root>{children}</Root>
			</body>
		</html>
	)
}