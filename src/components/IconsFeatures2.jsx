import { ArrowPathIcon, ChartBarIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, UsersIcon } from '@heroicons/react/24/outline'
import { ArrowRightIcon, BotMessageSquare, GroupIcon, HeadsetIcon, MailOpenIcon, MessageSquareTextIcon, PhoneCallIcon, Share2, Share2Icon, ShareIcon, ShipIcon, Users2Icon } from 'lucide-react'
import Link from 'next/link'
import { Container } from './Container'

const features = [

    { name: 'Cruise ', description: 'Connect with customers where they are', href: '/cruise', icon: ShipIcon, style: 'cruise' },
    { name: 'CRM ', description: 'Optimized Sales Management for Travel Agencies, by integrating robust customer management, lead generation, and sales tracking features,', href: '/crm', icon: UsersIcon, style: 'crm' },
    { name: 'Socials Medias', description: 'Automate your customers\' communication with artificial intelligence-driven bots and a Live Chat system optimized  with smarter conversations on any channel. WhatsApp, Messenger, Instagram, Email, Telegram, ...', href: '/socials', icon: Share2Icon, style: 'socials' },
    { name: 'Unified', description: 'Streamline all cruise inquiries from website, social media, WhatsApp, live chat, phone, email, and in-office visits with our all-in-one IT solution.', href: '/unified', icon: MessageSquareTextIcon, style: 'unified' },
    { name: 'Emailing', description: 'Streamline all cruise inquiries from website, social media, WhatsApp, live chat, phone, email, and in-office visits with our all-in-one IT solution.', href: '/marketing', icon: MailOpenIcon, style: 'marketing' },
    { name: 'Call Center', description: 'Streamline all cruise inquiries from website, social media, WhatsApp, live chat, phone, email, and in-office visits with our all-in-one IT solution.', href: '/unified', icon: HeadsetIcon, style: 'callcenter' },
    { name: 'VoIP', description: 'Streamline all cruise inquiries from website, social media, WhatsApp, live chat, phone, email, and in-office visits with our all-in-one IT solution.t', href: '/ia', icon: PhoneCallIcon, style: 'voip' },
    { name: 'IA', description: 'Streamline all cruise inquiries from website, social media, WhatsApp, live chat, phone, email, and in-office visits with our all-in-one IT solution.t', href: '/ia', icon: BotMessageSquare, style: 'ia' },



]

export default function IconsFeatures2() {
    return (
        <div id='global' className="bg-white py-12 sm:py-16 relative isolate overflow-hidden">
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

                <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4 mt-16">
                    {features.map((feature) => (
                        <div className={`group relative border rounded-xl  bg-white hover:bg-${feature.style} duration-100 hover:shadow-xl hover:shadow-slate-200`}>
                            <Link href={feature.href} key={feature.name} className='p-6 block' >
                                <dt className='flex items-center gap-x-3'>
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-full  bg-${feature.style} `}>
                                        <feature.icon className="h-6 w-6 text-white group-hover:text-white duration-100" aria-hidden="true" />
                                    </div>
                                    <span className="text-xl  font-bold leading-8 text-gray-900  font-display  group-hover:text-white">   {feature.name}</span>
                                </dt>
                                {/* <dd className="text-base leading-7 text-gray-600 pl-16 group-hover:text-white">
                                    <p>{feature.description}</p>

                                    <span class="my-2 inline-flex items-center gap-x-1.5  group-hover:px-4 py-2 text-sm font-semibold text-blue-600  hover:text-blue-700  duration-300  group-hover:text-white/50">
                                        Learn more
                                        <ArrowRightIcon className='w-4 h-4' />
                                    </span>
                                </dd> */}
                            </Link>
                        </div>
                    ))}
                </dl>
            </Container>
        </div>

    )
}
