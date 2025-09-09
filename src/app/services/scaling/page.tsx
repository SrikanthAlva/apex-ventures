'use client'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import {
	Users,
	Megaphone,
	Building,
	Clock,
	CheckCircle,
	ArrowRight,
	Target,
	Handshake,
	Globe,
} from 'lucide-react'
import Link from 'next/link'

const services = [
	{
		icon: Target,
		title: 'Customer Acquisition Strategy',
		description: 'Systematic approach to building your customer pipeline in the GCC',
		details: [
			'Market segmentation and targeting',
			'Sales strategy development',
			'Customer journey optimization',
			'Pipeline management systems',
		],
		timeline: '2-3 months',
	},
	{
		icon: Users,
		title: 'Venture-as-a-Service Model',
		description: 'Comprehensive operational support to accelerate your business growth',
		details: [
			'Dedicated operational team',
			'Business process optimization',
			'Performance monitoring systems',
			'Scalability framework development',
		],
		timeline: '6-12 months',
	},
	{
		icon: Megaphone,
		title: 'Strategic Communications',
		description: 'Build brand awareness and thought leadership in the GCC market',
		details: [
			'Brand positioning strategy',
			'Content marketing programs',
			'Public relations campaigns',
			'Industry speaking opportunities',
		],
		timeline: '3-6 months',
	},
	{
		icon: Building,
		title: 'Government Relations',
		description: 'Navigate regulatory environment and build strategic government partnerships',
		details: [
			'Regulatory compliance management',
			'Government stakeholder engagement',
			'Policy advocacy support',
			'Public sector partnership development',
		],
		timeline: 'Ongoing',
	},
]

const customerSegments = [
	{
		segment: 'Large Enterprises',
		description: 'National champions and multinational corporations',
		approach:
			'C-level introductions, pilot project proposals, strategic partnership development',
		examples: "Aramco, SABIC, STC, ACWA Power, Ma'aden",
	},
	{
		segment: 'Government Entities',
		description: 'Ministries, agencies, and public sector organizations',
		approach: 'Regulatory alignment, tender participation, policy demonstration projects',
		examples: 'Ministry of Energy, MISA, NEOM, PIF portfolio companies',
	},
	{
		segment: 'Mid-Market Companies',
		description: 'Growing regional businesses and family offices',
		approach: 'Value proposition demonstration, ROI-focused presentations, partnership models',
		examples: 'Regional industrial groups, family business conglomerates',
	},
	{
		segment: 'Innovation Hubs',
		description: 'Research centers, incubators, and technology parks',
		approach: 'Technology showcases, collaboration agreements, ecosystem integration',
		examples: 'KAUST, Thuwal, KACST, various tech parks',
	},
]

const ventureServices = [
	{
		category: 'Operations Management',
		services: [
			'Daily operational oversight',
			'Performance KPI tracking',
			'Process optimization',
			'Quality assurance systems',
		],
	},
	{
		category: 'Business Development',
		services: [
			'Strategic partnership facilitation',
			'Market expansion planning',
			'Revenue optimization',
			'Growth strategy execution',
		],
	},
	{
		category: 'Financial Management',
		services: [
			'Financial planning and analysis',
			'Cash flow management',
			'Investment planning',
			'Funding round preparation',
		],
	},
	{
		category: 'Talent Management',
		services: [
			'Leadership development',
			'Skill gap assessment',
			'Training program delivery',
			'Performance management',
		],
	},
]

const outcomes = [
	{
		metric: '300%',
		title: 'Revenue Growth',
		description: 'Average revenue increase within 12 months of Phase 3 initiation',
	},
	{
		metric: '150+',
		title: 'Customer Introductions',
		description: 'High-quality prospects introduced per engagement',
	},
	{
		metric: '75%',
		title: 'Conversion Rate',
		description: 'Prospects that advance to serious commercial discussions',
	},
	{
		metric: '18 months',
		title: 'Average Scale Timeline',
		description: 'From pilot to commercial deployment at scale',
	},
]

