import { ArrowPathIcon, ChartBarIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, UsersIcon } from '@heroicons/react/24/outline'
import { ArrowRightIcon, Share2, ShareIcon, ShipIcon } from 'lucide-react'
import Link from 'next/link'
import { Container } from './Container'

const features = [
    {
        name: 'Cruise Booking',
        description:
            'Streamline all cruise inquiries from website, social media, WhatsApp, live chat, phone, email, and in-office visits with our all-in-one IT solution.',
        icon: Share2,
        href: '/cruise',
    },
    {
        name: 'CRM & Sales',
        description:
            'Efficiently manage over 20 cruise line catalogs, create and promote enticing offers and discounts, and organize client contacts ...',
        icon: ShipIcon,
        href: '/channels',
    },
    {
        name: 'Socials Medias',
        description:
            'Elevate your team\'s productivity with our all-in-one collaboration platform. Utilize chat, web phone, video meetings, ...',
        icon: UsersIcon,
        href: '/channels',
    },
    {
        name: 'Marketing & Emailing',
        description:
            'Gain valuable insights into your team\'s performance, website metrics, leads, bookings, inquiries, and production."',
        icon: ChartBarIcon,
        href: '/channels',
    },
    {
        name: 'Team Collaboration',
        description:
            'Unlock the power of AI with our customizable chatbot solution. Trained with your data, our chatbot delivers personalized ...',
        icon: CloudArrowUpIcon,
        href: '/channels',
    },
    {
        name: 'AI Chatbot',
        description:
            'Elevate your business with our comprehensive suite of integrated tools. Trained with your data, our chatbot delivers personalized ..',
        icon: LockClosedIcon,
        href: '/channels',
    },
]

export default function IconsFeaturesCrm() {
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

                <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3 mt-16">
                    {features.map((feature) => (
                        <div className="group relative border rounded-xl  bg-white hover:bg-gradient-to-t from-blue-800 to-blue-600 duration-300 hover:shadow-xl hover:shadow-blue-200">
                            <Link href={feature.href} key={feature.name} className='p-6 block' >
                                <dt className='flex items-center gap-x-3'>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 group-hover:bg-blue-600 ">
                                        <feature.icon className="h-6 w-6 text-gray-500 group-hover:text-white duration-300" aria-hidden="true" />
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
