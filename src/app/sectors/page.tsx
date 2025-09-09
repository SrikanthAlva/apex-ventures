'use client'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import {
	Zap,
	Heart,
	Leaf,
	Cpu,
	Factory,
	Fuel,
	Building,
	Lightbulb,
	DollarSign,
	TrendingUp,
	Users,
	Globe,
} from 'lucide-react'
import Link from 'next/link'

const sectors = [
	{
		id: 'energy-industrial',
		title: 'Energy & Industrial Leadership',
		icon: Zap,
		description:
			'Transforming the backbone of the GCC economy through innovation in energy and industrial processes',
		gradient: 'from-orange-500 to-red-600',
		bgColor: 'bg-orange-50',
		keyAreas: [
			{
				name: 'Clean Energy Technologies',
				icon: Fuel,
				description: 'Solar, wind, hydrogen, and energy storage solutions',
			},
			{
				name: 'Industrial Automation',
				icon: Factory,
				description: 'IoT, robotics, and smart manufacturing systems',
			},
			{
				name: 'Petrochemical Innovation',
				icon: Building,
				description: 'Advanced materials and sustainable chemical processes',
			},
		],
		marketSize: '$850B',
		growthRate: '12%',
		keyPlayers: "Aramco, SABIC, ACWA Power, Ma'aden",
		opportunities: [
			'$200B+ investment in renewable energy projects',
			'Digital transformation of industrial operations',
			'Circular economy and waste-to-value initiatives',
			'Carbon capture and utilization technologies',
		],
	},
	{
		id: 'health-wellness',
		title: 'Health & Wellness',
		icon: Heart,
		description:
			'Advancing healthcare delivery and wellness solutions for a growing, health-conscious population',
		gradient: 'from-red-500 to-pink-600',
		bgColor: 'bg-red-50',
		keyAreas: [
			{
				name: 'Digital Health',
				icon: Cpu,
				description: 'Telemedicine, health apps, and remote monitoring',
			},
			{
				name: 'Medical Technology',
				icon: Lightbulb,
				description: 'Medical devices, diagnostics, and treatment innovations',
			},
			{
				name: 'Wellness & Prevention',
				icon: Heart,
				description: 'Preventive care, fitness tech, and wellness platforms',
			},
		],
		marketSize: '$120B',
		growthRate: '18%',
		keyPlayers: 'Ministry of Health, SFDA, King Faisal Specialist Hospital',
		opportunities: [
			'$64B healthcare transformation program',
			'Aging population driving demand for innovative care',
			'Health tourism and medical city developments',
			'Integration of AI and machine learning in healthcare',
		],
	},
	{
		id: 'sustainability',
		title: 'Sustainability & Essential Needs',
		icon: Leaf,
		description:
			'Addressing critical sustainability challenges and essential resource management',
		gradient: 'from-green-500 to-emerald-600',
		bgColor: 'bg-green-50',
		keyAreas: [
			{
				name: 'Water Technology',
				icon: Globe,
				description: 'Desalination, water treatment, and conservation',
			},
			{
				name: 'Waste Management',
				icon: Leaf,
				description: 'Recycling, waste-to-energy, and circular economy',
			},
			{
				name: 'Food Security',
				icon: Factory,
				description: 'AgTech, vertical farming, and food supply chain',
			},
		],
		marketSize: '$180B',
		growthRate: '15%',
		keyPlayers: 'SWCC, Ministry of Environment, SALIC',
		opportunities: [
			'$50B+ investment in water infrastructure',
			'Food security initiatives and AgTech adoption',
			'Circular economy targets and zero waste goals',
			'Environmental sustainability mandates',
		],
	},
	{
		id: 'future-economy',
		title: 'Economies of the Future',
		icon: Cpu,
		description: "Building the digital infrastructure and smart systems for tomorrow's economy",
		gradient: 'from-blue-500 to-purple-600',
		bgColor: 'bg-blue-50',
		keyAreas: [
			{
				name: 'Artificial Intelligence',
				icon: Cpu,
				description: 'AI applications, machine learning, and automation',
			},
			{
				name: 'FinTech & Blockchain',
				icon: DollarSign,
				description: 'Digital payments, crypto, and financial innovation',
			},
			{
				name: 'Smart Cities',
				icon: Building,
				description: 'Urban tech, mobility, and connected infrastructure',
			},
		],
		marketSize: '$300B',
		growthRate: '25%',
		keyPlayers: 'NEOM, STC, Saudi Telecom, SAMA',
		opportunities: [
			'$500B+ megaproject investments (NEOM, The Line)',
			'Digital transformation across all sectors',
			'Fintech regulatory sandbox and innovation',
			'Smart city development and urban planning',
		],
	},
]

