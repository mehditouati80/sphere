import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, CheckIcon } from '@heroicons/react/20/solid'

import Image from 'next/image'
import b2c from '@/images/screenshots/cruise/b2c.svg'
import backoffice from '@/images/screenshots/cruise/backoffice.svg'
import content from '@/images/screenshots/cruise/content.svg'
import api from '@/images/screenshots/cruise/api.svg'
import booking from '@/images/screenshots/cruise/bookingengine.svg'


const features = [
    {
        name: 'Content Mapping',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Media Enrichment',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },

    {
        name: 'Ship Management',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Cabin Management',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Deck Management',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Theme & Package',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Advanced Search',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Bulk Uploads',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Multi-language ',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },

]
const featuresCMS = [
    {
        name: 'Intuitive Dashboard',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Medias Integration',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },

    {
        name: 'SEO Tools',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Manage Promotions',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Dynamic Content',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Mobile Optimization',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Advanced Search',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Social Media',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Multilingual ',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },


]
const featuresAPI = [
    {
        name: 'GraphQL Technology',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Comprehensive Search',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },

    {
        name: 'Rich Multimedia Content',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Real-Time Data',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Booking Capabilities',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Customizable Queries',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Cabin Holds',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },

    {
        name: 'Integration Support',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'API Documentation',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Scalable Solutions',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    // {
    //     name: 'Performance Optimization',
    //     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    //     icon: CheckIcon,
    // },
    // {
    //     name: 'Secure Transactions',
    //     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    //     icon: CheckIcon,
    // },


]
const featuresBooking = [
    {
        name: 'B2B Platform',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'B2C Platform',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },

    {
        name: 'White Label Solutions',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'B2B2C Integration',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Real-Time Availability',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Advanced Search Filters',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Secure Payment Processing',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },

    {
        name: 'Customizable User Interface',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Multi-Currency Support',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Multi-Language Support',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    // {
    //     name: 'Performance Optimization',
    //     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    //     icon: CheckIcon,
    // },
    // {
    //     name: 'Secure Transactions',
    //     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    //     icon: CheckIcon,
    // },


]
export default function FeatureCardCruise() {
    return (
        <>
            <div className="overflow-hidden bg-white py-12 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
                        <div className="lg:pr-4 lg:pt-4">
                            <div>
                                <h2 className="text-base font-semibold leading-7 text-slate-700">Back-Office</h2>
                                <p className="mt-2  text-gray-900 sm:text-5xl max-w-lg bg-gradient-to-r from-cruise to-purple-900 text-transparent bg-clip-text font-display text-7xl font-bold tracking-tight">
                                    Advanced Back-Office for cruise industry
                                </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Our BackOffice solution empowers travel agencies to efficiently map cruise line content to their database and enrich it with multimedia. Develop and customize cruise promotions packages to meet your clients' unique needs.

                                </p>
                                <dl className="mt-6 text-base leading-7 text-gray-600 lg:max-w-none grid grid-cols-3 gap-3">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-7">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-unified" aria-hidden="true" />
                                                {feature.name}
                                            </dt>{' '}

                                        </div>
                                    ))}
                                </dl>

                            </div>
                        </div>
                        <Image
                            src={backoffice}
                            alt="Product screenshot"
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-slate-100 py-12 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                            <div className="">
                                <h2 className="text-base font-semibold leading-7 text-slate-700">WebSite</h2>
                                <p className="mt-2  text-gray-900 sm:text-5xl bg-gradient-to-r from-cruise to-purple-900 text-transparent bg-clip-text font-display text-7xl font-bold tracking-tight">
                                    Optimize Your Travel Agency's Online Presence with Our Advanced CMS</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Our CMS is designed to help travel agencies specializing in cruises efficiently manage their website content. Enhance your online presence with tools for multimedia content management, ship and itinerary details, promotional offers, and customizable templates.
                                </p>
                                <dl className="mt-6 text-base leading-7 text-gray-600 lg:max-w-none grid grid-cols-3 gap-3">
                                    {featuresCMS.map((feature) => (
                                        <div key={feature.name} className="relative pl-7">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-unified" aria-hidden="true" />
                                                {feature.name}
                                            </dt>{' '}

                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <div className="flex items-start justify-end lg:order-first">
                            <Image
                                src={b2c}
                                alt="Product screenshot"
                                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                                width={2432}
                                height={1442}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-white py-12 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
                        <div className="lg:pr-4 lg:pt-4">
                            <div>
                                <h2 className="text-base font-semibold leading-7 text-slate-700">WebService</h2>
                                <p className="mt-2  text-gray-900 sm:text-5xl  bg-gradient-to-r from-cruise to-purple-900 text-transparent bg-clip-text font-display text-7xl font-bold tracking-tight">
                                    Empower Your Travel Agency with Our API
                                </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Our Web Service module, powered by GraphQL, enables travel agencies to access comprehensive cruise departure data with various search criteria.
                                    {/* Enrich your content with images and text about ships, cabins, destinations, and ports. The Web Service also allows for booking reservations, cabin holds, and options directly with cruise lines. */}
                                </p>
                                <dl className="mt-6 text-base leading-7 text-gray-600 lg:max-w-none grid grid-cols-2 gap-3">
                                    {featuresAPI.map((feature) => (
                                        <div key={feature.name} className="relative pl-7">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-unified" aria-hidden="true" />
                                                {feature.name}
                                            </dt>{' '}

                                        </div>
                                    ))}
                                </dl>

                            </div>
                        </div>
                        <Image
                            src={api}
                            alt="Product screenshot"
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-slate-100 py-12 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                            <div className="">
                                <h2 className="text-base font-semibold leading-7 text-slate-700">Booking Engine</h2>
                                <p className="mt-2  text-gray-900 sm:text-5xl  bg-gradient-to-r from-cruise to-purple-900 text-transparent bg-clip-text font-display text-7xl font-bold tracking-tight">
                                    Maximize Your Cruise Sales with Our Versatile Cruise Booking Engine
                                </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Our Cruise Booking Engine caters to B2B, B2C, White Label, and B2B2C models, providing a comprehensive solution for travel agencies.
                                    Enjoy seamless integration, robust booking capabilities, and a user-friendly interface that enhances the customer experience.
                                </p>
                                <dl className="mt-6 text-base leading-7 text-gray-600 lg:max-w-none grid grid-cols-2 gap-3">
                                    {featuresBooking.map((feature) => (
                                        <div key={feature.name} className="relative pl-7">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-unified" aria-hidden="true" />
                                                {feature.name}
                                            </dt>{' '}

                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <div className="flex items-start justify-end lg:order-first">
                            <Image
                                src={booking}
                                alt="Product screenshot"
                                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                                width={2432}
                                height={1442}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
