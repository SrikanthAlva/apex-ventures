'use client'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import {
	Target,
	Users,
	Building2,
	Clock,
	CheckCircle,
	ArrowRight,
	DollarSign,
	Award,
} from 'lucide-react'
import Link from 'next/link'

const services = [
	{
		icon: DollarSign,
		title: 'Series A+ Funding Rounds',
		description:
			'Strategic access to growth capital from leading regional and international investors',
		details: [
			'Growth capital strategy development',
			'Investor identification and targeting',
			'Due diligence preparation and support',
			'Term sheet negotiation and closing',
		],
		timeline: '6-12 months',
	},
	{
		icon: Users,
		title: 'Institutional Investor Network',
		description:
			'Exclusive access to sovereign wealth funds and strategic institutional investors',
		details: [
			'PIF and sovereign fund introductions',
			'International VC partnerships',
			'Family office relationships',
			'Corporate venture capital access',
		],
		timeline: '3-6 months',
	},
	{
		icon: Building2,
		title: 'M&A Advisory Services',
		description: 'Comprehensive merger and acquisition advisory for strategic consolidation',
		details: [
			'Strategic buyer identification',
			'Company valuation and positioning',
			'M&A process management',
			'Transaction structuring and negotiation',
		],
		timeline: '9-18 months',
	},
	{
		icon: Target,
		title: 'Strategic Exit Planning',
		description: 'Long-term exit strategy development to maximize shareholder value',
		details: [
			'Exit readiness assessment',
			'Value optimization strategies',
			'IPO preparation support',
			'Strategic partnership development',
		],
		timeline: '12-24 months',
	},
]

const investorTypes = [
	{
		category: 'Sovereign Wealth Funds',
		examples: 'Public Investment Fund (PIF), Mubadala, ADIA, QIA',
		focus: 'Large-scale strategic investments aligned with national economic objectives',
		ticketSize: '$50M - $1B+',
		advantages: 'Patient capital, strategic support, government relations',
	},
	{
		category: 'Corporate VCs',
		examples: "Aramco Ventures, SABIC Ventures, STC Ventures, Ma'aden Ventures",
		focus: 'Strategic partnerships and technology integration opportunities',
		ticketSize: '$10M - $100M',
		advantages: 'Industry expertise, customer access, commercial validation',
	},
	{
		category: 'International VCs',
		examples: 'Global tier-1 VC funds with GCC presence',
		focus: 'High-growth technology companies with global potential',
		ticketSize: '$20M - $200M',
		advantages: 'Global networks, scaling expertise, international expansion',
	},
	{
		category: 'Family Offices',
		examples: 'Leading GCC family business investment arms',
		focus: 'Long-term value creation and strategic alignment',
		ticketSize: '$5M - $50M',
		advantages: 'Flexible terms, relationship-based investing, local market knowledge',
	},
]

const exitStrategies = [
	{
		strategy: 'Strategic Acquisition',
		description: 'Sale to strategic buyer for market consolidation or technology acquisition',
		timeline: '12-18 months',
		advantages: [
			'Premium valuations for strategic value',
			'Immediate scale and market access',
			'Operational synergies',
			'Accelerated growth trajectory',
		],
	},
	{
		strategy: 'Financial Buyer Exit',
		description: 'Sale to private equity or growth capital fund',
		timeline: '9-15 months',
		advantages: [
			'Growth capital for expansion',
			'Professional management support',
			'Operational expertise',
			'Multiple expansion opportunities',
		],
	},
	{
		strategy: 'Public Listing (IPO)',
		description: 'Initial public offering on regional or international exchanges',
		timeline: '18-36 months',
		advantages: [
			'Public market valuations',
			'Liquidity for shareholders',
			'Brand recognition and credibility',
			'Currency for acquisitions',
		],
	},
	{
		strategy: 'Management Buyout',
		description: 'Exit through management team acquisition with financial partners',
		timeline: '6-12 months',
		advantages: [
			'Continuity of operations',
			'Management alignment',
			'Cultural preservation',
			'Stakeholder relationships maintained',
		],
	},
]

