import type { Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
	title: 'Eliezer Caraballo Jr. - Software Developer',
	description: 'I\'m Eliezer, but I just go by Eli, an expirienced full-stack developer based outside of Atlanta Georgia. I served as a worship pastor and guitar instructor for many years before catching a passion for programming. Let\'s chat tech, tunes, and anything in between!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="antialiased" suppressHydrationWarning>
			<body className="h-full bg-zinc-50 dark:bg-black">
				<Providers>
					<Layout>{children}</Layout>
				</Providers>
			</body>
		</html>
	)
}
