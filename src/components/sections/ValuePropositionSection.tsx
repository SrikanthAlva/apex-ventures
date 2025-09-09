'use client'

import { Container } from '@/components/layout/Container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Zap, Network, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const valueProps = [
	{
		icon: Shield,
		title: 'De-risk Market Entry',
		description:
			'Navigate complex regulations and cultural nuances with local expertise and established partnerships.',
		metric: '95%',
		metricLabel: 'Success Rate',
	},
	{
		icon: Zap,
		title: 'Accelerate Growth',
		description:
			'Fast-track your expansion with our proven processes and deep ecosystem connections.',
		metric: '6x',
		metricLabel: 'Faster Setup',
	},
	{
		icon: Network,
		title: 'Deep Integration',
		description:
			'Become a trusted local partner through strategic R&D collaborations and government relations.',
		metric: '200+',
		metricLabel: 'Key Partnerships',
	},
	{
		icon: Target,
		title: 'Strategic Execution',
		description:
			'Full-lifecycle support from initial entry through to successful strategic exit.',
		metric: '$500M+',
		metricLabel: 'Value Created',
	},
]

function AnimatedCounter({ target, duration = 2000 }: { target: string; duration?: number }) {
	const [count, setCount] = useState(0)
	const ref = useRef<HTMLDivElement>(null)
	const isInView = useInView(ref)

	useEffect(() => {
		if (!isInView) return

		const numericTarget = parseInt(target.replace(/[^\d]/g, ''))

		if (isNaN(numericTarget)) {
			setCount(numericTarget)
			return
		}

		let start = 0
		const increment = numericTarget / (duration / 16)

		const timer = setInterval(() => {
			start += increment
			if (start >= numericTarget) {
				setCount(numericTarget)
				clearInterval(timer)
			} else {
				setCount(Math.floor(start))
			}
		}, 16)

		return () => clearInterval(timer)
	}, [isInView, target, duration])

	return (
		<div ref={ref}>
			{target.includes('%')
				? `${count}%`
				: target.includes('x')
				? `${count}x`
				: target.includes('+')
				? `${count}+`
				: target.includes('$')
				? `$${count}M+`
				: count}
		</div>
	)
}

export function ValuePropositionSection() {
	return (
		<section className='py-24 sm:py-32 bg-gray-50'>
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='mx-auto max-w-2xl text-center'
				>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						Why Choose Apex Ventures?
					</h2>
					<p className='mt-6 text-lg leading-8 text-gray-600'>
						We provide the expertise, connections, and execution capabilities you need
						to succeed in the GCC market.
					</p>
				</motion.div>

				<div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4'>
					{valueProps.map((prop, index) => (
						<motion.div
							key={prop.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							<Card className='h-full hover:shadow-lg transition-shadow duration-300'>
								<CardHeader className='text-center'>
									<div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4'>
										<prop.icon className='h-8 w-8 text-primary' />
									</div>
									<CardTitle className='text-xl'>{prop.title}</CardTitle>
								</CardHeader>
								<CardContent className='text-center'>
									<p className='text-gray-600 mb-6'>{prop.description}</p>
									<div className='mt-auto'>
										<div className='text-3xl font-bold text-primary'>
											<AnimatedCounter target={prop.metric} />
										</div>
										<div className='text-sm text-gray-500 mt-1'>
											{prop.metricLabel}
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</Container>
		</section>
	)
}
