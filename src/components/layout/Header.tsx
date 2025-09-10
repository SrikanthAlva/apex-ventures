'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const navigation = [
	{ name: 'Services', href: '/services' },
	{ name: 'About Us', href: '/about' },
	// { name: 'Sectors', href: '/sectors' },
	// { name: 'Partners', href: '/partners' },
	// { name: 'Insights', href: '/insights' },
	// { name: 'Contact', href: '/contact' },
]

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<>
			<header className='sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border'>
				<nav
					className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
					aria-label='Global'
				>
					<div className='flex lg:flex-1'>
						<Link href='/' className='-m-1.5 p-1.5'>
							<Image
								src='/logo_with_name.png'
								alt='Apex Ventures'
								width={180}
								height={45}
								className='h-10 w-auto'
								priority
							/>
						</Link>
					</div>
					<div className='flex lg:hidden'>
						<Button
							variant='ghost'
							size='sm'
							onClick={() => setMobileMenuOpen(true)}
							className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
						>
							<span className='sr-only'>Open main menu</span>
							<Menu className='h-6 w-6' aria-hidden='true' />
						</Button>
					</div>
					<div className='hidden lg:flex lg:gap-x-12'>
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className='text-sm font-semibold leading-6 text-foreground hover:text-accent transition-colors'
							>
								{item.name}
							</Link>
						))}
					</div>
					{/* <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
						<Button asChild>
							<Link href='/contact'>Start Partnership</Link>
						</Button>
					</div> */}
				</nav>
			</header>

			{/* Mobile menu */}
			{mobileMenuOpen && (
				<div className='lg:hidden fixed inset-0 z-50'>
					<div
						className='fixed inset-0 bg-black/50 backdrop-blur-sm'
						onClick={() => setMobileMenuOpen(false)}
					/>
					<div className='fixed inset-y-0 right-0 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm border-l border-gray-700'>
						<div className='flex items-center justify-between'>
							<Link
								href='/'
								className='-m-1.5 p-1.5'
								onClick={() => setMobileMenuOpen(false)}
							>
								<Image
									src='/logo_with_name.png'
									alt='Apex Ventures'
									width={160}
									height={35}
									className='h-8 w-auto'
								/>
							</Link>
							<Button
								variant='ghost'
								size='sm'
								onClick={() => setMobileMenuOpen(false)}
								className='-m-2.5 rounded-md p-2.5 text-white hover:bg-gray-800'
							>
								<span className='sr-only'>Close menu</span>
								<X className='h-6 w-6' aria-hidden='true' />
							</Button>
						</div>
						<div className='mt-8 flow-root'>
							<div className='space-y-4'>
								{navigation.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className='block rounded-lg px-4 py-3 text-lg font-semibold text-white hover:bg-gray-800 transition-colors'
										onClick={() => setMobileMenuOpen(false)}
									>
										{item.name}
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
