'use client'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import {
	Globe,
	Target,
	Users,
	TrendingUp,
	MapPin,
	Handshake,
	Award,
	Briefcase,
	ExternalLink,
	GraduationCap,
	Calendar,
} from 'lucide-react'
import Link from 'next/link'

const stats = [
	{
		icon: Globe,
		metric: '$2.8T',
		label: 'GCC GDP',
		description: 'Combined economic power of the Gulf region',
	},
	{
		icon: TrendingUp,
		metric: '40%',
		label: 'GDP Growth Target',
		description: 'Saudi Vision 2030 ambitious expansion goals',
	},
	{
		icon: Users,
		metric: '200+',
		label: 'Strategic Partners',
		description: 'Government entities, corporations, and investors',
	},
	{
		icon: Award,
		metric: '$500M+',
		label: 'Value Created',
		description: 'For our portfolio companies to date',
	},
]

const marketOpportunities = [
	{
		title: 'Massive Government Investment',
		description: 'Over $500B committed through NEOM, Red Sea Project, and QIDDIYA initiatives',
		icon: Briefcase,
	},
	{
		title: 'Foreign Investment Incentives',
		description:
			'100% foreign ownership in most sectors, streamlined licensing, and tax incentives',
		icon: Handshake,
	},
	{
		title: 'Strategic Geographic Position',
		description: 'Gateway between Europe, Asia, and Africa with world-class infrastructure',
		icon: MapPin,
	},
	{
		title: 'Young, Educated Population',
		description: '70% under 35 years old with increasing tech adoption and disposable income',
		icon: Users,
	},
]

const values = [
	{
		title: 'Strategic Execution',
		description:
			"We don't just provide advice - we execute alongside you, ensuring every strategic initiative delivers measurable results.",
		icon: Target,
	},
	{
		title: 'Local Integration',
		description:
			'Deep understanding of GCC business culture, government relations, and market dynamics built over years of successful partnerships.',
		icon: Globe,
	},
	{
		title: 'Long-term Commitment',
		description:
			'We partner with companies for the entire growth journey, from market entry through strategic exit.',
		icon: Handshake,
	},
]

const teamMembers = [
	{
		name: 'Ben Queisser',
		title: 'Co-Founder & CEO',
		bio: 'Seasoned technology and innovation executive with expertise in the energy sector and international business development. Currently Head of Technology & Innovation for Hydrogen & Green Fuels at NEOM, with extensive experience in scaling operations across global markets.',
		expertise: [
			'Technology Innovation',
			'Energy & Sustainability',
			'International Operations',
			'Business Development',
			'Strategic Partnerships',
		],
		education: 'Advanced Technology & Business Leadership',
		experience: '15+ years in technology innovation and international business',
		previousRoles: [
			'Head of Technology & Innovation - NEOM (Current)',
			'CEO - Neorizon (2019-2021)',
			'Business Unit Director - ERIKS UK & Ireland (2017-2019)',
			'Director of International Operations - Henry Schein (2012-2017)',
			'Strategic Account Manager - Cummins Inc. (2011-2012)',
		],
		linkedIn: 'https://www.linkedin.com/in/ben-queisser/',
		image: '/team/ben-queisser.jpg',
	},
	{
		name: 'Taimour Raouf',
		title: 'Co-Founder',
		bio: 'Extensive experience in marketing and corporate communications within the banking and financial services sector. Former Executive Senior Manager and Head of Marketing and Corporate Communications at Ithmaar Bank BSC, and Head of Corporate Communications at Aluminium Bahrain.',
		expertise: [
			'Corporate Communications',
			'Marketing Strategy',
			'Banking & Financial Services',
			'GCC Market Development',
			'Government Relations',
		],
		education: 'Bachelor of Science, University of Bahrain',
		experience: '20+ years in corporate communications and marketing',
		previousRoles: [
			'Head of Marketing & Corporate Communications - Ithmaar Bank (2008-2022)',
			'Head of Corporate Communications - Aluminium Bahrain (2003-2008)',
			'News Editor - ANIS',
			'Deputy Editor Features - Bahrain Tribune',
		],
		linkedIn: 'https://www.linkedin.com/in/taimourraouf/',
		image: '/team/taimour-raouf.jpg',
	},
]