export default function ScalingPage() {
	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<section className='py-24 sm:py-32 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 text-white'>
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='max-w-4xl mx-auto'
					>
						<div className='flex items-center gap-3 mb-6'>
							<div className='w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center'>
								<span className='text-xl font-bold'>03</span>
							</div>
							<span className='text-xl opacity-90'>Phase 3</span>
						</div>
						<h1 className='text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6'>
							Commercial Scaling &<br />
							<span className='text-emerald-200'>Operations</span>
						</h1>
						<p className='text-xl leading-8 mb-8 opacity-90'>
							Drive commercial traction through high-level customer introductions and
							our unique &apos;Venture-as-a-Service&apos; operational support model,
							accelerating your path to sustainable revenue growth.
						</p>
						<div className='flex flex-col sm:flex-row gap-4'>
							{/* <Button size='lg' variant='secondary' asChild>
								<Link href='/contact'>Accelerate Growth</Link>
							</Button> */}
							<Button
								size='lg'
								variant='outline'
								className='text-emerald-600 border-white hover:bg-white hover:text-emerald-600'
								asChild
							>
								<Link href='/services/localization'>Previous: Phase 2</Link>
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
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6'>
							Accelerated Commercial Growth
						</h2>
						<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
							Phase 3 transforms your validated technology into a commercially
							successful business through systematic customer acquisition and
							operational excellence.
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
										<div className='text-3xl font-bold text-emerald-600 mb-2'>
											{outcome.metric}
										</div>
										<h3 className='text-lg font-semibold text-gray-900 mb-2'>
											{outcome.title}
										</h3>
										<p className='text-gray-600 text-sm'>
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
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6'>
							Comprehensive Scaling Support
						</h2>
						<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
							Our Phase 3 services combine strategic customer acquisition with
							hands-on operational support to drive sustainable commercial growth.
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
											<div className='w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0'>
												<service.icon className='h-6 w-6 text-emerald-600' />
											</div>
											<div className='flex-1'>
												<h3 className='text-xl font-semibold text-gray-900 mb-2'>
													{service.title}
												</h3>
												<p className='text-gray-600 mb-4'>
													{service.description}
												</p>
												<div className='flex items-center gap-2 mb-4'>
													<Clock className='h-4 w-4 text-emerald-600' />
													<span className='text-sm font-medium text-emerald-600'>
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
													<span className='text-sm text-gray-600'>
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

			{/* Customer Segments */}
			<section className='py-24 sm:py-32'>
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='text-center mb-16'
					>
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6'>
							Strategic Customer Segments
						</h2>
						<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
							We leverage our extensive network to connect you with the right
							customers across different market segments in the GCC region.
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{customerSegments.map((segment, index) => (
							<motion.div
								key={segment.segment}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className='h-full'>
									<CardContent className='p-6'>
										<h3 className='text-lg font-semibold text-gray-900 mb-3'>
											{segment.segment}
										</h3>
										<p className='text-gray-600 mb-4'>{segment.description}</p>
										<div className='space-y-3'>
											<div>
												<span className='font-medium text-gray-700'>
													Approach:
												</span>
												<p className='text-gray-600 text-sm mt-1'>
													{segment.approach}
												</p>
											</div>
											<div>
												<span className='font-medium text-gray-700'>
													Examples:
												</span>
												<p className='text-gray-600 text-sm mt-1'>
													{segment.examples}
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

			{/* Venture-as-a-Service */}
			<section className='py-24 sm:py-32 bg-gray-50'>
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='text-center mb-16'
					>
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6'>
							Venture-as-a-Service Model
						</h2>
						<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
							Our unique operational support model provides dedicated resources to
							accelerate your business growth while maintaining focus on your core
							technology and vision.
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{ventureServices.map((category, index) => (
							<motion.div
								key={category.category}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className='h-full'>
									<CardContent className='p-6'>
										<h3 className='text-lg font-semibold text-gray-900 mb-4'>
											{category.category}
										</h3>
										<div className='space-y-2'>
											{category.services.map((service, serviceIndex) => (
												<div
													key={serviceIndex}
													className='flex items-start gap-2'
												>
													<CheckCircle className='h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0' />
													<span className='text-sm text-gray-600'>
														{service}
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

			{/* Strategic Communications & Government Relations */}
			<section className='py-24 sm:py-32'>
				<Container>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h2 className='text-3xl font-bold text-gray-900 mb-6'>
								Strategic Communications
							</h2>
							<p className='text-lg text-gray-600 mb-8'>
								Build thought leadership and brand awareness in the GCC market
								through strategic positioning and targeted communications campaigns.
							</p>

							<div className='space-y-4'>
								<div className='flex items-start gap-3'>
									<Megaphone className='h-5 w-5 text-emerald-600 mt-1 flex-shrink-0' />
									<div>
										<h4 className='font-semibold text-gray-900 mb-1'>
											Brand Positioning
										</h4>
										<p className='text-gray-600 text-sm'>
											Develop compelling messaging that resonates with GCC
											stakeholders
										</p>
									</div>
								</div>
								<div className='flex items-start gap-3'>
									<Globe className='h-5 w-5 text-emerald-600 mt-1 flex-shrink-0' />
									<div>
										<h4 className='font-semibold text-gray-900 mb-1'>
											Media Relations
										</h4>
										<p className='text-gray-600 text-sm'>
											Strategic media placements and thought leadership
											articles
										</p>
									</div>
								</div>
								<div className='flex items-start gap-3'>
									<Users className='h-5 w-5 text-emerald-600 mt-1 flex-shrink-0' />
									<div>
										<h4 className='font-semibold text-gray-900 mb-1'>
											Industry Events
										</h4>
										<p className='text-gray-600 text-sm'>
											Speaking opportunities and strategic conference
											participation
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
							<h2 className='text-3xl font-bold text-gray-900 mb-6'>
								Government Relations
							</h2>
							<p className='text-lg text-gray-600 mb-8'>
								Navigate the regulatory environment and build strategic partnerships
								with government entities to accelerate your business growth.
							</p>

							<div className='space-y-4'>
								<div className='flex items-start gap-3'>
									<Building className='h-5 w-5 text-emerald-600 mt-1 flex-shrink-0' />
									<div>
										<h4 className='font-semibold text-gray-900 mb-1'>
											Regulatory Navigation
										</h4>
										<p className='text-gray-600 text-sm'>
											Ongoing compliance management and regulatory advocacy
										</p>
									</div>
								</div>
								<div className='flex items-start gap-3'>
									<Handshake className='h-5 w-5 text-emerald-600 mt-1 flex-shrink-0' />
									<div>
										<h4 className='font-semibold text-gray-900 mb-1'>
											Stakeholder Engagement
										</h4>
										<p className='text-gray-600 text-sm'>
											High-level introductions to key government
											decision-makers
										</p>
									</div>
								</div>
								<div className='flex items-start gap-3'>
									<Target className='h-5 w-5 text-emerald-600 mt-1 flex-shrink-0' />
									<div>
										<h4 className='font-semibold text-gray-900 mb-1'>
											Policy Participation
										</h4>
										<p className='text-gray-600 text-sm'>
											Involvement in policy development and industry working
											groups
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</Container>
			</section>

			{/* Investment & Timeline */}
			<section className='py-24 sm:py-32 bg-gray-50'>
				<Container>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h2 className='text-3xl font-bold text-gray-900 mb-6'>
								Investment & Timeline
							</h2>
							<p className='text-lg text-gray-600 mb-8'>
								Phase 3 typically spans 6-12 months with an investment range of
								$500K-$2M, scaling with your business growth and market traction.
							</p>

							<div className='space-y-6'>
								<div className='border-l-4 border-emerald-500 pl-6'>
									<h3 className='font-semibold text-gray-900 mb-2'>
										Months 1-3: Foundation
									</h3>
									<p className='text-gray-600'>
										Customer acquisition strategy, team scaling, and operational
										systems
									</p>
								</div>
								<div className='border-l-4 border-emerald-500 pl-6'>
									<h3 className='font-semibold text-gray-900 mb-2'>
										Months 4-8: Acceleration
									</h3>
									<p className='text-gray-600'>
										Active customer engagement, revenue generation, and market
										expansion
									</p>
								</div>
								<div className='border-l-4 border-emerald-500 pl-6'>
									<h3 className='font-semibold text-gray-900 mb-2'>
										Months 9-12: Optimization
									</h3>
									<p className='text-gray-600'>
										Process optimization, scalability enhancement, and Phase 4
										preparation
									</p>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<Card className='bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200'>
								<CardContent className='p-8'>
									<h3 className='text-2xl font-bold text-gray-900 mb-6'>
										Phase 3 Deliverables
									</h3>
									<div className='space-y-4'>
										<div className='flex items-start gap-3'>
											<CheckCircle className='h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0' />
											<span className='text-gray-700'>
												Active customer pipeline with 150+ qualified
												prospects
											</span>
										</div>
										<div className='flex items-start gap-3'>
											<CheckCircle className='h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0' />
											<span className='text-gray-700'>
												Revenue generation and commercial traction
											</span>
										</div>
										<div className='flex items-start gap-3'>
											<CheckCircle className='h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0' />
											<span className='text-gray-700'>
												Optimized operational processes and systems
											</span>
										</div>
										<div className='flex items-start gap-3'>
											<CheckCircle className='h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0' />
											<span className='text-gray-700'>
												Established brand presence and thought leadership
											</span>
										</div>
										<div className='flex items-start gap-3'>
											<CheckCircle className='h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0' />
											<span className='text-gray-700'>
												Government relationships and regulatory compliance
											</span>
										</div>
										<div className='flex items-start gap-3'>
											<CheckCircle className='h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0' />
											<span className='text-gray-700'>
												Scalable team and management structure
											</span>
										</div>
										<div className='flex items-start gap-3'>
											<CheckCircle className='h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0' />
											<span className='text-gray-700'>
												Preparation for growth capital raising
											</span>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					</div>
				</Container>
			</section>

			{/* Next Phase & CTA */}
			<section className='py-24 sm:py-32 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white'>
				<Container>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h2 className='text-3xl font-bold mb-6'>
								Ready to Scale Your Business?
							</h2>
							<p className='text-xl mb-8 opacity-90'>
								Transform your validated technology into a commercially successful
								business with our comprehensive scaling support and customer
								acquisition expertise.
							</p>
							<div className='flex flex-col sm:flex-row gap-4'>
								{/* <Button size='lg' variant='secondary' asChild>
									<Link href='/contact'>Begin Scaling</Link>
								</Button> */}
								<Button
									size='lg'
									variant='outline'
									className='text-emerald-600 border-white hover:bg-white hover:text-emerald-600'
									asChild
								>
									<Link href='/services/growth-exit'>Next: Phase 4</Link>
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
							<h3 className='text-xl font-bold mb-4'>After Phase 3</h3>
							<p className='opacity-90 mb-6'>
								With commercial traction established, Phase 4 focuses on securing
								growth capital and strategic exit advisory to maximize shareholder
								value.
							</p>
							<Button
								variant='outline'
								className='text-emerald-600 border-white hover:bg-white hover:text-emerald-600'
								asChild
							>
								<Link href='/services/growth-exit'>
									Explore Phase 4
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