const outcomes = [
	{
		metric: '$2.5B+',
		title: 'Total Value Created',
		description: 'Aggregate value generated through successful exits and growth rounds',
	},
	{
		metric: '8.5x',
		title: 'Average Return Multiple',
		description: 'Return on invested capital for portfolio companies reaching Phase 4',
	},
	{
		metric: '18 months',
		title: 'Average Exit Timeline',
		description: 'From Phase 4 initiation to successful exit completion',
	},
	{
		metric: '95%',
		title: 'Capital Raise Success',
		description: 'Success rate for companies seeking growth capital in Phase 4',
	},
]

const valuationFactors = [
	{
		factor: 'Revenue Growth',
		weight: '30%',
		description: 'Consistent YoY revenue growth demonstrating market traction',
	},
	{
		factor: 'Market Position',
		weight: '25%',
		description: 'Leadership position in addressable market segments',
	},
	{
		factor: 'Technology Differentiation',
		weight: '20%',
		description: 'Proprietary technology and sustainable competitive advantages',
	},
	{
		factor: 'Strategic Partnerships',
		weight: '15%',
		description: 'Value of established relationships with key stakeholders',
	},
	{
		factor: 'Team & Operations',
		weight: '10%',
		description: 'Management team quality and operational excellence',
	},
]

