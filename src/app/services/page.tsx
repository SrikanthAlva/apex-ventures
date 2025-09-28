'use client'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import {
	Building,
	Users,
	TrendingUp,
	Target,
	ArrowRight,
	CheckCircle,
	Clock,
	DollarSign,
	Globe,
} from 'lucide-react'
import Link from 'next/link'

const phases = [
	{
		number: '01',
		title: 'Market Entry & Capital Formation',
		icon: Building,
		description:
			'Fast-tracked commercial registration with 100% foreign ownership, RDIA partnerships for non-dilutive grants, and seed-stage capital raising.',
		timeline: '4-8 weeks',
		investment: '$25K - $100K',
		keyOutcomes: [
			'Commercial registration completed',
			'RDIA grant applications submitted',
			'Legal foundation established',
			'Initial capital secured',
		],
		slug: 'market-entry',
		color: 'from-primary to-accent',
		bgColor: 'bg-gray-50',
	},
	{
		number: '02',
		title: 'Localization & Technology Validation',
		icon: Users,
		description:
			'Embed your operations within the local ecosystem through R&D partnerships with premier institutions and pilot projects with national champions.',
		timeline: '3-6 months',
		investment: '$100K - $500K',
		keyOutcomes: [
			'R&D partnerships established',
			'Technology validation completed',
			'Pilot project initiated',
			'Local team recruited',
		],
		slug: 'localization',
		color: 'from-primary to-accent',
		bgColor: 'bg-gray-50',
	},
	{
		number: '03',
		title: 'Commercial Scaling & Operations',
		icon: TrendingUp,
		description:
			"Drive commercial traction through high-level customer introductions and our unique 'Venture-as-a-Service' operational support model.",
		timeline: '6-12 months',
		investment: '$500K - $2M',
		keyOutcomes: [
			'Customer acquisition pipeline',
			'Revenue generation',
			'Operational excellence',
			'Market presence established',
		],
		slug: 'scaling',
		color: 'from-primary to-accent',
		bgColor: 'bg-gray-50',
	},
	{
		number: '04',
		title: 'Strategic Growth & Exit Advisory',
		icon: Target,
		description:
			'Secure large-scale growth capital and maximize shareholder value through our network of sovereign wealth funds and strategic exit advisory.',
		timeline: '12+ months',
		investment: '$2M+',
		keyOutcomes: [
			'Series A+ funding secured',
			'Strategic partnerships formed',
			'Exit opportunities identified',
			'Maximum value realization',
		],
		slug: 'growth-exit',
		color: 'from-primary to-accent',
		bgColor: 'bg-gray-50',
	},
]

const serviceHighlights = [
	{
		icon: Clock,
		title: 'Accelerated Timeline',
		description:
			'Our established relationships and proven processes reduce market entry time by 6x compared to going alone.',
	},
	{
		icon: DollarSign,
		title: 'Capital Efficiency',
		description:
			'Access to non-dilutive grants, strategic introductions to investors, and optimized capital deployment strategies.',
	},
	{
		icon: Globe,
		title: 'Market Integration',
		description:
			'Deep local partnerships ensure authentic market integration rather than superficial market entry.',
	},
	{
		icon: CheckCircle,
		title: 'Proven Framework',
		description:
			'Battle-tested methodologies with a 95% success rate across diverse industries and company stages.',
	},
]

const successMetrics = [
	{
		metric: '95%',
		label: 'Success Rate',
		description: 'Companies successfully established in GCC markets',
	},
	{
		metric: '6x',
		label: 'Faster Setup',
		description: 'Compared to traditional market entry approaches',
	},
	{
		metric: '$500M+',
		label: 'Value Created',
		description: 'Total value generated for portfolio companies',
	},
	{
		metric: '200+',
		label: 'Strategic Partners',
		description: 'Government, corporate, and investor relationships',
	},
]

