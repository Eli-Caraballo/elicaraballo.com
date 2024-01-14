'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@/components/Icons'

import { Container } from '@/components/Container'
import avatarImage from '@/images/avatar.jpg'

function ThemeToggle() {
	let { resolvedTheme, setTheme } = useTheme()
	let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'

	return (
		<button
			type="button"
			aria-label="Toggle theme"
			className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
			onClick={() => setTheme(otherTheme)}
		>
			<SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
			<MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
		</button>
	)
}

function Avatar() {
	return (
		<div className="h-12 w-12 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 md:h-16 md:w-16 dark:bg-zinc-800/90 dark:ring-white/10">
			<Link href="/" aria-label="Home" className="pointer-events-auto">
				<Image src={avatarImage} alt="Avatar Image" className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800" />
			</Link>
		</div>
	)
}

export function Header() {
	return (
		<header className="mt-6 md:mt-10">
			<Container>
				<div className="flex justify-between items-center">
					<Avatar />
					<ThemeToggle />
				</div>
			</Container>
		</header>
	)
}
