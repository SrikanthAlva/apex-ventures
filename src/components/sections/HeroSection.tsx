'use client'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/Container'
import { ArrowRight, Globe, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const stats = [
	{ icon: Globe, label: 'GCC Countries', value: '6' },
	{ icon: TrendingUp, label: 'Market Growth', value: '$2T+' },
	{ icon: Users, label: 'Success Stories', value: '50+' },
]

export function HeroSection() {
	return (
		<section className='relative overflow-hidden bg-gradient-to-br from-background via-secondary to-muted pt-16 pb-20 sm:pt-24 sm:pb-28'>
			{/* Background decoration */}
			<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,rgba(0,0,0,0.8),rgba(0,0,0,0))] opacity-20" />

			{/* Subtle logo watermark */}
			<div className='absolute right-4 bottom-4 lg:right-16 lg:bottom-16 opacity-5'>
				<Image
					src='/logo.jpg'
					alt='Apex Ventures'
					width={300}
					height={300}
					className='w-32 h-32 lg:w-48 lg:h-48'
				/>
			</div>

			<Container>
				<div className='lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20'>
					<div className='relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h1 className='text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl'>
								Strategic Execution Partner for the{' '}
								<span className='text-accent'>GCC&apos;s Innovation Economy</span>
							</h1>

							<p className='mt-6 text-lg leading-8 text-muted-foreground sm:text-xl'>
								We de-risk and accelerate your expansion journey into the Gulf
								Cooperation Council. From market entry to strategic exit, we&apos;re
								your dedicated execution partner for the entire growth journey.
							</p>

							<div className='mt-10 flex items-center gap-x-6'>
								{/* <Button size='lg' asChild>
									<Link href='/contact'>
										Start Your Partnership
										<ArrowRight className='ml-2 h-4 w-4' />
									</Link>
								</Button> */}
								<Button variant='outline' size='lg' asChild>
									<Link href='/about'>Learn More</Link>
								</Button>
							</div>
						</motion.div>

						{/* Stats */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='mt-16 flow-root sm:mt-20'
						>
							<div className='grid grid-cols-1 gap-8 sm:grid-cols-3'>
								{stats.map((stat, index) => (
									<motion.div
										key={stat.label}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
										className='flex items-center gap-x-3'
									>
										<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20'>
											<stat.icon className='h-6 w-6 text-accent' />
										</div>
										<div>
											<div className='text-2xl font-bold text-foreground'>
												{stat.value}
											</div>
											<div className='text-sm text-muted-foreground'>
												{stat.label}
											</div>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>

					<div className='relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6'>
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className='absolute inset-0 rounded-2xl bg-gradient-to-tr from-accent/20 via-primary/10 to-accent/30 blur-3xl'
						/>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className='relative rounded-2xl bg-card p-8 shadow-2xl ring-1 ring-border'
						>
							<h3 className='text-lg font-semibold text-card-foreground mb-4'>
								Why the GCC Market Matters
							</h3>
							<div className='space-y-4'>
								<div className='flex items-start gap-3'>
									<div className='h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0' />
									<p className='text-sm text-muted-foreground'>
										<strong className='text-foreground'>$2+ Trillion</strong> in
										national vision investments across the region
									</p>
								</div>
								<div className='flex items-start gap-3'>
									<div className='h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0' />
									<p className='text-sm text-muted-foreground'>
										<strong className='text-foreground'>Vision 2030</strong>{' '}
										driving unprecedented economic transformation
									</p>
								</div>
								<div className='flex items-start gap-3'>
									<div className='h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0' />
									<p className='text-sm text-muted-foreground'>
										<strong className='text-foreground'>
											Strategic Location
										</strong>{' '}
										connecting Asia, Europe, and Africa
									</p>
								</div>
								<div className='flex items-start gap-3'>
									<div className='h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0' />
									<p className='text-sm text-muted-foreground'>
										<strong className='text-foreground'>
											100% Foreign Ownership
										</strong>{' '}
										in most sectors across the GCC
									</p>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</Container>
		</section>
	)
}
