import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

export function HeroSocials() {
  return (
    <div className="relative isolate overflow-hidden bg-slate-950">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />

      </div>

      <Container className="py-24 text-center">
        <div className="inline-flex rounded-full text-indigo-300 uppercase font-semibold text-sm leading-6 ">
          Socials Medias
        </div>

        <h1 className='bg-gradient-to-r from-indigo-100 to-indigo-500 text-transparent bg-clip-text font-display text-7xl font-bold max-w-4xl mx-auto tracking-tight drop-shadow-xl'>
          Connect with customers where they are
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg tracking-tight text-white/70">
          Automate your customers' communication with artificial intelligence-driven bots and a Live Chat system optimized  with smarter conversations on any channel.
        </p>

      </Container>
    </div>
  )
}
