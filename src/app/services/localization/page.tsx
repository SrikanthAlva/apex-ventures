'use client'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import {
	Users,
	Building2,
	FlaskConical,
	Clock,
	CheckCircle,
	ArrowRight,
	Lightbulb,
	Handshake,
	Award,
} from 'lucide-react'
import Link from 'next/link'

const services = [
	{
		icon: FlaskConical,
		title: 'R&D Partnerships',
		description: 'Strategic alliances with premier research institutions like KAUST',
		details: [
			'Joint research project development',
			'Technology validation frameworks',
			'Access to world-class facilities',
			'Co-publication opportunities',
		],
		timeline: '2-3 months',
	},
	{
		icon: Building2,
		title: 'Industrial Zone Selection',
		description: 'Optimal location identification for manufacturing and operations',
		details: [
			'Comprehensive site analysis',
			'Infrastructure assessment',
			'Regulatory zone evaluation',
			'Incentive package comparison',
		],
		timeline: '1-2 months',
	},
	{
		icon: Handshake,
		title: 'Pilot Projects',
		description: 'Strategic partnerships with national champions like Aramco and SABIC',
		details: [
			'Partnership opportunity identification',
			'Pilot project structuring',
			'Commercial validation support',
			'Scale-up pathway development',
		],
		timeline: '3-6 months',
	},
	{
		icon: Users,
		title: 'Local Team Development',
		description: 'Recruitment and development of high-caliber local talent',
		details: [
			'Talent acquisition strategy',
			'Cultural integration programs',
			'Skills development initiatives',
			'Leadership transition planning',
		],
		timeline: '2-4 months',
	},
]

const researchPartners = [
	{
		name: 'King Abdullah University of Science and Technology (KAUST)',
		focus: 'Advanced materials, energy, biotechnology, computing',
		capabilities: 'World-class research facilities, international faculty',
		programs: 'Joint research agreements, technology transfer',
	},
	{
		name: 'King Fahd University of Petroleum & Minerals (KFUPM)',
		focus: 'Energy, engineering, applied sciences',
		capabilities: 'Industry partnerships, applied research',
		programs: 'Collaborative R&D, student exchange',
	},
	{
		name: 'King Saud University (KSU)',
		focus: 'Medicine, engineering, business, sciences',
		capabilities: 'Comprehensive research infrastructure',
		programs: 'Innovation hubs, startup incubation',
	},
	{
		name: 'Saudi Aramco Technology Center',
		focus: 'Energy innovation, digital transformation',
		capabilities: 'Commercial-scale R&D, pilot facilities',
		programs: 'Joint ventures, technology licensing',
	},
]

const nationalChampions = [
	{
		company: 'Saudi Aramco',
		sector: 'Energy & Petrochemicals',
		opportunities: 'Digital transformation, sustainability solutions, new energy technologies',
		partnership: 'Joint ventures, pilot projects, technology validation',
	},
	{
		company: 'SABIC',
		sector: 'Chemicals & Advanced Materials',
		opportunities: 'Circular economy, advanced materials, process innovation',
		partnership: 'R&D collaboration, commercial pilots, market access',
	},
	{
		company: 'ACWA Power',
		sector: 'Renewable Energy & Water',
		opportunities: 'Clean energy technologies, water treatment, storage solutions',
		partnership: 'Technology deployment, project development, scaling',
	},
	{
		company: 'Saudi Telecom Company (STC)',
		sector: 'Telecommunications & Digital',
		opportunities: '5G applications, IoT solutions, digital services',
		partnership: 'Technology integration, market validation, commercial deployment',
	},
]

const outcomes = [
	{
		metric: '85%',
		title: 'Technology Validation Success',
		description: 'Pilot projects that advance to commercial deployment',
	},
	{
		metric: '3-6 months',
		title: 'Partnership Timeline',
		description: 'From initial contact to active collaboration',
	},
	{
		metric: '200%',
		title: 'R&D Cost Recovery',
		description: 'Average ROI on research partnerships through grants and collaborations',
	},
	{
		metric: '90%',
		title: 'Local Team Retention',
		description: 'Success rate in building stable, high-performing local teams',
	},
]

