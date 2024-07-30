import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header2 } from '@/components/Header2'
import { HeroCruise } from '@/components/HeroCruise'
import { CallToAction2 } from '@/components/CallToAction2'
import FeatureImage from '@/components/FeatureImage'
import FeatureCard from '@/components/FeatureCard'
import FeatureCard2 from '@/components/FeatureCard2'
import FeatureCard3 from '@/components/FeatureCardCruise'
import FeatureIcon from '@/components/FeatureIcon'
import IconsFeatures2 from '@/components/IconsFeatures2'
import { HeroUnified } from '@/components/HeroUnified'
import FeatureCardUnified from '@/components/FeatureCardUnified'
import FeatureIconUnified from '@/components/FeatureIconUnified'


export default function Home() {
    return (
        <>

            <Header2 />
            <HeroUnified />

            <main>


                <FeatureCardUnified />
                <FeatureIconUnified />
                <IconsFeatures2 />


            </main>
            <Footer />
        </>
    )
}
