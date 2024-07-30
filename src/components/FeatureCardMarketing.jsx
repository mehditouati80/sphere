import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

import Image from 'next/image'
import contacts from '@/images/screenshots/crm/contacts.svg'
 
import deals from '@/images/screenshots/crm/deals.svg'
import inbox from '@/images/screenshots/rmc/inbox.svg'
import dashboard from '@/images/screenshots/marketing/dashboard.svg'
import builder from '@/images/screenshots/marketing/builder.svg'
import campaign from '@/images/screenshots/marketing/campaign.svg'
import list from '@/images/screenshots/marketing/list.svg'
import automation from '@/images/screenshots/marketing/automation.svg'


const features = [
    {
        name: 'Delete messages.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Search for conversations.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Download conversations.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
    },
]
export default function FeatureCardMarketing() {
    return (
        <>
            <div className="overflow-hidden bg-white py-12 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
                        <div className="lg:pr-4 lg:pt-4">
                            <div className="">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Email Builder</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">Compose your responsive email</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Every day marketing email composing is made easier than ever with our responsive editor.
                                    Also, there are tons of pre-built email layouts for you to choose from.
                                    You can also import your own pre-made email template to Acelle Mail to just started.
                                </p>
                                {/* <div className="mt-8">
                                <a
                                    href="#"
                                    className="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </a>
                            </div> */}
                                {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl> */}
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
                            src={builder}
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
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Email lists</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">Simplify subscriber management</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Our subscriber management feature streamlines the organization and segmentation of your email lists. Easily import, export, and categorize subscribers to ensure targeted and effective communication.
                                    <br></br>     Utilize advanced filtering options to create dynamic segments based on user behavior, preferences, and demographics.

                                </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Automate list hygiene with tools for managing bounces, unsubscribes, and inactive contacts,
                                    ensuring your campaigns reach the right audience.
                                </p>
                                {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl> */}
                            </div>
                        </div>
                        <div className="flex items-start justify-end lg:order-first">
                            <Image
                                src={list}
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
                            <div className="">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Send Campaign</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">Powerful Campaign Sending Module</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    An advanced module designed to streamline the sending of email campaigns. It provides robust tools for scheduling, managing, and executing your email marketing efforts with precision.
                                </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    With features like automated scheduling, real-time delivery tracking, and personalized content options,  ensures your messages reach the right audience at the optimal time.
                                </p>
                                {/* <div className="mt-8">
                                <a
                                    href="#"
                                    className="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </a>
                            </div> */}
                                {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl> */}
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
                            src={campaign}
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
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Automatation</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">Automate your campaign, with email workflow</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Features allows you to create complex workflows that trigger personalized emails based on user behavior, actions, and preferences.
                                    <br></br> With advanced scheduling, dynamic content, and seamless integration capabilities, this module ensures timely and relevant communication with your audience.

                                </p>
                             
                                {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl> */}
                            </div>
                        </div>
                        <div className="flex items-start justify-end lg:order-first">
                            <Image
                                src={automation}
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
                            <div className="">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Track your performance </h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">Comprehensive Statistics & Insight Report</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                   You can review your individual campaign reports after every email you send, or monitor your mail list growth, campaign engagement, and marketing performance directly from your account dashboard.
                                </p>
                                {/* <div className="mt-8">
                                <a
                                    href="#"
                                    className="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </a>
                            </div> */}
                                {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl> */}
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
                            src={dashboard}
                            alt="Product screenshot"
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>


        </>

    )
}
