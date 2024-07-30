import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header2 } from '@/components/Header2'
import { HeroCruise } from '@/components/HeroCruise'
import { CallToAction2 } from '@/components/CallToAction2'
import FeatureImage from '@/components/FeatureImage'
import FeatureCard from '@/components/FeatureCard'
import FeatureCard2 from '@/components/FeatureCard2'
import FeatureCardCruise from '@/components/FeatureCardCruise'
import FeatureIcon from '@/components/FeatureIcon'
import IconsFeatures2 from '@/components/IconsFeatures2'


export default function Home() {
    return (
        <>

            <Header2 />
            <HeroCruise />

            <main>


                <FeatureCardCruise />
                <FeatureIcon />
                {/* <FeatureImage /> */}
                <IconsFeatures2 />

            </main>
            <Footer />
        </>
    )
}
