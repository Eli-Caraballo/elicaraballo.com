import clsx from 'clsx'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { ArrowDownIcon, BriefcaseIcon, GitHubIcon, LinkedInIcon, LinkIcon, MailIcon, ToolsIcon } from '@/components/Icons'
import avatarImage from '@/images/avatar.jpg'
import logoCornerstone from '@/images/logos/Cornerstone.jpg'
import logoCreativeArtsAcademy from '@/images/logos/CreativeArtsAcademy.jpg'
import logoDish from '@/images/logos/DishOutdoors.svg'
import logoPace from '@/images/logos/Pace.jpg'
import logoPacePng from '@/images/logos/Pace.png'
import logoPacePngWhite from '@/images/logos/PaceWhite.png'
import logoTelrite from '@/images/logos/Telrite.jpg'
import logoTimelessEntertainment from '@/images/logos/TimelessEntertainment.png'
import logoTimelessEntertainmentWhite from '@/images/logos/TimelessEntertainmentWhite.png'
import logoTravlFi from '@/images/logos/TravlFi.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'


function SocialLink({ icon: Icon, ...props }: React.ComponentProps<typeof Link> & { icon: React.ComponentType<{ className?: string }> }) {
	return (
		<Link className="group -mx-1 p-1" target="_blank" rel="noopener noreferrer" {...props}>
			<Icon className="h-6 w-6 fill-amber-500 transition group-hover:fill-amber-600 dark:fill-zinc-300 dark:group-hover:fill-zinc-100" />
		</Link>
	)
}

function Photos() {
	return (
		<div className="mt-16 sm:mt-20">
			<div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
				{[image1, image2, image3, image4, image5].map((image, index) => (
					<div key={image.src} className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 transition-all duration-200 last:-order-1 odd:rotate-2 even:-rotate-2 hover:scale-105 hover:odd:-rotate-2 hover:even:rotate-2 sm:w-72 sm:rounded-2xl last:lg:order-none dark:bg-zinc-800">
						<Image src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
					</div>
				))}
			</div>
		</div>
	)
}

function EmailMe() {
	return (
		<div className="rounded-2xl border border-zinc-200/70 p-6 shadow shadow-zinc-800/5 dark:border-zinc-700/40">
			<h3 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
				<MailIcon className="h-6 w-6 flex-none" />
				<span className="ml-3">Get in touch</span>
			</h3>

			<p className="mt-2 text-pretty text-sm text-zinc-600 dark:text-zinc-400">
				Be sure to reach out and connect! Whether you have a question, collaboration idea, or just want to say hello, I'd love to hear from you.
			</p>

			<Button href="mailto:eli.caraballojr@gmail.com" target="_blank" rel="noopener noreferrer" className="mt-6 w-full flex-none">Shoot Me an Email</Button>
		</div>
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
		<li className="flex gap-x-4">
			<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
				<Image src={role.logo} alt="" className="h-7 w-7 rounded-full" unoptimized />
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
		<div className="rounded-2xl border border-zinc-200/70 p-6 shadow shadow-zinc-800/5 dark:border-zinc-700/40">
			<h3 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
				<BriefcaseIcon className="h-6 w-6 flex-none" />
				<span className="ml-3">Work</span>
			</h3>
			<ol className="mt-6 space-y-4">
				{resume.map((role, roleIndex) => (
					<Role key={roleIndex} role={role} />
				))}
			</ol>
			<Button href="/Eli-Caraballo-Resume.pdf" target="_blank" rel="noopener noreferrer" variant="secondary" className="group mt-6 w-full">
				Download Resume
				<ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
			</Button>
		</div>
	)
}

