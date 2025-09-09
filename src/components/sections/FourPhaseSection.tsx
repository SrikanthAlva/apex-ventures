'use client'

import { Container } from '@/components/layout/Container'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Building, Users, TrendingUp, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const phases = [
	{
		number: '01',
		title: 'Market Entry & Capital Formation',
		icon: Building,
		description:
			'Fast-tracked commercial registration with 100% foreign ownership, RDIA partnerships for non-dilutive grants, and seed-stage capital raising.',
		highlights: [
			'Commercial registration in weeks, not months',
			'Access to RDIA grants and incentives',
			'Targeted VC introductions',
			'Legal foundation setup',
		],
		color: 'from-accent to-apex-green-600',
		bgColor: 'bg-card',
	},
	{
		number: '02',
		title: 'Localization & Technology Validation',
		icon: Users,
		description:
			'Embed your operations within the local ecosystem through R&D partnerships with premier institutions and pilot projects with national champions.',
		highlights: [
			'KAUST R&D partnerships',
			'Industrial zone selection',
			'Pilot projects with Aramco, SABIC',
			'Technology validation framework',
		],
		color: 'from-accent to-apex-green-700',
		bgColor: 'bg-card',
	},
	{
		number: '03',
		title: 'Commercial Scaling & Operations',
		icon: TrendingUp,
		description:
			"Drive commercial traction through high-level customer introductions and our unique 'Venture-as-a-Service' operational support model.",
		highlights: [
			'Customer acquisition strategy',
			'Venture-as-a-Service model',
			'Strategic communications',
			'Government relations management',
		],
		color: 'from-accent to-apex-green-800',
		bgColor: 'bg-card',
	},
	{
		number: '04',
		title: 'Strategic Growth & Exit Advisory',
		icon: Target,
		description:
			'Secure large-scale growth capital and maximize shareholder value through our network of sovereign wealth funds and strategic exit advisory.',
		highlights: [
			'Series A+ funding rounds',
			'Institutional investor network',
			'M&A advisory services',
			'Strategic exit planning',
		],
		color: 'from-accent to-apex-green-900',
		bgColor: 'bg-card',
	},
]

export function FourPhaseSection() {
	const [activePhase, setActivePhase] = useState(0)

	return (
		<section className='py-24 sm:py-32'>
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='mx-auto max-w-2xl text-center'
				>
					<h2 className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
						Our Full-Lifecycle Partnership Model
					</h2>
					<p className='mt-6 text-lg leading-8 text-muted-foreground'>
						From market entry to strategic exit, we provide comprehensive support at
						every critical stage of your GCC expansion journey.
					</p>
				</motion.div>

				{/* Desktop Timeline View */}
				<div className='hidden lg:block mt-16'>
					<div className='relative'>
						{/* Timeline line */}
						<div className='absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2' />
						<motion.div
							className='absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-accent via-accent via-accent to-accent transform -translate-y-1/2 transition-all duration-1000'
							initial={{ width: '0%' }}
							whileInView={{ width: '100%' }}
							transition={{ duration: 2, delay: 0.5 }}
							viewport={{ once: true }}
						/>

						{/* Phase cards */}
						<div className='relative grid grid-cols-4 gap-8'>
							{phases.map((phase, index) => (
								<motion.div
									key={phase.number}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.2 }}
									viewport={{ once: true }}
									className='relative'
								>
									{/* Phase number circle */}
									<div className='absolute -top-6 left-1/2 transform -translate-x-1/2 z-10'>
										<div
											className={`w-12 h-12 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center text-white font-bold shadow-lg`}
										>
											{phase.number}
										</div>
									</div>

									<Card
										className={`mt-8 ${phase.bgColor} border-border shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
										onClick={() => setActivePhase(index)}
									>
										<CardContent className='p-6'>
											<phase.icon className='h-8 w-8 text-card-foreground mb-4' />
											<h3 className='text-lg font-semibold text-card-foreground mb-2'>
												{phase.title}
											</h3>
											<p className='text-sm text-muted-foreground'>
												{phase.description}
											</p>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</div>
					</div>

					{/* Active phase details */}
					{/* <motion.div
						key={activePhase}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						className='mt-12'
					>
						<Card className='p-8'>
							<div className='flex items-start gap-6'>
								<div
									className={`flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-r ${phases[activePhase].color} flex items-center justify-center`}
								>
									{(() => {
										const IconComponent = phases[activePhase].icon
										return <IconComponent className='h-8 w-8 text-white' />
									})()}
								</div>
								<div className='flex-1'>
									<h3 className='text-2xl font-bold text-gray-300 mb-4'>
										Phase {phases[activePhase].number}:{' '}
										{phases[activePhase].title}
									</h3>
									<p className='text-gray-500 mb-6'>
										{phases[activePhase].description}
									</p>
									<div className='grid grid-cols-2 gap-4 mb-6'>
										{phases[activePhase].highlights.map((highlight, index) => (
											<div key={index} className='flex items-center gap-2'>
												<div className='w-2 h-2 rounded-full bg-emerald-500' />
												<span className='text-sm text-gray-700'>
													{highlight}
												</span>
											</div>
										))}
									</div>
									<Button variant='outline'>
										Learn More About This Phase
										<ArrowRight className='ml-2 h-4 w-4' />
									</Button>
								</div>
							</div>
						</Card>
					</motion.div> */}
				</div>

				{/* Mobile Accordion View */}
				<div className='lg:hidden mt-16 space-y-4'>
					{phases.map((phase, index) => (
						<motion.div
							key={phase.number}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							<Card className={`${phase.bgColor} border-none`}>
								<CardContent className='p-6'>
									<div className='flex items-start gap-4'>
										<div
											className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center text-white font-bold`}
										>
											{phase.number}
										</div>
										<div className='flex-1'>
											<h3 className='text-lg font-semibold text-gray-300 mb-2'>
												{phase.title}
											</h3>
											<p className='text-sm text-gray-500 mb-4'>
												{phase.description}
											</p>
											<div className='space-y-2'>
												{phase.highlights.map(
													(highlight, highlightIndex) => (
														<div
															key={highlightIndex}
															className='flex items-center gap-2'
														>
															<div className='w-1.5 h-1.5 rounded-full bg-emerald-500' />
															<span className='text-xs text-gray-700'>
																{highlight}
															</span>
														</div>
													)
												)}
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					viewport={{ once: true }}
					className='mt-16 text-center'
				>
					<Button size='lg' asChild>
						<Link href='/services'>
							Explore All Services
							<ArrowRight className='ml-2 h-4 w-4' />
						</Link>
					</Button>
				</motion.div>
			</Container>
		</section>
	)
}
