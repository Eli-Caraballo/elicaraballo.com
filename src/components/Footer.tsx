import { OuterContainer, InnerContainer } from '@/components/Container'
import Link from 'next/link'

export function Footer() {
	return (
		<footer className="mt-20 lg:mt-28">
			<OuterContainer>
				<div className="border-t border-zinc-200 pb-16 pt-10 dark:border-zinc-700/30">
					<InnerContainer>
						<div className="flex justify-end">
							<p className="text-xs text-zinc-400 sm:text-sm dark:text-zinc-500">&copy; {new Date().getFullYear()} Eliezer Caraballo. All rights reserved.</p>
						</div>
					</InnerContainer>
				</div>
			</OuterContainer>
		</footer>
	)
}