export default function AboutPage() {
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
							Bridging Innovation with
							<span className='text-accent block mt-2'>Strategic Execution</span>
						</h1>
						<p className='text-xl leading-8 mb-8 opacity-90'>
							We are the dedicated execution partner for technology companies
							expanding into the Gulf Cooperation Council, combining deep local
							expertise with proven frameworks for sustainable growth.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							{/* <Button size='lg' variant='secondary' asChild>
								<Link href='/contact'>Start Your GCC Journey</Link>
							</Button> */}
							<Button
								size='lg'
								variant='outline'
								className='border-white text-primary'
								asChild
							>
								<Link href='/services'>Explore Our Services</Link>
							</Button>
						</div>
					</motion.div>
				</Container>
			</section>

			{/* Mission & Vision */}
			<section className='py-24 sm:py-32'>
				<Container>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.2 }}
							viewport={{ once: true }}
						>
							<h2 className='text-3xl font-bold text-gray-300 mb-6'>Our Mission</h2>
							<p className='text-lg text-gray-500 mb-6'>
								To be the definitive strategic execution partner for innovative
								companies entering the GCC market, providing end-to-end support that
								transforms market entry challenges into competitive advantages.
							</p>
							<p className='text-gray-500'>
								We believe that successful market expansion requires more than just
								capital and good intentions - it demands deep local expertise,
								strategic partnerships, and hands-on execution support throughout
								the entire growth journey.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<h2 className='text-3xl font-bold text-gray-300 mb-6'>Our Vision</h2>
							<p className='text-lg text-gray-500 mb-6'>
								To establish the GCC as the global hub for technological innovation
								and entrepreneurship, where the world&apos;s most promising
								companies achieve accelerated growth and create lasting impact.
							</p>
							<p className='text-gray-500'>
								Through our comprehensive support ecosystem, we envision a future
								where breakthrough technologies seamlessly integrate into the
								GCC&apos;s economic transformation, driving Vision 2030 objectives
								while generating exceptional returns for all stakeholders.
							</p>
						</motion.div>
					</div>
				</Container>
			</section>

			{/* Market Statistics */}
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
							The GCC Opportunity
						</h2>
						<p className='text-lg text-gray-500 max-w-3xl mx-auto'>
							The Gulf Cooperation Council represents one of the world&apos;s most
							dynamic economic regions, with unprecedented investment in innovation
							and diversification.
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
						{stats.map((stat, index) => (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className='h-full'>
									<CardContent className='p-6 text-center'>
										<stat.icon className='h-12 w-12 text-primary mx-auto mb-4' />
										<div className='text-3xl font-bold text-gray-300 mb-2'>
											{stat.metric}
										</div>
										<div className='text-lg font-semibold text-gray-200 mb-2'>
											{stat.label}
										</div>
										<p className='text-sm text-gray-500'>{stat.description}</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>

					{/* Market Opportunities Grid */}
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{marketOpportunities.map((opportunity, index) => (
							<motion.div
								key={opportunity.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className='h-full hover:shadow-lg transition-shadow duration-300'>
									<CardContent className='p-6'>
										<opportunity.icon className='h-8 w-8 text-primary mb-4' />
										<h3 className='text-xl font-semibold text-gray-300 mb-3'>
											{opportunity.title}
										</h3>
										<p className='text-gray-500'>{opportunity.description}</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			{/* Saudi Arabia Strategic Focus */}
			<section className='py-24 sm:py-32'>
				<Container>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h2 className='text-3xl font-bold text-gray-300 sm:text-4xl mb-6'>
								Why Saudi Arabia is Our Strategic Focus
							</h2>
							<p className='text-lg text-gray-500 mb-6'>
								Saudi Arabia represents 50% of the GCC&apos;s GDP and is undergoing
								the world&apos;s most ambitious economic transformation through
								Vision 2030. This creates unprecedented opportunities for innovative
								companies.
							</p>
							<div className='space-y-4 mb-8'>
								<div className='flex items-start gap-3'>
									<div className='w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0' />
									<p className='text-gray-500'>
										<strong>$500B+ in megaprojects:</strong> NEOM, Red Sea
										Project, QIDDIYA, and other Vision 2030 initiatives
									</p>
								</div>
								<div className='flex items-start gap-3'>
									<div className='w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0' />
									<p className='text-gray-500'>
										<strong>Government commitment:</strong> $50B+ allocated
										annually to diversification efforts
									</p>
								</div>
								<div className='flex items-start gap-3'>
									<div className='w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0' />
									<p className='text-gray-500'>
										<strong>Strategic location:</strong> Gateway to 2 billion
										consumers across MENA, Africa, and Asia
									</p>
								</div>
								<div className='flex items-start gap-3'>
									<div className='w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0' />
									<p className='text-gray-500'>
										<strong>Business-friendly reforms:</strong> 100% foreign
										ownership, streamlined regulations, and investment
										incentives
									</p>
								</div>
							</div>
							{/* <Button size='lg' asChild>
								<Link href='/sectors'>Explore Key Sectors</Link>
							</Button> */}
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className='bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8'
						>
							<h3 className='text-2xl font-bold text-gray-300 mb-6'>
								Vision 2030 Alignment
							</h3>
							<div className='space-y-6'>
								<div>
									<h4 className='font-semibold text-gray-300 mb-2'>
										Economic Diversification
									</h4>
									<p className='text-gray-500 text-sm'>
										Reducing oil dependency through technology, tourism,
										entertainment, and renewable energy sectors
									</p>
								</div>
								<div>
									<h4 className='font-semibold text-gray-300 mb-2'>
										Private Sector Growth
									</h4>
									<p className='text-gray-500 text-sm'>
										Increasing private sector contribution to GDP from 40% to
										65% by 2030
									</p>
								</div>
								<div>
									<h4 className='font-semibold text-gray-300 mb-2'>
										Innovation Ecosystem
									</h4>
									<p className='text-gray-500 text-sm'>
										Building world-class research institutes, innovation hubs,
										and technology partnerships
									</p>
								</div>
								<div>
									<h4 className='font-semibold text-gray-300 mb-2'>
										Foreign Investment
									</h4>
									<p className='text-gray-500 text-sm'>
										Targeting $427B in foreign direct investment by 2030 through
										strategic initiatives
									</p>
								</div>
							</div>
						</motion.div>
					</div>
				</Container>
			</section>

			{/* Our Values */}
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
							What Sets Us Apart
						</h2>
						<p className='text-lg text-gray-500 max-w-3xl mx-auto'>
							Our approach combines deep local expertise with proven international
							business practices, ensuring your expansion is both strategically sound
							and culturally aligned.
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{values.map((value, index) => (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.2 }}
								viewport={{ once: true }}
							>
								<Card className='h-full text-center'>
									<CardContent className='p-8'>
										<value.icon className='h-12 w-12 text-primary mx-auto mb-6' />
										<h3 className='text-xl font-semibold text-gray-300 mb-4'>
											{value.title}
										</h3>
										<p className='text-gray-500'>{value.description}</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			{/* Team Section */}
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
							Leadership Team
						</h2>
						<p className='text-lg text-gray-500 max-w-3xl mx-auto'>
							Our leadership brings together decades of experience in international
							business expansion, GCC market development, and technology
							commercialization. Combined, they bring over 35 years of expertise in
							strategic execution.
						</p>
					</motion.div>

					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
						{teamMembers.map((member, index) => (
							<motion.div
								key={member.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.2 }}
								viewport={{ once: true }}
							>
								<Card className='h-full hover:shadow-lg transition-shadow duration-300'>
									<CardContent className='p-8'>
										{/* Profile Header */}
										<div className='flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6'>
											<div className='relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0'>
												<div className='w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-4 border-white shadow-lg'>
													<div className='w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent flex items-center justify-center'>
														<span className='text-white font-bold text-lg sm:text-xl'>
															{member.name
																.split(' ')
																.map((n) => n[0])
																.join('')}
														</span>
													</div>
												</div>
											</div>
											<div className='text-center sm:text-left flex-1'>
												<h3 className='text-2xl font-bold text-gray-300 mb-2'>
													{member.name}
												</h3>
												<p className='text-lg font-semibold text-primary mb-2'>
													{member.title}
												</p>
												<div className='flex items-center justify-center sm:justify-start gap-2 text-gray-500 mb-2'>
													<Calendar className='w-4 h-4' />
													<span className='text-sm'>
														{member.experience}
													</span>
												</div>
												<div className='flex items-center justify-center sm:justify-start gap-2 text-gray-500'>
													<GraduationCap className='w-4 h-4' />
													<span className='text-sm'>
														{member.education}
													</span>
												</div>
											</div>
										</div>

										{/* Biography */}
										<p className='text-gray-500 mb-6 leading-relaxed'>
											{member.bio}
										</p>

										{/* Expertise */}
										<div className='mb-6'>
											<h4 className='font-semibold text-gray-300 mb-3'>
												Core Expertise
											</h4>
											<div className='flex flex-wrap gap-2'>
												{member.expertise.map((skill) => (
													<span
														key={skill}
														className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium'
													>
														{skill}
													</span>
												))}
											</div>
										</div>

										{/* Previous Roles */}
										{/* <div className='mb-6'>
											<h4 className='font-semibold text-gray-300 mb-3'>
												Career Highlights
											</h4>
											<div className='space-y-2'>
												{member.previousRoles
													.slice(0, 3)
													.map((role, roleIndex) => (
														<div
															key={roleIndex}
															className='flex items-start gap-2'
														>
															<div className='w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0' />
															<span className='text-sm text-gray-500'>
																{role}
															</span>
														</div>
													))}
											</div>
										</div> */}

										{/* LinkedIn Link */}
										<div className='flex justify-center sm:justify-start'>
											<Button variant='outline' size='sm' asChild>
												<Link
													href={member.linkedIn}
													target='_blank'
													rel='noopener noreferrer'
													className='flex items-center gap-2'
												>
													<ExternalLink className='w-4 h-4' />
													View LinkedIn Profile
												</Link>
											</Button>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>

					{/* Additional Team Info */}
					{/* <motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
						className='mt-16 text-center'
					>
						<Card className='max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5'>
							<CardContent className='p-8'>
								<h3 className='text-xl font-semibold text-gray-300 mb-4'>
									Advisory Network & Extended Team
								</h3>
								<p className='text-gray-500 mb-6'>
									Beyond our core leadership, Apex Ventures leverages a robust
									network of strategic advisors, industry experts, and regional
									partners across the GCC. This extended ecosystem includes former
									executives from major corporations, government liaison
									specialists, and sector-specific thought leaders who provide
									tactical support for our portfolio companies.
								</p>
								<Button variant='outline' asChild>
									<Link href='/contact'>Connect With Our Network</Link>
								</Button>
							</CardContent>
						</Card>
					</motion.div> */}
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
							Ready to Expand into the GCC?
						</h2>
						<p className='text-xl mb-8 opacity-90 max-w-2xl mx-auto'>
							Join the innovative companies already leveraging our expertise to build
							successful, sustainable businesses in the world&apos;s most dynamic
							economic region.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							{/* <Button size='lg' variant='secondary' asChild>
								<Link href='/contact'>Start Your Journey</Link>
							</Button> */}
							<Button
								size='lg'
								variant='outline'
								className='text-primary border-white hover:bg-white hover:text-primary'
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