const marketStats = [
	{
		metric: '$2.8T',
		label: 'Total GCC GDP',
		description: 'Combined economic power across all sectors',
	},
	{
		metric: '70%',
		label: 'Population Under 35',
		description: 'Young, tech-savvy demographic driving innovation adoption',
	},
	{
		metric: '$1.4T',
		label: 'Vision 2030 Investment',
		description: 'Total committed investment across transformation initiatives',
	},
	{
		metric: '40%',
		label: 'GDP Growth Target',
		description: 'Ambitious expansion goals creating massive opportunities',
	},
]

const investmentPriorities = [
	{
		priority: 'Technology Integration',
		investment: '$200B+',
		focus: 'Digital transformation across traditional industries',
		timeline: '2024-2030',
	},
	{
		priority: 'Infrastructure Development',
		investment: '$500B+',
		focus: 'Smart cities, transportation, and utilities',
		timeline: '2024-2040',
	},
	{
		priority: 'Human Capital Development',
		investment: '$100B+',
		focus: 'Education, training, and skill development',
		timeline: '2024-2030',
	},
	{
		priority: 'Innovation Ecosystem',
		investment: '$50B+',
		focus: 'R&D centers, incubators, and venture capital',
		timeline: '2024-2028',
	},
]

export default function SectorsPage() {
	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<section className='py-24 sm:py-32 bg-gradient-to-br from-primary via-primary/90 to-accent text-white'>
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='max-w-4xl mx-auto text-center'
					>
						<h1 className='text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6'>
							High-Growth Sectors
							<span className='text-secondary block mt-2'>
								Driving GCC Innovation
							</span>
						</h1>
						<p className='text-xl leading-8 mb-8 opacity-90'>
							Explore the four key sectors that are central to the GCC&apos;s economic
							transformation and Vision 2030 objectives, where innovation and
							investment create exceptional opportunities.
						</p>
						<Button size='lg' variant='secondary' asChild>
							<Link href='/contact'>Explore Opportunities</Link>
						</Button>
					</motion.div>
				</Container>
			</section>

			{/* Market Overview */}
			<section className='py-24 sm:py-32'>
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='text-center mb-16'
					>
						<h2 className='text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl mb-6'>
							Unprecedented Market Opportunity
						</h2>
						<p className='text-lg text-gray-500 max-w-3xl mx-auto'>
							The GCC represents one of the world&apos;s most dynamic economic
							regions, with massive government investment driving transformation
							across key sectors.
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{marketStats.map((stat, index) => (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className='text-center'>
									<CardContent className='p-6'>
										<div className='text-3xl font-bold text-primary mb-2'>
											{stat.metric}
										</div>
										<h3 className='text-lg font-semibold text-gray-300 mb-2'>
											{stat.label}
										</h3>
										<p className='text-gray-500 text-sm'>{stat.description}</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			{/* Sectors Overview */}
			<section className='py-24 sm:py-32 bg-gray-50'>
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='text-center mb-16'
					>
						<h2 className='text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl mb-6'>
							Our Focus Sectors
						</h2>
						<p className='text-lg text-gray-500 max-w-3xl mx-auto'>
							We specialize in high-growth sectors critical to the GCC&apos;s economic
							transformation and Vision 2030 objectives, where our expertise delivers
							maximum impact.
						</p>
					</motion.div>

					<div className='space-y-16'>
						{sectors.map((sector, index) => (
							<motion.div
								key={sector.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className={`${sector.bgColor} border-none overflow-hidden`}>
									<CardContent className='p-0'>
										<div className='grid grid-cols-1 lg:grid-cols-3 gap-0'>
											{/* Sector Overview */}
											<div className='lg:col-span-2 p-8'>
												<div className='flex items-start gap-6 mb-6'>
													<div
														className={`w-16 h-16 rounded-lg bg-gradient-to-r ${sector.gradient} flex items-center justify-center text-white flex-shrink-0`}
													>
														<sector.icon className='h-8 w-8' />
													</div>
													<div className='flex-1'>
														<h3 className='text-2xl font-bold text-gray-300 mb-3'>
															{sector.title}
														</h3>
														<p className='text-gray-500 mb-6'>
															{sector.description}
														</p>
														<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
															<div>
																<div className='flex items-center gap-2 mb-1'>
																	<DollarSign className='h-4 w-4 text-gray-500' />
																	<span className='font-semibold text-gray-300'>
																		Market Size
																	</span>
																</div>
																<p className='text-gray-500'>
																	{sector.marketSize}
																</p>
															</div>
															<div>
																<div className='flex items-center gap-2 mb-1'>
																	<TrendingUp className='h-4 w-4 text-gray-500' />
																	<span className='font-semibold text-gray-300'>
																		Growth Rate
																	</span>
																</div>
																<p className='text-gray-500'>
																	{sector.growthRate} annually
																</p>
															</div>
															<div>
																<div className='flex items-center gap-2 mb-1'>
																	<Users className='h-4 w-4 text-gray-500' />
																	<span className='font-semibold text-gray-300'>
																		Key Players
																	</span>
																</div>
																<p className='text-gray-500 text-sm'>
																	{sector.keyPlayers}
																</p>
															</div>
														</div>
													</div>
												</div>

												{/* Key Areas */}
												<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
													{sector.keyAreas.map((area, areaIndex) => (
														<div
															key={areaIndex}
															className='bg-white rounded-lg p-4'
														>
															<div className='flex items-center gap-3 mb-2'>
																<area.icon className='h-5 w-5 text-gray-500' />
																<h4 className='font-semibold text-gray-300'>
																	{area.name}
																</h4>
															</div>
															<p className='text-gray-500 text-sm'>
																{area.description}
															</p>
														</div>
													))}
												</div>
											</div>

											{/* Opportunities */}
											<div className='bg-white p-8'>
												<h4 className='font-semibold text-gray-300 mb-4'>
													Key Opportunities
												</h4>
												<div className='space-y-3'>
													{sector.opportunities.map(
														(opportunity, oppIndex) => (
															<div
																key={oppIndex}
																className='flex items-start gap-2'
															>
																<div className='w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0' />
																<p className='text-gray-500 text-sm'>
																	{opportunity}
																</p>
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
				</Container>
			</section>

			{/* Investment Priorities */}
			<section className='py-24 sm:py-32'>
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='text-center mb-16'
					>
						<h2 className='text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl mb-6'>
							Strategic Investment Priorities
						</h2>
						<p className='text-lg text-gray-500 max-w-3xl mx-auto'>
							Understanding where the GCC is directing its massive investment
							commitments helps identify the most promising opportunities for
							international companies.
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{investmentPriorities.map((priority, index) => (
							<motion.div
								key={priority.priority}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className='h-full hover:shadow-lg transition-shadow duration-300'>
									<CardContent className='p-6'>
										<div className='flex items-start justify-between mb-4'>
											<h3 className='text-lg font-semibold text-gray-300'>
												{priority.priority}
											</h3>
											<span className='text-2xl font-bold text-primary'>
												{priority.investment}
											</span>
										</div>
										<p className='text-gray-500 mb-4'>{priority.focus}</p>
										<div className='flex items-center gap-2'>
											<span className='text-sm font-medium text-gray-700'>
												Timeline:
											</span>
											<span className='text-sm text-gray-500'>
												{priority.timeline}
											</span>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			{/* Partnership Approach */}
			<section className='py-24 sm:py-32 bg-gray-50'>
				<Container>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h2 className='text-3xl font-bold text-gray-300 mb-6'>
								Sector-Specific Expertise
							</h2>
							<p className='text-lg text-gray-500 mb-8'>
								Our deep understanding of each sector&apos;s unique challenges,
								regulatory environment, and key stakeholders enables us to provide
								targeted support for your expansion.
							</p>

							<div className='space-y-4'>
								<div className='flex items-start gap-3'>
									<Building className='h-5 w-5 text-primary mt-1 flex-shrink-0' />
									<div>
										<h4 className='font-semibold text-gray-300 mb-1'>
											Industry Relationships
										</h4>
										<p className='text-gray-500 text-sm'>
											Established connections with sector leaders, government
											entities, and key decision-makers
										</p>
									</div>
								</div>
								<div className='flex items-start gap-3'>
									<Lightbulb className='h-5 w-5 text-primary mt-1 flex-shrink-0' />
									<div>
										<h4 className='font-semibold text-gray-300 mb-1'>
											Technical Knowledge
										</h4>
										<p className='text-gray-500 text-sm'>
											Deep understanding of sector-specific technologies,
											trends, and competitive landscapes
										</p>
									</div>
								</div>
								<div className='flex items-start gap-3'>
									<Users className='h-5 w-5 text-primary mt-1 flex-shrink-0' />
									<div>
										<h4 className='font-semibold text-gray-300 mb-1'>
											Regulatory Expertise
										</h4>
										<p className='text-gray-500 text-sm'>
											Comprehensive knowledge of sector-specific regulations,
											compliance requirements, and licensing
										</p>
									</div>
								</div>
								<div className='flex items-start gap-3'>
									<TrendingUp className='h-5 w-5 text-primary mt-1 flex-shrink-0' />
									<div>
										<h4 className='font-semibold text-gray-300 mb-1'>
											Market Intelligence
										</h4>
										<p className='text-gray-500 text-sm'>
											Real-time insights into market dynamics, investment
											flows, and emerging opportunities
										</p>
									</div>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<Card className='bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20'>
								<CardContent className='p-8'>
									<h3 className='text-2xl font-bold text-gray-300 mb-6'>
										Don&apos;t See Your Sector?
									</h3>
									<p className='text-gray-500 mb-6'>
										While we specialize in these four key sectors, we work with
										innovative companies across many industries. Our proven
										framework adapts to different market dynamics and regulatory
										environments.
									</p>
									<div className='space-y-4 mb-6'>
										<div className='flex items-center gap-2'>
											<div className='w-2 h-2 rounded-full bg-primary' />
											<span className='text-gray-700 text-sm'>
												Cross-sector expertise and adaptability
											</span>
										</div>
										<div className='flex items-center gap-2'>
											<div className='w-2 h-2 rounded-full bg-primary' />
											<span className='text-gray-700 text-sm'>
												Flexible approach to unique market requirements
											</span>
										</div>
										<div className='flex items-center gap-2'>
											<div className='w-2 h-2 rounded-full bg-primary' />
											<span className='text-gray-700 text-sm'>
												Established government and corporate relationships
											</span>
										</div>
										<div className='flex items-center gap-2'>
											<div className='w-2 h-2 rounded-full bg-primary' />
											<span className='text-gray-700 text-sm'>
												Proven track record across diverse industries
											</span>
										</div>
									</div>
									<Button className='w-full' asChild>
										<Link href='/contact'>Discuss Your Sector</Link>
									</Button>
								</CardContent>
							</Card>
						</motion.div>
					</div>
				</Container>
			</section>

			{/* CTA Section */}
			<section className='py-24 sm:py-32 bg-gradient-to-r from-primary to-accent text-white'>
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='text-center'
					>
						<h2 className='text-3xl font-bold tracking-tight sm:text-4xl mb-6'>
							Ready to Enter Your Target Sector?
						</h2>
						<p className='text-xl mb-8 opacity-90 max-w-2xl mx-auto'>
							Leverage our sector-specific expertise and established relationships to
							accelerate your entry into the GCC&apos;s highest-growth markets.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Button size='lg' variant='secondary' asChild>
								<Link href='/contact'>Explore Your Sector</Link>
							</Button>
							<Button
								size='lg'
								variant='outline'
								className='text-white border-white hover:bg-white hover:text-primary'
								asChild
							>
								<Link href='/services'>View Our Services</Link>
							</Button>
						</div>
					</motion.div>
				</Container>
			</section>
		</div>
	)
}