export default function ServicesPage() {
	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<section className='py-24 sm:py-32 bg-primary text-black'>
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='max-w-4xl mx-auto text-center'
					>
						<h1 className='text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6'>
							Full-Lifecycle Partnership for
							<span className='text-accent block mt-2'>GCC Market Success</span>
						</h1>
						<p className='text-xl leading-8 mb-8 opacity-90'>
							From initial market entry through strategic exit, our comprehensive
							four-phase model ensures sustainable growth and maximum value creation
							in the Gulf region.
						</p>
						{/* <Button size='lg' variant='secondary' asChild>
							<Link href='/contact'>Start Your Expansion</Link>
						</Button> */}
					</motion.div>
				</Container>
			</section>

			{/* Service Highlights */}
			<section className='py-24 sm:py-32'>
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.2 }}
						viewport={{ once: true }}
						className='text-center mb-16'
					>
						<h2 className='text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl mb-6'>
							Why Partner with Apex Ventures
						</h2>
						<p className='text-lg text-gray-500 max-w-3xl mx-auto'>
							Our unique approach combines strategic consulting with hands-on
							execution, ensuring your GCC expansion delivers measurable results at
							every stage.
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{serviceHighlights.map((highlight, index) => (
							<motion.div
								key={highlight.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className='h-full text-center hover:shadow-lg transition-shadow duration-300'>
									<CardContent className='p-6'>
										<highlight.icon className='h-12 w-12 text-primary mx-auto mb-4' />
										<h3 className='text-lg font-semibold text-gray-300 mb-3'>
											{highlight.title}
										</h3>
										<p className='text-gray-500 text-sm'>
											{highlight.description}
										</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			{/* Four-Phase Model */}
			<section className='py-24 sm:py-32 bg-gray-50'>
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='text-center mb-16'
					>
						<h2 className='text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl mb-6'>
							Our Four-Phase Partnership Model
						</h2>
						<p className='text-lg text-gray-500 max-w-3xl mx-auto'>
							Each phase builds strategically on the previous one, ensuring
							sustainable growth and deep market integration throughout your GCC
							expansion journey.
						</p>
					</motion.div>

					<div className='space-y-8'>
						{phases.map((phase, index) => (
							<motion.div
								key={phase.number}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card
									className={`${phase.bgColor} border-none hover:shadow-lg transition-shadow duration-300`}
								>
									<CardContent className='p-8'>
										<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-center'>
											{/* Phase Info */}
											<div className='lg:col-span-2'>
												<div className='flex items-start gap-6'>
													<div
														className={`flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-r ${phase.color} flex items-center justify-center text-white font-bold text-xl`}
													>
														{phase.number}
													</div>
													<div className='flex-1'>
														<h3 className='text-2xl font-bold text-gray-600 mb-3'>
															{phase.title}
														</h3>
														<p className='text-gray-500 mb-6'>
															{phase.description}
														</p>
														<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
															<div>
																<div className='flex items-center gap-2 mb-2'>
																	<Clock className='h-4 w-4 text-accent' />
																	<span className='font-semibold text-gray-600'>
																		Timeline
																	</span>
																</div>
																<div className='text-gray-500'>
																	{phase.timeline}
																</div>
															</div>
															<div>
																<div className='flex items-center gap-2 mb-2'>
																	<DollarSign className='h-4 w-4 text-accent' />
																	<span className='font-semibold text-gray-600'>
																		Indicative Band
																	</span>
																</div>
																<p className='text-gray-500'>
																	{phase.investment}
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>

											{/* Key Outcomes */}
											<div>
												<h4 className='font-semibold text-gray-600 mb-4'>
													Key Outcomes
												</h4>
												<div className='space-y-3'>
													{phase.keyOutcomes.map(
														(outcome, outcomeIndex) => (
															<div
																key={outcomeIndex}
																className='flex items-start gap-2'
															>
																<CheckCircle className='h-4 w-4 text-accent mt-0.5 flex-shrink-0' />
																<span className='text-sm text-gray-500'>
																	{outcome}
																</span>
															</div>
														)
													)}
												</div>
												<Button
													className='mt-6 w-full'
													variant='outline'
													asChild
												>
													<Link href={`/services/${phase.slug}`}>
														Learn More
														<ArrowRight className='ml-2 h-4 w-4' />
													</Link>
												</Button>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			{/* Success Metrics */}
			{/* <section className='py-24 sm:py-32'>
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='text-center mb-16'
					>
						<h2 className='text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl mb-6'>
							Proven Results
						</h2>
						<p className='text-lg text-gray-500 max-w-3xl mx-auto'>
							Our track record speaks for itself. We&apos;ve helped dozens of
							companies successfully establish and scale their operations across the
							GCC region.
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{successMetrics.map((metric, index) => (
							<motion.div
								key={metric.label}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className='text-center'>
									<CardContent className='p-6'>
										<div className='text-4xl font-bold text-primary mb-2'>
											{metric.metric}
										</div>
										<div className='text-lg font-semibold text-gray-300 mb-2'>
											{metric.label}
										</div>
										<p className='text-sm text-gray-500'>
											{metric.description}
										</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</Container>
			</section> */}

			{/* Process Overview */}
			<section className='py-24 sm:py-32'>
				<Container>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h2 className='text-3xl font-bold text-gray-600 sm:text-4xl mb-6'>
								Tailored to Your Industry & Stage
							</h2>
							<p className='text-lg text-gray-500 mb-6'>
								While our four-phase model provides a proven framework, we customize
								our approach based on your specific industry, company stage, and
								strategic objectives.
							</p>
							<div className='space-y-4 mb-8'>
								<div className='flex items-start gap-3'>
									<div className='w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0' />
									<div>
										<strong className='text-gray-600'>
											Industry Expertise:
										</strong>
										<span className='text-gray-500 ml-1'>
											Deep knowledge across energy, health, sustainability,
											and future economy sectors
										</span>
									</div>
								</div>
								<div className='flex items-start gap-3'>
									<div className='w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0' />
									<div>
										<strong className='text-gray-600'>
											Stage Flexibility:
										</strong>
										<span className='text-gray-500 ml-1'>
											Support from early-stage startups to established
											corporations
										</span>
									</div>
								</div>
								<div className='flex items-start gap-3'>
									<div className='w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0' />
									<div>
										<strong className='text-gray-600'>
											Cultural Integration:
										</strong>
										<span className='text-gray-500 ml-1'>
											Ensure authentic market fit and sustainable local
											relationships
										</span>
									</div>
								</div>
							</div>
							<Button size='lg' asChild>
								<Link href='/about'>Discuss Your Needs</Link>
							</Button>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className='bg-white rounded-2xl p-8 shadow-lg'
						>
							<h3 className='text-2xl font-bold text-gray-600 mb-6'>
								Partnership Inquiry Process
							</h3>
							<div className='space-y-6'>
								<div className='flex items-start gap-4'>
									<div className='w-8 h-8 rounded-full bg-primary text-accent flex items-center justify-center text-sm font-bold flex-shrink-0'>
										1
									</div>
									<div>
										<h4 className='font-semibold text-gray-600 mb-1'>
											Initial Consultation
										</h4>
										<p className='text-gray-500 text-sm'>
											30-minute discovery call to understand your objectives
											and assess market fit
										</p>
									</div>
								</div>
								<div className='flex items-start gap-4'>
									<div className='w-8 h-8 rounded-full bg-primary text-accent flex items-center justify-center text-sm font-bold flex-shrink-0'>
										2
									</div>
									<div>
										<h4 className='font-semibold text-gray-600 mb-1'>
											Strategic Assessment
										</h4>
										<p className='text-gray-500 text-sm'>
											Comprehensive analysis of your technology, market
											opportunity, and expansion strategy
										</p>
									</div>
								</div>
								<div className='flex items-start gap-4'>
									<div className='w-8 h-8 rounded-full bg-primary text-accent flex items-center justify-center text-sm font-bold flex-shrink-0'>
										3
									</div>
									<div>
										<h4 className='font-semibold text-gray-600 mb-1'>
											Customized Proposal
										</h4>
										<p className='text-gray-500 text-sm'>
											Tailored partnership structure with clear milestones,
											timelines, and investment requirements
										</p>
									</div>
								</div>
								<div className='flex items-start gap-4'>
									<div className='w-8 h-8 rounded-full bg-primary text-accent flex items-center justify-center text-sm font-bold flex-shrink-0'>
										4
									</div>
									<div>
										<h4 className='font-semibold text-gray-600 mb-1'>
											Partnership Launch
										</h4>
										<p className='text-gray-500 text-sm'>
											Begin execution with dedicated team support and regular
											milestone tracking
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</Container>
			</section>

			{/* CTA Section */}
			<section className='py-24 sm:py-32 bg-gray-200 text-black'>
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='text-center'
					>
						<h2 className='text-3xl text-accent font-bold tracking-tight sm:text-4xl mb-6'>
							Ready to Transform Your GCC Expansion?
						</h2>
						<p className='text-xl mb-8 opacity-90 max-w-2xl mx-auto'>
							Join the innovative companies already leveraging our proven framework to
							build successful, sustainable businesses in the Gulf region.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Button size='lg' variant='secondary' asChild>
								<Link href='/about'>Start Your Partnership</Link>
							</Button>
							{/* <Button
								size='lg'
								variant='outline'
								className='text-primary border-white hover:bg-white hover:text-primary'
								asChild
							>
								<Link href='/about'>Learn About Us</Link>
							</Button> */}
						</div>
					</motion.div>
				</Container>
			</section>
		</div>
	)
}
