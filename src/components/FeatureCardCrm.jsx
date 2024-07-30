import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

import Image from 'next/image'
import contacts from '@/images/screenshots/crm/contacts.svg'
import contactsList from '@/images/screenshots/crm/contacts_list.svg'
import bookingList from '@/images/screenshots/crm/booking_list.svg'

 
import deals from '@/images/screenshots/crm/deals.svg'
import { CheckIcon } from 'lucide-react'

const features = [
    {
        name: 'Unified Database',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Segmentation',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },

    {
        name: 'Custom Fields',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Contact Enrichment',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Custom Views',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: ' Filtering and Search',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Interaction Tracking',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Contact Import',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Contact Sharing ',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
]

const featuresBooking = [
    {
        name: 'Centralized Reservation',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Multi-Channel Booking',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },

    {
        name: 'Real-Time Availability',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Automated Booking Confirmation',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Commission Tracking',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Reporting and Analytics',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },

]

const featuresDeals = [
    {
        name: 'Customizable views',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Kanban view',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },

    {
        name: 'Pipelines',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Deal Categorization',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Stage Tracking',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Reporting',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Reminders',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Activity Log',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Comments',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },

]
const featuresView = [
    {
        name: '360° Deal View',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Interactive Timeline',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },

    {
        name: 'Deal Stages',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Activity Tracking',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Real-Time Updates',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Collaboration Tools',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Custom Fields',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Search and Filter',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Notifications',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },

]
export default function FeatureCardCrm() {
    return (
        <>
            <div className="overflow-hidden bg-white py-12 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
                        <div className="lg:pr-4 lg:pt-4">
                            <div className="">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Contacts</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">Advanced
                                    Contact Management</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    This advanced contact management module enhances customer relationships and communication efficiency through streamlined organization, tracking, and engagement.
                                    Its intuitive interface and robust features simplify tasks, allowing businesses to concentrate on growth and satisfaction.

                                </p>
                                {/* <div className="mt-8">
                                <a
                                    href="#"
                                    className="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </a>
                            </div> */}
                                <dl className="mt-6 text-base leading-7 text-gray-600 lg:max-w-none grid grid-cols-3 gap-3">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-7">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-unified" aria-hidden="true" />
                                                {feature.name}
                                            </dt>{' '}
                                            {/* <dd className="inline">{feature.description}</dd> */}
                                        </div>
                                    ))}
                                </dl>
                                {/* <figure className="mt-16 border-l border-gray-200 pl-8 text-gray-600">
                                <blockquote className="text-base leading-7">
                                    <p>
                                        “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac
                                        dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
                                        tristique.”
                                    </p>
                                </blockquote>
                                <figcaption className="mt-6 flex gap-x-4 text-sm leading-6">
                                    <img
                                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                        alt=""
                                        className="h-6 w-6 flex-none rounded-full"
                                    />
                                    <div>
                                        <span className="font-semibold text-gray-900">Maria Hill</span> – Marketing Manager
                                    </div>
                                </figcaption>
                            </figure> */}
                            </div>
                        </div>
                        <Image
                            src={contactsList}
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
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
                        <div className="lg:ml-auto lg:pl-4 lg:pt-4">

                            <div className="">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Deals</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">
                                    Streamlined lead management tools
                                </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Designed to enhance the efficiency of sales teams. Featuring both table and Kanban views, this tool provides a comprehensive overview of all deals, enabling easy tracking, organization, and management.
                                    Sales teams can streamline their workflows, prioritize opportunities, and drive sales performance through an intuitive and user-friendly interface.
                                </p>
                                {/* <div className="mt-8">
                                <a
                                    href="#"
                                    className="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </a>
                            </div> */}
                                <dl className="mt-6 text-base leading-7 text-gray-600 lg:max-w-none grid grid-cols-3 gap-3">
                                    {featuresDeals.map((feature) => (
                                        <div key={feature.name} className="relative pl-7">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-unified" aria-hidden="true" />
                                                {feature.name}
                                            </dt>{' '}
                                            {/* <dd className="inline">{feature.description}</dd> */}
                                        </div>
                                    ))}
                                </dl>
                                {/* <figure className="mt-16 border-l border-gray-200 pl-8 text-gray-600">
                                <blockquote className="text-base leading-7">
                                    <p>
                                        “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac
                                        dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
                                        tristique.”
                                    </p>
                                </blockquote>
                                <figcaption className="mt-6 flex gap-x-4 text-sm leading-6">
                                    <img
                                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                        alt=""
                                        className="h-6 w-6 flex-none rounded-full"
                                    />
                                    <div>
                                        <span className="font-semibold text-gray-900">Maria Hill</span> – Marketing Manager
                                    </div>
                                </figcaption>
                            </figure> */}
                            </div>
                        </div>
                        <div className="flex items-start justify-end lg:order-first">

                            <Image
                                src={deals}
                                alt="Product screenshot"
                                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] "
                                width={2432}
                                height={1442}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-white py-12 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-4 lg:pt-4">
                            <div className="">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Booking</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">Complete control<br></br> over Reservations</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    It streamlines the entire booking process, ensuring seamless management of reservations, customer profiles, and itineraries. With features like real-time availability, automated confirmations, and dynamic packaging, our features boosts operational efficiency and enhances customer satisfaction.
                                </p>
                                <dl className="mt-6 text-base leading-7 text-gray-600 lg:max-w-none grid grid-cols-3 gap-3">
                                    {featuresBooking.map((feature) => (
                                        <div key={feature.name} className="relative pl-7">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-unified" aria-hidden="true" />
                                                {feature.name}
                                            </dt>{' '}
                                            {/* <dd className="inline">{feature.description}</dd> */}
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <Image
                            src={bookingList}
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
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Vue 360°</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">Comprehensive 360° view of all your process </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    This powerful tool helps sales teams stay organized, track every touchpoint, and gain deeper insights into deal progression.
                                    You can streamline your sales process, enhance customer relationships, and drive more effective deal management through a visually rich and user-friendly platform.
                                </p>
                                <dl className="mt-6 text-base leading-7 text-gray-600 lg:max-w-none grid grid-cols-3 gap-3">
                                    {featuresView.map((feature) => (
                                        <div key={feature.name} className="relative pl-7">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-unified" aria-hidden="true" />
                                                {feature.name}
                                            </dt>{' '}
                                            {/* <dd className="inline">{feature.description}</dd> */}
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <div className="flex items-start justify-end lg:order-first">
                            <Image
                                src={contacts}
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
