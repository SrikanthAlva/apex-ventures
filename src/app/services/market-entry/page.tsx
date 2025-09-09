'use client'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import {
	Building,
	FileText,
	DollarSign,
	Users,
	Clock,
	CheckCircle,
	ArrowRight,
	Briefcase,
	Shield,
	Target,
} from 'lucide-react'
import Link from 'next/link'

const services = [
	{
		icon: FileText,
		title: 'Commercial Registration',
		description: 'Fast-tracked business setup with 100% foreign ownership in most sectors',
		details: [
			'Complete regulatory compliance assessment',
			'Streamlined license applications',
			'Entity structure optimization',
			'Tax registration and setup',
		],
		timeline: '2-3 weeks',
	},
	{
		icon: DollarSign,
		title: 'RDIA Partnerships',
		description: 'Access to non-dilutive grants and government incentive programs',
		details: [
			'Grant opportunity identification',
			'Application preparation and submission',
			'Government relationship management',
			'Incentive optimization strategies',
		],
		timeline: '4-6 weeks',
	},
	{
		icon: Briefcase,
		title: 'Seed Capital Raising',
		description: 'Strategic introductions to regional investors and funding sources',
		details: [
			'Investor landscape mapping',
			'Pitch deck optimization',
			'Due diligence preparation',
			'Term sheet negotiation support',
		],
		timeline: '6-12 weeks',
	},
	{
		icon: Shield,
		title: 'Legal Foundation',
		description: 'Comprehensive legal setup including IP protection and contracts',
		details: [
			'Corporate governance structure',
			'Intellectual property registration',
			'Employment law compliance',
			'Standard contract templates',
		],
		timeline: '3-4 weeks',
	},
]

const processSteps = [
	{
		step: '01',
		title: 'Market Assessment',
		description:
			'Comprehensive analysis of regulatory requirements, market opportunity, and optimal entity structure for your specific industry and business model.',
		icon: Target,
	},
	{
		step: '02',
		title: 'Registration Strategy',
		description:
			'Development of accelerated registration pathway leveraging our established relationships with regulatory bodies and government entities.',
		icon: Building,
	},
	{
		step: '03',
		title: 'Capital Formation',
		description:
			'Parallel execution of grant applications and investor introductions to optimize your initial funding mix and minimize dilution.',
		icon: DollarSign,
	},
	{
		step: '04',
		title: 'Operational Setup',
		description:
			'Complete legal foundation establishment including banking, compliance systems, and initial team recruitment preparation.',
		icon: Users,
	},
]

const outcomes = [
	{
		metric: '100%',
		title: 'Ownership Retention',
		description: 'Maintain full ownership of your business with foreign ownership allowances',
	},
	{
		metric: '2-4 weeks',
		title: 'Setup Timeline',
		description: 'Complete commercial registration and operational readiness',
	},
	{
		metric: '$50K+',
		title: 'Grant Access',
		description: 'Average non-dilutive funding secured through RDIA partnerships',
	},
	{
		metric: '95%',
		title: 'Success Rate',
		description: 'Companies successfully established and operational within target timeline',
	},
]

const grantPrograms = [
	{
		name: 'Research & Development Incentives Authority (RDIA)',
		focus: 'Technology innovation and R&D activities',
		funding: 'Up to 200% of R&D costs',
		sectors: 'All technology sectors',
	},
	{
		name: 'Saudi Industrial Development Fund (SIDF)',
		focus: 'Industrial projects and manufacturing',
		funding: 'Up to 75% of project costs',
		sectors: 'Manufacturing, logistics, energy',
	},
	{
		name: 'National Industrial Development Center (NIDC)',
		focus: 'Industrial licensing and support',
		funding: 'Fee waivers and expedited processing',
		sectors: 'All industrial activities',
	},
	{
		name: 'Saudi Venture Capital Company (SVC)',
		focus: 'Startup ecosystem development',
		funding: 'Co-investment opportunities',
		sectors: 'Technology startups',
	},
]

