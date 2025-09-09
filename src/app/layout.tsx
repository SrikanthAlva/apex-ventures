import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

export const metadata: Metadata = {
	metadataBase: new URL('https://apex-ventures.com'),
	title: 'Apex Ventures - Strategic Execution Partner for the GCC',
	description:
		"De-risk and accelerate your expansion journey into the Gulf Cooperation Council. From market entry to strategic exit, we're your dedicated execution partner for the entire growth journey.",
	keywords:
		'GCC market entry, Saudi Arabia business setup, MENA venture capital, Middle East technology partnerships, Vision 2030 opportunities',
	icons: {
		icon: '/logo.jpeg',
		shortcut: '/logo.jpeg',
		apple: '/logo.jpeg',
	},
	openGraph: {
		title: 'Apex Ventures - Strategic Execution Partner for the GCC',
		description:
			"De-risk and accelerate your expansion journey into the Gulf Cooperation Council. From market entry to strategic exit, we're your dedicated execution partner for the entire growth journey.",
		images: [
			{
				url: '/logo_with_name.png',
				width: 1200,
				height: 630,
				alt: 'Apex Ventures Logo',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Apex Ventures - Strategic Execution Partner for the GCC',
		description:
			"De-risk and accelerate your expansion journey into the Gulf Cooperation Council. From market entry to strategic exit, we're your dedicated execution partner for the entire growth journey.",
		images: ['/logo_with_name.png'],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} font-sans antialiased`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