function Projects() {
	const projects: Array<{
		name: string
		description: string
		link: {
			href: string
			label: string
		}
		logo: ImageProps['src']
		darkLogo?: ImageProps['src']
	}> = [{
		name: 'Pace International',
		description: 'Nationwide distributor managing a wide range of products, installations, and value adds for some of the most-recognized companies in the world.',
		link: { href: 'https://www.paceintl.com/', label: 'paceintl.com' },
		logo: logoPacePng,
		darkLogo: logoPacePngWhite,
	}, {
		name: 'TravlFi',
		description: 'A subscription-based Wi-Fi service provider to keep travelers connected all throughout the United States, Canada, and Mexico.',
		link: { href: 'https://travlfi.com/', label: 'travlfi.com' },
		logo: logoTravlFi,
	}, {
		name: 'DISH Outdoors',
		description: 'Providing satellite TV for RVs, tailgating, camping, and more.',
		link: { href: 'https://dishoutdoors.com/', label: 'dishoutdoors.com' },
		logo: logoDish,
	}, {
		name: 'Timeless Entertainment Network',
		description: 'Entertainment and connectivity solutions for senior living communities.',
		link: { href: 'https://timelessentertainmentnetwork.com/', label: 'timelessentertainmentnetwork.com' },
		logo: logoTimelessEntertainment,
		darkLogo: logoTimelessEntertainmentWhite,
	}]

	return (
		<div className="lg:mt-px lg:pt-6">
			<h3 className="flex gap-x-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
				<ToolsIcon className="h-6 w-6 flex-none" />
				<span>Projects</span>
			</h3>

			<ul role="list" className="mt-12 space-y-14">
				{projects.map((project) => (
					<li key={project.name} className="group relative flex flex-col items-start">
						<Link href={project.link.href} target="_blank" rel="noopener noreferrer">
							<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />

							<div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
								<Image src={project.logo} alt="" className={clsx("h-8 w-8", project.darkLogo && 'dark:hidden')} unoptimized />
								{project.darkLogo && (<Image src={project.darkLogo} alt="" className={clsx("hidden h-8 w-8", project.darkLogo && 'dark:block')} unoptimized />)}
							</div>

							<h3 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
								<span className="relative z-10">{project.name}</span>
							</h3>

							<p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>

							<p className="relative z-10 mt-6 flex text-sm font-medium text-amber-500 transition group-hover:underline dark:text-zinc-300 dark:group-hover:text-zinc-50">
								<LinkIcon className="h-6 w-6 flex-none" />
								<span className="ml-2">{project.link.label}</span>
							</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

function Avatar() {
	return (
		<div className="hidden h-14 w-14 rounded-full bg-amber-500/30 p-0.5 shadow-lg shadow-zinc-800/10 ring-1 ring-zinc-900/5 sm:block lg:h-16 lg:w-16 dark:bg-zinc-800/90 dark:ring-white/10">
			<Image src={avatarImage} alt="Avatar Image" className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800" />
		</div>
	)
}

export default async function Home() {
	return (
		<>
			<Container className="mt-8 sm:mt-12 lg:mt-16">
				<Avatar />

				<div className="max-w-3xl sm:mt-7 lg:mt-8">
					<h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl lg:text-6xl dark:text-zinc-100">Eliezer Caraballo Jr.</h1>
					<h2 className="mt-1 text-pretty font-light italic tracking-tight text-zinc-600 sm:mt-0.5 sm:text-lg lg:text-xl dark:text-zinc-400">
						<span className="hidden sm:inline">- </span>
						Software Developer, Musician, Gamer, Dad.
						<span className="hidden sm:inline"> That sums it up pretty well.</span>
					</h2>

					<p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
						I'm Eliezer, but I just go by Eli, an experienced full-stack developer based outside of Atlanta, Georgia. I served as a worship pastor and guitar instructor for many years before catching a passion for programming. Let's chat tech, tunes, and anything in between! <span className="inline-block">🚀 🎮 🎸</span>
					</p>

					<div className="mt-6 flex gap-6">
						<SocialLink href="https://github.com/Eli-Caraballo" aria-label="Follow on GitHub" icon={GitHubIcon} />
						<SocialLink href="https://www.linkedin.com/in/eliezer-caraballo/" aria-label="Follow on LinkedIn" icon={LinkedInIcon} />
					</div>
				</div>
			</Container>

			<Photos />

			<Container className="mt-24 md:mt-28">
				<div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
					<Projects />

					<div className="flex flex-col gap-y-10 lg:pl-16 xl:pl-24">
						<EmailMe />
						<Resume />
					</div>
				</div>
			</Container>
		</>
	)
}
