import clsx from 'clsx'

export function OuterContainer({ className, children, ...props }: React.ComponentPropsWithoutRef<'div'>) {
	return (
		<div className={clsx('sm:px-8', className)} {...props}>
			<div className="mx-auto w-full max-w-7xl lg:px-8">{children}</div>
		</div>
	)
}

export function InnerContainer({ className, children, ...props }: React.ComponentPropsWithoutRef<'div'>) {
	return (
		<div className={clsx('relative px-4 sm:px-8 lg:px-12', className)} {...props}>
			<div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
		</div>
	)
}

export function Container({ children, ...props }: React.ComponentPropsWithoutRef<'div'>) {
	return (
		<OuterContainer {...props}>
			<InnerContainer>{children}</InnerContainer>
		</OuterContainer>
	)
}
