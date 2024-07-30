import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Header2 } from '@/components/Header2'
import { Hero2 } from '@/components/Hero2'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { SecondaryFeaturesUnified } from '@/components/SecondaryFeaturesUnified'
import { SecondaryFeaturesCRM } from '@/components/SecondaryFeaturesCRM'
import { SecondaryFeaturesMarketing } from '@/components/SecondaryFeaturesMarketing'
import { SecondaryFeaturesRMC } from '@/components/SecondaryFeaturesRMC'
import { SecondaryFeaturesBrave } from '@/components/SecondaryFeaturesBrave'
import IconsFeatures from '@/components/IconsFeatures'
import Company from '@/components/Company'
import { CallToAction2 } from '@/components/CallToAction2'

export default function Home() {
  return (
    <>
      <div className="bg-blue-950">
        <Header2 />
        <Hero2 />
      </div>
      <main>
        {/* <Hero /> */}
        <IconsFeatures />

        {/* <SecondaryFeaturesUnified />

        <SecondaryFeaturesCRM />

        <SecondaryFeaturesMarketing />

        <SecondaryFeaturesRMC />

        <SecondaryFeaturesBrave />

        <PrimaryFeatures /> */}

        <Company />
        {/* <CallToAction2 /> */}
        {/* <Testimonials />
        <Pricing />
        <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
