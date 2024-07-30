import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

import Image from 'next/image'
import contacts from '@/images/screenshots/crm/contacts.svg'
import deals from '@/images/screenshots/crm/deals.svg'
import inbox from '@/images/screenshots/rmc/inbox.svg'
import LiveChat from '@/images/screenshots/rmc/livechat.svg'
import Reports from '@/images/screenshots/rmc/reports.svg'

import { CheckIcon } from 'lucide-react'

const features = [
    {
        name: 'WhatsApp for Business',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Instagram',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Facebook Messenger',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Google Business Messages',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Telegram',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Slack',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Emails',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Live chat',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Viber',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'WeChat',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
]
const featuresBot = [
    {
        name: 'Human Takeover',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Multilingual',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'OpenAI Assistants',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Spelling Correction',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Message Rewriting',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Smart Reply',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
]
const featuresStats = [
    {
        name: 'Daily conversations',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Daily visitors',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Agents ratings',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Missed conversations',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Agents response time',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Average conversations time',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Countries and languages',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Articles searches and views',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Average agent conversations time',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Browsers and operating systems',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
]
export default function FeatureCardSocials() {
    return (
        <>
            <div className="overflow-hidden bg-white py-12 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
                        <div className="lg:pr-4 lg:pt-4">
                            <div className="">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Channels</h2>
                                <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl font-display">Omni-Channel Experience</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Send and reply to WhatsApp messages, Facebook messages, Telegram messages, text messages, emails, tickets, and chat messages in one place. Save time with communication that happens in one place.

                                </p>

                                {/* <div className="mt-8">
                                <a
                                    href="#"
                                    className="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </a>
                            </div> */}
                                <dl className="mt-10 max-w-xl  text-base leading-7 text-gray-600 lg:max-w-none grid grid-cols-2 gap-3">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9 ">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
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
                            src={inbox}
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
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Chatbots</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display"> Create Chatbots using Your Data with OpenAI</p>

                                <p className="mt-6 text-lg leading-8 text-gray-600">

                                    Speed customer resolutions and automate conversations by engaging one of the most advanced forms of artificial intelligence in the world. This can be done easily in just a few minutes.
                                </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Simply upload your documents or provide a link to your website and watch the magic happen. Enhance its strength by pairing it with Dialogflow and Google.


                                </p>
                                <dl className="mt-6 text-base leading-7 text-gray-600 lg:max-w-none grid grid-cols-3 gap-3">
                                    {featuresBot.map((feature) => (
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
                                src={LiveChat}
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
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Reports </h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">Advanced Reporting <br></br>and Analytics Tools</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">

                                    Designed for multi-channel live chat solutions. This powerful tool provides comprehensive insights into customer interactions, agent performance, and overall chat efficiency across various channels.     Get an overview of how chat and your agents are performing
                                </p>
                                {/* <div className="mt-8">
                                <a
                                    href="#"
                                    className="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </a>
                            </div> */}
                                <dl className="mt-6 text-base leading-7 text-gray-600 lg:max-w-none grid grid-cols-2 gap-3">
                                    {featuresStats.map((feature) => (
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
                            src={Reports}
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
