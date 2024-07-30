import { ArrowPathIcon, ChartBarIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, UsersIcon } from '@heroicons/react/24/outline'
import { ArrowRightIcon, BotMessageSquare, GroupIcon, HeadsetIcon, MailOpenIcon, MessageSquareTextIcon, PhoneCallIcon, Share2, Share2Icon, ShareIcon, ShipIcon, Users2Icon } from 'lucide-react'
import Link from 'next/link'
import { Container } from './Container'

const features = [

    { name: 'Cruise Manager', description: 'Our comprehensive suite of tools includes a robust Real time Cruise Booking Engine, B2C and B2B platforms, Mid-Office and Back-Office solutions. Take advantage of our Web Service API and customizable White Label options to seamlessly integrate and brand our solutions as your own.', href: '/cruise', icon: ShipIcon, style: 'cruise' },
    { name: 'CRM & Sales ', description: 'Optimize your travel agency\'s sales management with our integrated CRM solution. Benefit from robust customer management, effective lead generation, a live booking manager, and sales tracking features. Streamline your process with tools tailored for the travel industry.    ', href: '/crm', icon: UsersIcon, style: 'crm' },
    { name: 'Socials media', description: 'Automate your customers\' communication with artificial intelligence-driven bots and a Live Chat system optimized  with smarter conversations on any channel. WhatsApp, Messenger, Instagram, Email, Telegram, ...  Centralize your communication channels by managing every interaction from a single platform.', href: '/socials', icon: Share2Icon, style: 'socials' },
    { name: 'Unified', description: 'Our comprehensive solution integrates unified communication and collaboration tools, including IP telephony, advanced instant messaging with group management, video conferencing, task management, and a shared email inbox.  Designed to streamline your team\'s workflow and enhance productivity.', href: '/unified', icon: MessageSquareTextIcon, style: 'unified' },
    { name: 'Emailing', description: 'Maximize your marketing efforts with our powerful solution for mass emailing and marketing automation. Effortlessly create, send, and track email campaigns, and automate your marketing processes to engage customers effectively. Enhance your outreach, nurture leads, and drive conversions with our all-in-one marketing platform.', href: '/marketing', icon: MailOpenIcon, style: 'marketing' },
    { name: 'Call Center', description: 'Optimize your call center operations with our comprehensive CRM solution. Streamline customer interactions, improve lead management, and track sales performance with ease. Our CRM is designed to enhance agent productivity, boost customer satisfaction, and drive business growth through effective communication and data management.', href: '/unified', icon: HeadsetIcon, style: 'callcenter' },
    { name: 'VoIP', description: 'Our IP telephony solution offers reliable and high-quality voice communication for businesses. Benefit from advanced call features, seamless integration with existing systems, and cost-effective communication. Enhance your business operations with a telephony solution designed for modern needs.', href: '/ia', icon: PhoneCallIcon, style: 'voip' },
    { name: 'IA', description: 'Transform your customer support with our AI-powered live chat integration. Leverage generative AI to provide instant, accurate, and personalized responses to customer inquiries. Enhance customer satisfaction, reduce response times, and streamline your support operations with cutting-edge AI technology embedded in your live chat solution.', href: '/ia', icon: BotMessageSquare, style: 'ia' },



]

export default function IconsFeatures() {
    return (
        <div id='global' className="bg-white py-24 sm:py-32 relative isolate overflow-hidden">
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
            <Container>
                <div className="mx-auto max-w-3xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-blue-600">Cruise-360°</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl font-display">
                        All-in One Business Empowerment Solution
                    </p>
                    {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                        Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                        pulvinar et feugiat blandit at. In mi viverra elit nunc.
                    </p> */}
                </div>

                <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 mt-16">
                    {features.map((feature) => (
                        <div className={`group relative border rounded-xl  bg-white hover:bg-${feature.style} duration-100 hover:shadow-xl hover:shadow-slate-200`}>
                            <Link href={feature.href} key={feature.name} className='p-6 block' >
                                <dt className='flex items-center gap-x-3'>
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-full  bg-${feature.style} `}>
                                        <feature.icon className="h-6 w-6 text-white group-hover:text-white duration-100" aria-hidden="true" />
                                    </div>
                                    <span className="text-2xl  font-bold leading-8 text-gray-900  font-display  group-hover:text-white">   {feature.name}</span>
                                </dt>
                                <dd className="text-base leading-7 text-gray-600 pl-16 group-hover:text-white">
                                    <p>{feature.description}</p>

                                    <span class="my-2 inline-flex items-center gap-x-1.5  group-hover:px-4 py-2 text-sm font-semibold text-blue-600  hover:text-blue-700  duration-100  group-hover:text-white/50">
                                        Learn more
                                        <ArrowRightIcon className='w-4 h-4' />
                                    </span>
                                </dd>
                            </Link>
                        </div>
                    ))}
                </dl>
            </Container>
            <div className='hidden hover:bg-cruise'></div>
            <div className='hidden hover:bg-socials'></div>

            <div className='hidden hover:bg-crm'>

            </div>
            <div className='hidden hover:bg-unified'>

            </div> <div className='hidden hover:bg-marketing'>

            </div> <div className='hidden hover:bg-voip'>

            </div> <div className='hidden hover:bg-callcenter'>

            </div> <div className='hidden hover:bg-ia'>

            </div> <div className='hidden hover:bg-socials'>

            </div>
        </div >

    )
}