export default function MarketEntryPage() {
	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<section className='py-24 sm:py-32 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white'>
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='max-w-4xl mx-auto'
					>
						<div className='flex items-center gap-3 mb-6'>
							<div className='w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center'>
								<span className='text-xl font-bold'>01</span>
							</div>
							<span className='text-xl opacity-90'>Phase 1</span>
						</div>
						<h1 className='text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6'>
							Market Entry &<br />
							<span className='text-blue-200'>Capital Formation</span>
						</h1>
						<p className='text-xl leading-8 mb-8 opacity-90'>
							Fast-tracked commercial registration with 100% foreign ownership, RDIA
							partnerships for non-dilutive grants, and seed-stage capital raising to
							establish your strong foundation in the GCC market.
						</p>
						<div className='flex flex-col sm:flex-row gap-4'>
							{/* <Button size='lg' variant='secondary' asChild>
								<Link href='/contact'>Start Your Market Entry</Link>
							</Button> */}
							<Button
								size='lg'
								variant='outline'
								className='text-primary border-white hover:bg-white hover:text-blue-600'
								asChild
							>
								<Link href='/services'>View All Services</Link>
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
							Measurable Outcomes
						</h2>
						<p className='text-lg text-gray-500 max-w-3xl mx-auto'>
							Our Phase 1 partnership delivers concrete results that position your
							company for immediate operations and long-term success in the GCC
							market.
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
										<div className='text-3xl font-bold text-blue-600 mb-2'>
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
							Comprehensive Setup Services
						</h2>
						<p className='text-lg text-gray-500 max-w-3xl mx-auto'>
							We handle every aspect of market entry, from regulatory compliance to
							capital formation, ensuring you can focus on your core business while we
							establish your foundation.
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
											<div className='w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0'>
												<service.icon className='h-6 w-6 text-blue-600' />
											</div>
											<div className='flex-1'>
												<h3 className='text-xl font-semibold text-gray-300 mb-2'>
													{service.title}
												</h3>
												<p className='text-gray-500 mb-4'>
													{service.description}
												</p>
												<div className='flex items-center gap-2 mb-4'>
													<Clock className='h-4 w-4 text-blue-600' />
													<span className='text-sm font-medium text-blue-600'>
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

			{/* Process Timeline */}
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
							Our Proven Process
						</h2>
						<p className='text-lg text-gray-500 max-w-3xl mx-auto'>
							A systematic approach developed over years of successful market entries,
							optimized for speed and compliance in the GCC regulatory environment.
						</p>
					</motion.div>

					<div className='space-y-8'>
						{processSteps.map((step, index) => (
							<motion.div
								key={step.step}
								initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className='overflow-hidden'>
									<CardContent className='p-8'>
										<div className='flex items-center gap-8'>
											<div className='flex-shrink-0'>
												<div className='w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl'>
													{step.step}
												</div>
											</div>
											<div className='flex-1'>
												<h3 className='text-xl font-semibold text-gray-300 mb-3'>
													{step.title}
												</h3>
												<p className='text-gray-500'>{step.description}</p>
											</div>
											<div className='flex-shrink-0'>
												<step.icon className='h-8 w-8 text-blue-600' />
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			{/* Grant Programs */}
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
							Government Grant Programs
						</h2>
						<p className='text-lg text-gray-500 max-w-3xl mx-auto'>
							Access significant non-dilutive funding through our established
							relationships with key government entities and incentive programs.
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{grantPrograms.map((program, index) => (
							<motion.div
								key={program.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className='h-full'>
									<CardContent className='p-6'>
										<h3 className='text-lg font-semibold text-gray-300 mb-3'>
											{program.name}
										</h3>
										<div className='space-y-3'>
											<div>
												<span className='font-medium text-gray-700'>
													Focus:
												</span>
												<span className='text-gray-500 ml-2'>
													{program.focus}
												</span>
											</div>
											<div>
												<span className='font-medium text-gray-700'>
													Funding:
												</span>
												<span className='text-gray-500 ml-2'>
													{program.funding}
												</span>
											</div>
											<div>
												<span className='font-medium text-gray-700'>
													Sectors:
												</span>
												<span className='text-gray-500 ml-2'>
													{program.sectors}
												</span>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			{/* Investment & Timeline */}
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
								Investment & Timeline
							</h2>
							<p className='text-lg text-gray-500 mb-8'>
								Phase 1 typically requires 2-4 weeks for completion with an
								investment range of $25K-$100K, depending on entity complexity and
								grant application scope.
							</p>

							<div className='space-y-6'>
								<div className='border-l-4 border-blue-500 pl-6'>
									<h3 className='font-semibold text-gray-300 mb-2'>Week 1</h3>
									<p className='text-gray-500'>
										Market assessment, entity structure design, and initial
										registrations
									</p>
								</div>
								<div className='border-l-4 border-blue-500 pl-6'>
									<h3 className='font-semibold text-gray-300 mb-2'>Week 2</h3>
									<p className='text-gray-500'>
										Commercial registration completion and banking setup
									</p>
								</div>
								<div className='border-l-4 border-blue-500 pl-6'>
									<h3 className='font-semibold text-gray-300 mb-2'>Week 3-4</h3>
									<p className='text-gray-500'>
										Grant applications, investor introductions, and operational
										readiness
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
							<Card className='bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200'>
								<CardContent className='p-8'>
									<h3 className='text-2xl font-bold text-gray-300 mb-6'>
										What&apos;s Included
									</h3>
									<div className='space-y-4'>
										<div className='flex items-start gap-3'>
											<CheckCircle className='h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0' />
											<span className='text-gray-700'>
												Complete commercial registration and licensing
											</span>
										</div>
										<div className='flex items-start gap-3'>
											<CheckCircle className='h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0' />
											<span className='text-gray-700'>
												Government grant application preparation
											</span>
										</div>
										<div className='flex items-start gap-3'>
											<CheckCircle className='h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0' />
											<span className='text-gray-700'>
												Legal foundation and IP protection setup
											</span>
										</div>
										<div className='flex items-start gap-3'>
											<CheckCircle className='h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0' />
											<span className='text-gray-700'>
												Banking and financial infrastructure
											</span>
										</div>
										<div className='flex items-start gap-3'>
											<CheckCircle className='h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0' />
											<span className='text-gray-700'>
												Strategic investor introductions
											</span>
										</div>
										<div className='flex items-start gap-3'>
											<CheckCircle className='h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0' />
											<span className='text-gray-700'>
												Compliance and regulatory guidance
											</span>
										</div>
										<div className='flex items-start gap-3'>
											<CheckCircle className='h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0' />
											<span className='text-gray-700'>
												Phase 2 transition planning
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
			<section className='py-24 sm:py-32 bg-gradient-to-r from-blue-500 to-blue-700 text-white'>
				<Container>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h2 className='text-3xl font-bold mb-6'>Ready for Market Entry?</h2>
							<p className='text-xl mb-8 opacity-90'>
								Begin your GCC expansion with our proven Phase 1 framework. Get
								established quickly and position for immediate operations.
							</p>
							<div className='flex flex-col sm:flex-row gap-4'>
								{/* <Button size='lg' variant='secondary' asChild>
									<Link href='/contact'>Start Phase 1</Link>
								</Button> */}
								<Button
									size='lg'
									variant='outline'
									className='text-blue-600 border-white hover:bg-white hover:text-blue-600'
									asChild
								>
									<Link href='/services/localization'>Next: Phase 2</Link>
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
							<h3 className='text-xl font-bold mb-4'>After Phase 1</h3>
							<p className='opacity-90 mb-6'>
								With your foundation established, Phase 2 focuses on localization
								and technology validation through R&D partnerships and pilot
								projects with national champions.
							</p>
							<Button
								variant='outline'
								className='text-blue-600 border-white hover:bg-white hover:text-blue-600'
								asChild
							>
								<Link href='/services/localization'>
									Learn About Phase 2
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
