import { HeroSection } from '@/components/sections/HeroSection'
import { ValuePropositionSection } from '@/components/sections/ValuePropositionSection'
import { FourPhaseSection } from '@/components/sections/FourPhaseSection'
import { SectorsSection } from '@/components/sections/SectorsSection'

export default function Home() {
	return (
		<div className='min-h-screen'>
			<HeroSection />
			<ValuePropositionSection />
			<FourPhaseSection />
			<SectorsSection />
		</div>
	)
}
