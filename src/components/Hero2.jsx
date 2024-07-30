'use client'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import { Dialog, Popover, Transition } from '@headlessui/react'
import {
    ArrowDownIcon, ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    ChevronRightIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
    UsersIcon,
    IdentificationIcon,
    ChatBubbleBottomCenterTextIcon,
    MegaphoneIcon,
} from '@heroicons/react/24/outline'
import sphere from '@/images/hero_sphere.png'
import bgCruise from '@/images/bg_cruise.jpeg'

import logo_comunikcrm_white from '@/images/logo_comunikcrm_white.png'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { BotMessageSquare, Group, MessageCircleMore, Share, Ship, Users } from 'lucide-react'
const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]
const products = [
    { name: 'Cruise', description: 'Get a better understanding of your traffic', href: '#cruise', icon: Ship },
    { name: 'CRM', description: 'Speak directly to your customers', href: '#crm', icon: IdentificationIcon },
    { name: 'Unified', description: 'Your customers’ data will be safe and secure', href: '#unified', icon: MegaphoneIcon },
    { name: 'Marketing', description: 'Connect with third-party tools', href: '#marketing', icon: CursorArrowRaysIcon },
    { name: 'Live Chat', description: 'Build strategic funnels that will convert', href: '#rmc', icon: ChatBubbleBottomCenterTextIcon },
    { name: 'IA', description: 'Build strategic funnels that will convert', href: '#', icon: BotMessageSquare },

]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]
const company = [
    { name: 'About us', href: '#', description: 'Learn more about our company values and mission to empower others' },
    { name: 'Careers', href: '#', description: 'Looking for you next career opportunity? See all of our open positions' },
    {
        name: 'Support',
        href: '#',
        description: 'Get in touch with our dedicated support team or reach out on our community forums',
    },
    { name: 'Blog', href: '#', description: 'Read our latest announcements and get perspectives from our team' },
]

export function Hero2() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (



        <div className="relative isolate overflow-hidden">
            <div className="relative  max-w-5xl mx-auto">
                <Image
                    src={sphere} alt=""
                    className="mx-auto h-[1200px]  w-auto object-cover"
                />
            </div>
            <div
                className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl bottom-0 right-0"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
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

            <div
                className="absolute inset-x-0  -z-10 top-0"
                aria-hidden="true"
            >
                <Image
                    src={bgCruise} alt=""
                    className="mx-auto w-full object-cover opacity-10"
                />

            </div>


            {/* <div className=" flex justify-center items-center">
          <Image
            className="max-h-screen w-auto"
            src={sphere}
            alt=""
            sizes="100%"
          />
        </div> */}
            <div className="flex items-center justify-center absolute inset-0">
                <div className="mx-auto max-w-xl">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                            Cruise 360°
                            {/* <a href="#" className="font-semibold text-white">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a> */}
                        </div>
                    </div>
                    <div className="text-center">

                        <h1 className="text-4xl font-bold font-display  sm:text-6xl bg-gradient-to-r from-white  to-blue-300 inline-block text-transparent bg-clip-text">
                            Sail to Success with Cruise-360°
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300 ">
                            Empowering cruise agencies to streamline operations, enhance productivity, and drive growth with integrated tools for customer engagement and data analytics.
                        </p>
                        <div className="mt-10 flex flex-col items-center justify-center gap-y-6">
                            {/* <a
                  href="#"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Get started
                </a> */}
                            <a href="#global" className="text-sm font-semibold leading-6 text-white flex items-center gap-x-2 justify-center bg-black/20 hover:bg-black/30 px-6 py-3 rounded-xl ">
                                <span> Learn more </span>  <ArrowDownIcon className='w-4 h-4' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