export default function GrowthExitPage() {
	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<section className='py-24 sm:py-32 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 text-white'>
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='max-w-4xl mx-auto'
					>
						<div className='flex items-center gap-3 mb-6'>
							<div className='w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center'>
								<span className='text-xl font-bold'>04</span>
							</div>
							<span className='text-xl opacity-90'>Phase 4</span>
						</div>
						<h1 className='text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6'>
							Strategic Growth &<br />
							<span className='text-purple-200'>Exit Advisory</span>
						</h1>
						<p className='text-xl leading-8 mb-8 opacity-90'>
							Secure large-scale growth capital and maximize shareholder value through
							our network of sovereign wealth funds and strategic exit advisory,
							culminating your successful GCC expansion journey.
						</p>
						<div className='flex flex-col sm:flex-row gap-4'>
							{/* <Button size='lg' variant='secondary' asChild>
								<Link href='/contact'>Maximize Value</Link>
							</Button> */}
							<Button
								size='lg'
								variant='outline'
								className='text-purple-600 border-white hover:bg-white hover:text-purple-600'
								asChild
							>
								<Link href='/services/scaling'>Previous: Phase 3</Link>
							</Button>
						</div>
					</motion.div>
				</Container>
			</section>

			{/* Key Outcomes */}
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
							Maximum Value Realization
						</h2>
						<p className='text-lg text-gray-500 max-w-3xl mx-auto'>
							Phase 4 represents the culmination of your GCC expansion journey,
							focusing on securing growth capital and strategic exit opportunities
							that maximize shareholder value.
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{outcomes.map((outcome, index) => (
							<motion.div
								key={outcome.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className='text-center h-full'>
									<CardContent className='p-6'>
										<div className='text-3xl font-bold text-purple-600 mb-2'>
											{outcome.metric}
										</div>
										<h3 className='text-lg font-semibold text-gray-300 mb-2'>
											{outcome.title}
										</h3>
										<p className='text-gray-500 text-sm'>
											{outcome.description}
										</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			{/* Services Overview */}
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
							Comprehensive Growth & Exit Services
						</h2>
						<p className='text-lg text-gray-500 max-w-3xl mx-auto'>
							Our Phase 4 services leverage exclusive investor relationships and deep
							market expertise to secure optimal growth capital and exit outcomes.
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{services.map((service, index) => (
							<motion.div
								key={service.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className='h-full hover:shadow-lg transition-shadow duration-300'>
									<CardContent className='p-8'>
										<div className='flex items-start gap-4 mb-6'>
											<div className='w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0'>
												<service.icon className='h-6 w-6 text-purple-600' />
											</div>
											<div className='flex-1'>
												<h3 className='text-xl font-semibold text-gray-300 mb-2'>
													{service.title}
												</h3>
												<p className='text-gray-500 mb-4'>
													{service.description}
												</p>
												<div className='flex items-center gap-2 mb-4'>
													<Clock className='h-4 w-4 text-purple-600' />
													<span className='text-sm font-medium text-purple-600'>
														{service.timeline}
													</span>
												</div>
											</div>
										</div>
										<div className='space-y-2'>
											{service.details.map((detail, detailIndex) => (
												<div
													key={detailIndex}
													className='flex items-start gap-2'
												>
													<CheckCircle className='h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0' />
													<span className='text-sm text-gray-500'>
														{detail}
													</span>
												</div>
											))}
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			{/* Investor Network */}
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
							Exclusive Investor Network
						</h2>
						<p className='text-lg text-gray-500 max-w-3xl mx-auto'>
							Access the region&apos;s most sophisticated investors through our
							established relationships with sovereign wealth funds, corporate VCs,
							and strategic institutional investors.
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{investorTypes.map((investor, index) => (
							<motion.div
								key={investor.category}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className='h-full'>
									<CardContent className='p-6'>
										<div className='flex items-start gap-3 mb-4'>
											<Award className='h-6 w-6 text-purple-600 mt-1 flex-shrink-0' />
											<h3 className='text-lg font-semibold text-gray-300'>
												{investor.category}
											</h3>
										</div>
										<div className='space-y-3'>
											<div>
												<span className='font-medium text-gray-700'>
													Examples:
												</span>
												<p className='text-gray-500 text-sm mt-1'>
													{investor.examples}
												</p>
											</div>
											<div>
												<span className='font-medium text-gray-700'>
													Investment Focus:
												</span>
												<p className='text-gray-500 text-sm mt-1'>
													{investor.focus}
												</p>
											</div>
											<div>
												<span className='font-medium text-gray-700'>
													Ticket Size:
												</span>
												<p className='text-gray-500 text-sm mt-1'>
													{investor.ticketSize}
												</p>
											</div>
											<div>
												<span className='font-medium text-gray-700'>
													Advantages:
												</span>
												<p className='text-gray-500 text-sm mt-1'>
													{investor.advantages}
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			{/* Exit Strategies */}
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
							Strategic Exit Pathways
						</h2>
						<p className='text-lg text-gray-500 max-w-3xl mx-auto'>
							We develop comprehensive exit strategies tailored to your business
							objectives, market conditions, and stakeholder preferences.
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{exitStrategies.map((strategy, index) => (
							<motion.div
								key={strategy.strategy}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className='h-full'>
									<CardContent className='p-6'>
										<div className='mb-4'>
											<h3 className='text-lg font-semibold text-gray-300 mb-2'>
												{strategy.strategy}
											</h3>
											<p className='text-gray-500 mb-3'>
												{strategy.description}
											</p>
											<div className='flex items-center gap-2 mb-4'>
												<Clock className='h-4 w-4 text-purple-600' />
												<span className='text-sm font-medium text-purple-600'>
													{strategy.timeline}
												</span>
											</div>
										</div>
										<div>
											<h4 className='font-medium text-gray-700 mb-3'>
												Key Advantages:
											</h4>
											<div className='space-y-2'>
												{strategy.advantages.map(
													(advantage, advantageIndex) => (
														<div
															key={advantageIndex}
															className='flex items-start gap-2'
														>
															<CheckCircle className='h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0' />
															<span className='text-sm text-gray-500'>
																{advantage}
															</span>
														</div>
													)
												)}
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			{/* Valuation Framework */}
			<section className='py-24 sm:py-32'>
				<Container>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h2 className='text-3xl font-bold text-gray-300 mb-6'>
								Valuation Optimization
							</h2>
							<p className='text-lg text-gray-500 mb-8'>
								Our systematic approach to valuation optimization ensures your
								company is positioned to achieve maximum market value at exit.
							</p>

							<div className='space-y-4'>
								{valuationFactors.map((factor) => (
									<div
										key={factor.factor}
										className='border-l-4 border-purple-500 pl-6'
									>
										<div className='flex items-center justify-between mb-2'>
											<h3 className='font-semibold text-gray-300'>
												{factor.factor}
											</h3>
											<span className='text-purple-600 font-medium'>
												{factor.weight}
											</span>
										</div>
										<p className='text-gray-500 text-sm'>
											{factor.description}
										</p>
									</div>
								))}
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<Card className='bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200'>
								<CardContent className='p-8'>
									<h3 className='text-2xl font-bold text-gray-300 mb-6'>
										Phase 4 Investment & Timeline
									</h3>
									<div className='space-y-6'>
										<div>
											<h4 className='font-semibold text-gray-300 mb-2'>
												Investment Range
											</h4>
											<p className='text-gray-500'>
												$2M+ depending on growth capital requirements and
												exit strategy complexity
											</p>
										</div>
										<div>
											<h4 className='font-semibold text-gray-300 mb-2'>
												Timeline
											</h4>
											<p className='text-gray-500'>
												12+ months for complete growth and exit strategy
												execution
											</p>
										</div>
										<div>
											<h4 className='font-semibold text-gray-300 mb-2'>
												Key Deliverables
											</h4>
											<div className='space-y-2'>
												<div className='flex items-start gap-2'>
													<CheckCircle className='h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0' />
													<span className='text-gray-500 text-sm'>
														Growth capital secured
													</span>
												</div>
												<div className='flex items-start gap-2'>
													<CheckCircle className='h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0' />
													<span className='text-gray-500 text-sm'>
														Strategic partnerships established
													</span>
												</div>
												<div className='flex items-start gap-2'>
													<CheckCircle className='h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0' />
													<span className='text-gray-500 text-sm'>
														Exit readiness achieved
													</span>
												</div>
												<div className='flex items-start gap-2'>
													<CheckCircle className='h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0' />
													<span className='text-gray-500 text-sm'>
														Valuation optimization completed
													</span>
												</div>
												<div className='flex items-start gap-2'>
													<CheckCircle className='h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0' />
													<span className='text-gray-500 text-sm'>
														Transaction execution support
													</span>
												</div>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					</div>
				</Container>
			</section>

			{/* Success Stories & CTA */}
			<section className='py-24 sm:py-32 bg-gradient-to-r from-purple-500 to-purple-700 text-white'>
				<Container>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h2 className='text-3xl font-bold mb-6'>
								Ready to Maximize Your Value?
							</h2>
							<p className='text-xl mb-8 opacity-90'>
								Complete your GCC expansion journey with strategic growth capital
								and exit advisory that delivers exceptional returns for all
								stakeholders.
							</p>
							<div className='flex flex-col sm:flex-row gap-4'>
								{/* <Button size='lg' variant='secondary' asChild>
									<Link href='/contact'>Begin Phase 4</Link>
								</Button> */}
								<Button
									size='lg'
									variant='outline'
									className='text-primary border-white hover:bg-white hover:text-purple-600'
									asChild
								>
									<Link href='/services'>View All Services</Link>
								</Button>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className='bg-white/10 rounded-2xl p-8'
						>
							<h3 className='text-xl font-bold mb-4'>Complete Journey Success</h3>
							<p className='opacity-90 mb-6'>
								Companies that complete all four phases of our partnership model
								achieve an average 8.5x return multiple and successful exits within
								18 months of Phase 4 initiation.
							</p>
							<div className='space-y-3'>
								<div className='flex justify-between items-center'>
									<span>Average Exit Multiple</span>
									<span className='font-bold'>8.5x</span>
								</div>
								<div className='flex justify-between items-center'>
									<span>Success Rate</span>
									<span className='font-bold'>95%</span>
								</div>
								<div className='flex justify-between items-center'>
									<span>Total Value Created</span>
									<span className='font-bold'>$2.5B+</span>
								</div>
							</div>
							<Button
								variant='outline'
								className='text-purple-600 border-white hover:bg-white hover:text-purple-600 mt-6 w-full'
								asChild
							>
								<Link href='/about'>
									Learn About Our Success
									<ArrowRight className='ml-2 h-4 w-4' />
								</Link>
							</Button>
						</motion.div>
					</div>
				</Container>
			</section>
		</div>
	)
}
