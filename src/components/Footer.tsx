import { OuterContainer, InnerContainer } from '@/components/Container'

export function Footer() {
	return (
		<footer className="mt-20 lg:mt-28">
			<OuterContainer>
				<div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
					<InnerContainer>
						<div className="flex justify-end">
							<p className="text-sm text-zinc-400 dark:text-zinc-500">&copy; {new Date().getFullYear()} Spencer Sharp. All rights reserved.</p>
						</div>
					</InnerContainer>
				</div>
			</OuterContainer>
		</footer>
	)
}
