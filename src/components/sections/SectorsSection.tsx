'use client'

import { Container } from '@/components/layout/Container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Zap, Heart, Leaf, Brain, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const sectors = [
	{
		icon: Zap,
		title: 'Energy & Industrial Leadership',
		description:
			"Clean energy technologies, advanced materials, and industrial automation solutions driving the region's energy transition.",
		examples: [
			'Solar & Wind Technologies',
			'Advanced Materials',
			'Industrial IoT',
			'Energy Storage',
		],
		color: 'from-accent to-apex-green-600',
		bgColor: 'bg-card',
	},
	{
		icon: Heart,
		title: 'Health & Wellness',
		description:
			'Digital health platforms, medical devices, and biotechnology innovations improving healthcare outcomes across the GCC.',
		examples: ['Digital Health Platforms', 'Medical Devices', 'Biotechnology', 'Telemedicine'],
		color: 'from-accent to-apex-green-700',
		bgColor: 'bg-card',
	},
	{
		icon: Leaf,
		title: 'Sustainability & Essential Needs',
		description:
			'Water technology, waste management, and sustainable agriculture solutions addressing critical environmental challenges.',
		examples: [
			'Water Technology',
			'Waste Management',
			'Sustainable Agriculture',
			'Carbon Capture',
		],
		color: 'from-accent to-apex-green-800',
		bgColor: 'bg-card',
	},
	{
		icon: Brain,
		title: 'Economies of the Future',
		description:
			'AI, FinTech, and smart city technologies that are reshaping how we live, work, and interact in the digital age.',
		examples: ['Artificial Intelligence', 'FinTech Solutions', 'Smart Cities', 'Blockchain'],
		color: 'from-accent to-apex-green-900',
		bgColor: 'bg-card',
	},
]

export function SectorsSection() {
	return (
		<section className='py-24 sm:py-32 bg-muted'>
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='mx-auto max-w-2xl text-center'
				>
					<h2 className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
						Focus Sectors
					</h2>
					<p className='mt-6 text-lg leading-8 text-muted-foreground'>
						We specialize in high-growth sectors critical to the GCC&apos;s economic
						transformation and Vision 2030 objectives.
					</p>
				</motion.div>

				<div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
					{sectors.map((sector, index) => (
						<motion.div
							key={sector.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							<Card
								className={`h-full ${sector.bgColor} border-border hover:shadow-lg transition-all duration-300 group`}
							>
								<CardHeader>
									<div
										className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${sector.color} mb-4`}
									>
										<sector.icon className='h-6 w-6 text-white' />
									</div>
									<CardTitle className='text-xl text-card-foreground'>
										{sector.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className='text-muted-foreground mb-6'>
										{sector.description}
									</p>
									<div className='space-y-2 mb-6'>
										<h4 className='text-sm font-semibold text-card-foreground mb-3'>
											Key Areas:
										</h4>
										<div className='grid grid-cols-2 gap-2'>
											{sector.examples.map((example, exampleIndex) => (
												<div
													key={exampleIndex}
													className='flex items-center gap-2'
												>
													<div className='w-1.5 h-1.5 rounded-full bg-accent' />
													<span className='text-sm text-muted-foreground'>
														{example}
													</span>
												</div>
											))}
										</div>
									</div>
									<Button
										variant='ghost'
										className='group-hover:bg-muted group-hover:shadow-sm transition-all'
									>
										Learn More
										<ArrowRight className='ml-2 h-4 w-4' />
									</Button>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				{/* <motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
					className='mt-16 text-center'
				>
					<div className='rounded-2xl bg-gradient-to-r from-primary to-accent p-8 text-white'>
						<h3 className='text-2xl font-bold mb-4'>Don&apos;t See Your Sector?</h3>
						<p className='text-lg mb-6 opacity-90'>
							We work with innovative companies across many industries. Let&apos;s
							discuss how we can support your GCC expansion.
						</p>
						<Button variant='secondary' size='lg' asChild>
							<Link href='/contact'>
								Discuss Your Sector
								<ArrowRight className='ml-2 h-4 w-4' />
							</Link>
						</Button>
					</div>
				</motion.div> */}
			</Container>
		</section>
	)
}