export default function LocalizationPage() {
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
								<span className='text-xl font-bold'>02</span>
							</div>
							<span className='text-xl opacity-90'>Phase 2</span>
						</div>
						<h1 className='text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6'>
							Localization &<br />
							<span className='text-emerald-200'>Technology Validation</span>
						</h1>
						<p className='text-xl leading-8 mb-8 opacity-90'>
							Embed your operations within the local ecosystem through R&D
							partnerships with premier institutions and pilot projects with national
							champions, ensuring authentic market integration and technology
							validation.
						</p>
						<div className='flex flex-col sm:flex-row gap-4'>
							{/* <Button size='lg' variant='secondary' asChild>
								<Link href='/contact'>Begin Localization</Link>
							</Button> */}
							<Button
								size='lg'
								variant='outline'
								className='text-emerald-600 border-white hover:bg-white hover:text-emerald-600'
								asChild
							>
								<Link href='/services/market-entry'>Previous: Phase 1</Link>
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
							Deep Market Integration Results
						</h2>
						<p className='text-lg text-gray-500 max-w-3xl mx-auto'>
							Phase 2 focuses on building authentic local relationships and validating
							your technology through partnerships with the region&apos;s most
							respected institutions and companies.
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
							Comprehensive Localization Services
						</h2>
						<p className='text-lg text-gray-500 max-w-3xl mx-auto'>
							Our Phase 2 services ensure your technology is validated and your
							operations are deeply integrated into the local business ecosystem.
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
												<h3 className='text-xl font-semibold text-gray-300 mb-2'>
													{service.title}
												</h3>
												<p className='text-gray-500 mb-4'>
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

			{/* Research Partners */}
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
							Premier Research Partnerships
						</h2>
						<p className='text-lg text-gray-500 max-w-3xl mx-auto'>
							Access world-class research facilities and collaborate with leading
							institutions to validate and enhance your technology solutions.
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{researchPartners.map((partner, index) => (
							<motion.div
								key={partner.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className='h-full'>
									<CardContent className='p-6'>
										<div className='flex items-start gap-3 mb-4'>
											<Lightbulb className='h-6 w-6 text-emerald-600 mt-1 flex-shrink-0' />
											<h3 className='text-lg font-semibold text-gray-300'>
												{partner.name}
											</h3>
										</div>
										<div className='space-y-3'>
											<div>
												<span className='font-medium text-gray-700'>
													Focus Areas:
												</span>
												<p className='text-gray-500 text-sm mt-1'>
													{partner.focus}
												</p>
											</div>
											<div>
												<span className='font-medium text-gray-700'>
													Capabilities:
												</span>
												<p className='text-gray-500 text-sm mt-1'>
													{partner.capabilities}
												</p>
											</div>
											<div>
												<span className='font-medium text-gray-700'>
													Partnership Programs:
												</span>
												<p className='text-gray-500 text-sm mt-1'>
													{partner.programs}
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

			{/* National Champions */}
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
							National Champion Partnerships
						</h2>
						<p className='text-lg text-gray-500 max-w-3xl mx-auto'>
							Pilot your solutions with the region&apos;s largest and most influential
							companies, gaining credibility and commercial validation.
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{nationalChampions.map((champion, index) => (
							<motion.div
								key={champion.company}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className='h-full hover:shadow-lg transition-shadow duration-300'>
									<CardContent className='p-6'>
										<div className='flex items-start gap-3 mb-4'>
											<Award className='h-6 w-6 text-emerald-600 mt-1 flex-shrink-0' />
											<div>
												<h3 className='text-lg font-semibold text-gray-300'>
													{champion.company}
												</h3>
												<p className='text-emerald-600 font-medium'>
													{champion.sector}
												</p>
											</div>
										</div>
										<div className='space-y-3'>
											<div>
												<span className='font-medium text-gray-700'>
													Opportunities:
												</span>
												<p className='text-gray-500 text-sm mt-1'>
													{champion.opportunities}
												</p>
											</div>
											<div>
												<span className='font-medium text-gray-700'>
													Partnership Types:
												</span>
												<p className='text-gray-500 text-sm mt-1'>
													{champion.partnership}
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

			{/* Localization Process */}
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
								Strategic Localization Process
							</h2>
							<p className='text-lg text-gray-500 mb-8'>
								Our systematic approach ensures authentic integration into the GCC
								ecosystem while validating your technology for regional market
								requirements.
							</p>

							<div className='space-y-6'>
								<div className='border-l-4 border-emerald-500 pl-6'>
									<h3 className='font-semibold text-gray-300 mb-2'>
										Months 1-2: Foundation
									</h3>
									<p className='text-gray-500'>
										Research partner identification, facility assessment, and
										team recruitment initiation
									</p>
								</div>
								<div className='border-l-4 border-emerald-500 pl-6'>
									<h3 className='font-semibold text-gray-300 mb-2'>
										Months 2-4: Partnerships
									</h3>
									<p className='text-gray-500'>
										R&D agreements execution, pilot project structuring, and
										local team development
									</p>
								</div>
								<div className='border-l-4 border-emerald-500 pl-6'>
									<h3 className='font-semibold text-gray-300 mb-2'>
										Months 4-6: Validation
									</h3>
									<p className='text-gray-500'>
										Technology validation, commercial pilots, and scale-up
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
									<h3 className='text-2xl font-bold text-gray-300 mb-6'>
										Investment & Outcomes
									</h3>
									<div className='space-y-6'>
										<div>
											<h4 className='font-semibold text-gray-300 mb-2'>
												Investment Range
											</h4>
											<p className='text-gray-500'>
												$100K - $500K depending on technology complexity and
												partnership scope
											</p>
										</div>
										<div>
											<h4 className='font-semibold text-gray-300 mb-2'>
												Timeline
											</h4>
											<p className='text-gray-500'>
												3-6 months for complete localization and validation
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
														Active R&D partnerships
													</span>
												</div>
												<div className='flex items-start gap-2'>
													<CheckCircle className='h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0' />
													<span className='text-gray-500 text-sm'>
														Technology validation reports
													</span>
												</div>
												<div className='flex items-start gap-2'>
													<CheckCircle className='h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0' />
													<span className='text-gray-500 text-sm'>
														Pilot project agreements
													</span>
												</div>
												<div className='flex items-start gap-2'>
													<CheckCircle className='h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0' />
													<span className='text-gray-500 text-sm'>
														Local team establishment
													</span>
												</div>
												<div className='flex items-start gap-2'>
													<CheckCircle className='h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0' />
													<span className='text-gray-500 text-sm'>
														Operational facility setup
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
								Ready for Deep Market Integration?
							</h2>
							<p className='text-xl mb-8 opacity-90'>
								Build authentic partnerships with premier institutions and national
								champions while validating your technology for the GCC market.
							</p>
							<div className='flex flex-col sm:flex-row gap-4'>
								{/* <Button size='lg' variant='secondary' asChild>
									<Link href='/contact'>Begin Phase 2</Link>
								</Button> */}
								<Button
									size='lg'
									variant='outline'
									className='text-emerald-600 border-white hover:bg-white hover:text-emerald-600'
									asChild
								>
									<Link href='/services/scaling'>Next: Phase 3</Link>
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
							<h3 className='text-xl font-bold mb-4'>After Phase 2</h3>
							<p className='opacity-90 mb-6'>
								With your technology validated and local partnerships established,
								Phase 3 focuses on commercial scaling through customer acquisition
								and operational excellence.
							</p>
							<Button
								variant='outline'
								className='text-emerald-600 border-white hover:bg-white hover:text-emerald-600'
								asChild
							>
								<Link href='/services/scaling'>
									Explore Phase 3
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
