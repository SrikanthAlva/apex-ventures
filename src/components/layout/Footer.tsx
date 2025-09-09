import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

const navigation = {
	services: [
		{ name: 'Market Entry & Capital Formation', href: '/services/market-entry' },
		{ name: 'Localization & Technology Validation', href: '/services/localization' },
		{ name: 'Commercial Scaling & Operations', href: '/services/scaling' },
		{ name: 'Strategic Growth & Exit Advisory', href: '/services/growth-exit' },
	],
	// sectors: [
	// 	{ name: 'Energy & Industrial Leadership', href: '/sectors#energy' },
	// 	{ name: 'Health & Wellness', href: '/sectors#health' },
	// 	{ name: 'Sustainability & Essential Needs', href: '/sectors#sustainability' },
	// 	{ name: 'Economies of the Future', href: '/sectors#future' },
	// ],
	company: [
		{ name: 'About Us', href: '/about' },
		// { name: 'Our Partners', href: '/partners' },
		// { name: 'Insights', href: '/insights' },
		// { name: 'Contact', href: '/contact' },
	],
	social: [
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/company/apvbh',
			icon: Linkedin,
		},
	],
}

export function Footer() {
	return (
		<footer className='bg-gray-900' aria-labelledby='footer-heading'>
			<h2 id='footer-heading' className='sr-only'>
				Footer
			</h2>
			<div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32'>
				<div className='xl:grid xl:grid-cols-3 xl:gap-8'>
					<div className='space-y-8'>
						<div>
							<Image
								src='/logo_with_name.jpg'
								alt='Apex Ventures'
								width={200}
								height={45}
								className='h-11 w-auto invert'
							/>
							<p className='mt-4 text-sm leading-6 text-gray-300'>
								Strategic execution partner for technology companies entering the
								GCC market. De-risking and accelerating your expansion journey.
							</p>
						</div>
						<div className='flex space-x-6'>
							{navigation.social.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className='text-gray-400 hover:text-gray-300'
								>
									<span className='sr-only'>{item.name}</span>
									<item.icon className='h-6 w-6' aria-hidden='true' />
								</a>
							))}
						</div>
					</div>
					<div className='mt-16 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0'>
						{/* <div className='md:grid md:grid-cols-2 md:gap-8'> */}
						<div>
							<h3 className='text-sm font-semibold leading-6 text-white'>Services</h3>
							<ul role='list' className='mt-6 space-y-4'>
								{navigation.services.map((item) => (
									<li key={item.name}>
										<Link
											href={item.href}
											className='text-sm leading-6 text-gray-300 hover:text-white'
										>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
						{/* <div className='mt-10 md:mt-0'>
								<h3 className='text-sm font-semibold leading-6 text-white'>
									Sectors
								</h3>
								<ul role='list' className='mt-6 space-y-4'>
									{navigation.sectors.map((item) => (
										<li key={item.name}>
											<Link
												href={item.href}
												className='text-sm leading-6 text-gray-300 hover:text-white'
											>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div> */}
						{/* </div> */}
						{/* <div className='md:grid md:grid-cols-2 md:gap-8'> */}
						<div>
							<h3 className='text-sm font-semibold leading-6 text-white'>Company</h3>
							<ul role='list' className='mt-6 space-y-4'>
								{navigation.company.map((item) => (
									<li key={item.name}>
										<Link
											href={item.href}
											className='text-sm leading-6 text-gray-300 hover:text-white'
										>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className='mt-10 md:mt-0'>
							<h3 className='text-sm font-semibold leading-6 text-white'>
								Contact Info
							</h3>
							<ul role='list' className='mt-6 space-y-4'>
								<li className='flex items-center text-sm text-gray-300'>
									<Mail className='h-4 w-4 mr-2' />
									partnerships@apexventures.com
								</li>
								<li className='flex items-center text-sm text-gray-300'>
									<Phone className='h-4 w-4 mr-2' />
									+966 XX XXX XXXX
								</li>
								<li className='flex items-center text-sm text-gray-300'>
									<MapPin className='h-4 w-4 mr-2' />
									Riyadh, Saudi Arabia
								</li>
							</ul>
						</div>
						{/* </div> */}
					</div>
				</div>
				<div className='mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24'>
					<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
						<p className='text-xs leading-5 text-gray-400'>
							&copy; 2025 Apex Ventures. All rights reserved.
						</p>
						<div className='mt-4 sm:mt-0'>
							<Link
								href='/privacy'
								className='text-xs leading-5 text-gray-400 hover:text-gray-300 mr-6'
							>
								Privacy Policy
							</Link>
							<Link
								href='/terms'
								className='text-xs leading-5 text-gray-400 hover:text-gray-300'
							>
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
