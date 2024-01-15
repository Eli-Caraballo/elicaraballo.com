'use client'

import Image from 'next/image'

import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@/components/Icons'

import { Container } from '@/components/Container'
import { usePathname } from 'next/navigation'
import avatarImage from '@/images/avatar.jpg'
import clsx from 'clsx'

function ThemeToggle() {
	let { resolvedTheme, setTheme } = useTheme()
	let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'

	return (
		<button
			type="button"
			aria-label="Toggle theme"
			className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/10 ring-1 ring-zinc-900/5 backdrop-blur transition hover:bg-zinc-50/10 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
			onClick={() => setTheme(otherTheme)}
		>
			<SunIcon className="h-6 w-6 fill-amber-50 stroke-amber-500 transition group-hover:fill-yellow-100 group-hover:stroke-amber-600 dark:hidden" />
			<MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 group-hover:stroke-zinc-400 transition dark:block" />
		</button>
	)
}

function Avatar({ isHomePage }: { isHomePage?: boolean }) {
	return (
		<div className={clsx('h-12 w-12 rounded-full bg-amber-500/30 p-0.5 shadow-lg shadow-zinc-800/10 ring-1 ring-zinc-900/5 dark:bg-zinc-800/90 dark:ring-white/10', isHomePage ? 'sm:hidden' : '')}>
			<Image src={avatarImage} alt="Avatar Image" className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800" />
		</div>
	)
}

export function Header() {
	let isHomePage = usePathname() === '/'

	return (
		<header className="mt-6 md:mt-10">
			<Container>
				<div className={clsx('flex justify-between items-center', isHomePage ? 'sm:justify-end' : '')}>
					<Avatar isHomePage={isHomePage} />
					<ThemeToggle />
				</div>
			</Container>
		</header>
	)
}
