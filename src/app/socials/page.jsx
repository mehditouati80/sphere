
import { Footer } from '@/components/Footer'

import { Header2 } from '@/components/Header2'
import { Hero } from '@/components/HeroCruise'

import { CallToAction2 } from '@/components/CallToAction2'
import FeatureImage from '@/components/FeatureImage'

import FeatureCard3 from '@/components/FeatureCardCruise'
import FeatureIcon from '@/components/FeatureIcon'
import IconsFeatures2 from '@/components/IconsFeatures2'
import { HeroCrm } from '@/components/HeroCrm'
import FeatureCardCrm from '@/components/FeatureCardCrm'
import IconsFeaturesCrm from '@/components/IconsFeaturesCrm'
import FeatureIconCrm from '@/components/FeatureIconCrm'
import { HeroSocials } from '@/components/HeroSocials'
import FeatureCardSocials from '@/components/FeatureCardSocials'
import FeatureIconSocials from '@/components/FeatureIconSocials'


export default function Home() {
    return (
        <>

            <Header2 />
            <HeroSocials />

            <main>
                <FeatureCardSocials />
                <FeatureIconSocials />
                <IconsFeatures2 />
            </main>
            <Footer />
        </>
    )
}
