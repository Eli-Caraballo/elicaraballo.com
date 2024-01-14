import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, MailIcon, BriefcaseIcon, ArrowDownIcon, ToolsIcon } from '@/components/Icons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCreativeArtsAcademy from '@/images/logos/CreativeArtsAcademy.jpg'
import logoPace from '@/images/logos/Pace.jpg'
import logoCornerstone from '@/images/logos/Cornerstone.jpg'
import logoTelrite from '@/images/logos/Telrite.jpg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

function SocialLink({
	icon: Icon,
	...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
	icon: React.ComponentType<{ className?: string }>
}) {
	return (
		<Link className="group -m-1 p-1" {...props}>
			<Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
		</Link>
	)
}

function EmailMe() {
	return (
		<form className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
			<h3 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
				<MailIcon className="h-6 w-6 flex-none" />
				<span className="ml-3">Get in touch</span>
			</h3>

			<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
				REWRITE THIS TEXT Get notified when I publish something new, and unsubscribe at any time.
			</p>

			<div className="mt-6 flex">
				<input
					type="email"
					placeholder="Email address"
					aria-label="Email address"
					required
					className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
				/>

				<Button type="submit" className="ml-4 flex-none">Email</Button>
			</div>
		</form>
	)
}

interface Role {
	company: string
	title: string
	logo: ImageProps['src']
	start: string
	end: string
}

function Role({ role }: { role: Role }) {
	return (
		<li className="flex gap-4">
			<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 bg-zinc-50/50 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
				<Image src={role.logo} alt="" className="rounded-full h-7 w-7 ring-1 ring-zinc-900/5" unoptimized />
			</div>

			<dl className="flex flex-auto flex-wrap gap-x-2">
				<dt className="sr-only">Company</dt>
				<dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">{role.company}</dd>

				<dt className="sr-only">Role</dt>
				<dd className="text-xs text-zinc-500 dark:text-zinc-400">{role.title}</dd>

				<dt className="sr-only">Date</dt>
				<dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label={`${role.start} until ${role.end}`}>{`${role.start} - ${role.end}`}</dd>
			</dl>
		</li>
	)
}

function Resume() {
	const resume = [{
		company: 'Pace International',
		title: 'Full Stack Developer',
		logo: logoPace,
		start: '2020',
		end: 'Present',
	}, {
		company: 'Telrite Holdings',
		title: 'Frontend Developer',
		logo: logoTelrite,
		start: '2022',
		end: '2022',
	}, {
		company: 'Cornerstone Church',
		title: 'Music and Production Director',
		logo: logoCornerstone,
		start: '2015',
		end: '2020',
	}, {
		company: 'Creative Arts Academy',
		title: 'Guitar Instructor',
		logo: logoCreativeArtsAcademy,
		start: '2013',
		end: '2015',
	}]

	return (
		<div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
			<h3 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
				<BriefcaseIcon className="h-6 w-6 flex-none" />
				<span className="ml-3">Work</span>
			</h3>
			<ol className="mt-6 space-y-4">
				{resume.map((role, roleIndex) => (
					<Role key={roleIndex} role={role} />
				))}
			</ol>
			<Button href="#" variant="secondary" className="group mt-6 w-full">
				Download Resume
				<ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
			</Button>
		</div>
	)
}

function Photos() {
	return (
		<div className="mt-16 sm:mt-20">
			<div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
				{[image1, image2, image3, image4, image5].map((image) => (
					<div key={image.src} className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl transition-all duration-200 odd:rotate-2 even:-rotate-2 hover:odd:-rotate-2 hover:even:rotate-2 hover:scale-105">
						<Image src={image} alt="" sizes="(min-width: 640px) 18rem, 11rem" className="absolute inset-0 h-full w-full object-cover" />
					</div>
				))}
			</div>
		</div>
	)
}

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
			<path
				d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
				fill="currentColor"
			/>
		</svg>
	)
}

function Projects() {
	const projects = [
		{
			name: 'Planetaria',
			description:
				'Creating technology to empower civilians to explore space on their own terms.',
			link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
			logo: logoPlanetaria,
		},
		{
			name: 'Animaginary',
			description:
				'High performance web animation library, hand-written in optimized WASM.',
			link: { href: '#', label: 'github.com' },
			logo: logoAnimaginary,
		},
		{
			name: 'HelioStream',
			description:
				'Real-time video streaming library, optimized for interstellar transmission.',
			link: { href: '#', label: 'github.com' },
			logo: logoHelioStream,
		},
		{
			name: 'cosmOS',
			description:
				'The operating system that powers our Planetaria space shuttles.',
			link: { href: '#', label: 'github.com' },
			logo: logoCosmos,
		},
		{
			name: 'OpenShuttle',
			description:
				'The schematics for the first rocket I designed that successfully made it to orbit.',
			link: { href: '#', label: 'github.com' },
			logo: logoOpenShuttle,
		},
	]

	return (
		<>
			<h3 className="flex gap-x-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
				<ToolsIcon className="h-6 w-6 flex-none" />
				<span>Projects</span>
			</h3>
			<ul role="list" className="">
				{projects.map((project) => (
					<Card as="li" key={project.name}>
						<div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
							<Image
								src={project.logo}
								alt=""
								className="h-8 w-8"
								unoptimized
							/>
						</div>
						<h3 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
							<Card.Link href={project.link.href}>{project.name}</Card.Link>
						</h3>
						<Card.Description>{project.description}</Card.Description>
						<p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
							<LinkIcon className="h-6 w-6 flex-none" />
							<span className="ml-2">{project.link.label}</span>
						</p>
					</Card>
				))}
			</ul>
		</>
	)
}

export default async function Home() {
	return (
		<>
			<Container className="mt-8 md:mt-12">
				<div className="max-w-2xl">
					<h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Eliezer Caraballo Jr.</h1>
					<h2 className="text-lg font-light tracking-tight italic text-zinc-600 dark:text-zinc-400">- Software Developer, Musician, and something else</h2>

					<p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
						REWRITE THIS TEXT I'm Eliezer, but I just go by Eli. a software designer and entrepreneur based just outside of Atlanta Georgia. sjdfiojasdijfiasdof asjidfjasio jfias dfjias dfjasi fjasiodjfioajdfoas jfiojsdf asjdfjiosdfaldjfia djsia fjiodf jlasjfioasdjf jas.
					</p>

					<div className="mt-6 flex gap-6">
						<SocialLink href="https://github.com" aria-label="Follow on GitHub" icon={GitHubIcon} />
						<SocialLink href="https://linkedin.com" aria-label="Follow on LinkedIn" icon={LinkedInIcon} />
					</div>
				</div>
			</Container>

			<Photos />

			<Container className="mt-24 md:mt-28">
				<div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
					<div className="flex flex-col gap-16">
						<Projects />
					</div>

					<div className="space-y-10 lg:pl-16 xl:pl-24">
						<EmailMe />
						<Resume />
					</div>
				</div>
			</Container>
		</>
	)
}
