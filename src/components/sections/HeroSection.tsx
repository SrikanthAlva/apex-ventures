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
]

export function HeroSection() {
	return (
		<section className='relative overflow-hidden bg-gradient-to-br from-background via-secondary to-muted pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28'>
			{/* Background decoration */}
			<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,rgba(0,0,0,0.8),rgba(0,0,0,0))] opacity-20" />

			{/* Subtle logo watermark */}
			<div className='absolute right-4 bottom-4 lg:right-16 lg:bottom-16 opacity-5'>
				<Image
					src='/logo.jpeg'
					alt='Apex Ventures'
					width={300}
					height={300}
					className='w-32 h-32 lg:w-48 lg:h-48'
				/>
			</div>

			<Container>
				<div className='lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-12'>
					<div className='relative z-10 mx-auto max-w-2xl lg:col-span-8 lg:max-w-none lg:pt-6 xl:col-span-7'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h1 className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
								Strategic Execution Partner for the{' '}
								<span className='text-accent'>GCC&apos;s Innovation Economy</span>
							</h1>

							<p className='mt-4 text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl'>
								We de-risk and accelerate your expansion journey into the Gulf
								Cooperation Council. From market entry to strategic exit, we&apos;re
								your dedicated execution partner for the entire growth journey.
							</p>

							<div className='mt-6 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-6'>
								{/* <Button size='lg' asChild>
									<Link href='/contact'>
										Start Your Partnership
										<ArrowRight className='ml-2 h-4 w-4' />
									</Link>
								</Button> */}
								<Button
									variant='outline'
									size='lg'
									className='w-full sm:w-auto'
									asChild
								>
									<Link href='/about'>Learn More</Link>
								</Button>
							</div>
						</motion.div>
					</div>

					<div className='relative mt-8 sm:mt-12 lg:col-span-4 lg:mt-0 xl:col-span-5 lg:space-y-8'>
						{/* GCC Market Card */}
						<div className='relative'>
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
								className='relative rounded-2xl bg-card p-6 sm:p-8 shadow-2xl ring-1 ring-border'
							>
								<h3 className='text-base font-semibold text-card-foreground mb-3 sm:text-lg sm:mb-4'>
									Why the GCC Market Matters
								</h3>
								<div className='space-y-3 sm:space-y-4'>
									<div className='flex items-start gap-3'>
										<div className='h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0' />
										<p className='text-sm text-muted-foreground'>
											<strong className='text-foreground'>
												$2+ Trillion
											</strong>{' '}
											in national vision investments across the region
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

						{/* Stats Section - Desktop Only */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className='hidden lg:block'
						>
							<div className='grid grid-cols-1 gap-6 xl:grid-cols-2'>
								{stats.map((stat, index) => (
									<motion.div
										key={stat.label}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
										className='flex items-center gap-x-3 rounded-lg bg-card/50 p-4 ring-1 ring-border/50'
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

					{/* Stats Section - Mobile/Tablet Only */}
					<div className='lg:hidden mt-12 sm:mt-16 col-span-full'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='flow-root'
						>
							<div className='grid grid-cols-2 gap-6 sm:grid-cols-2'>
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
				</div>
			</Container>
		</section>
	)
}
