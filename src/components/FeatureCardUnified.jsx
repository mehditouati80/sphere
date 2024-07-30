import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

import Image from 'next/image'
import voip from '@/images/screenshots/unified/voip.svg'
import logs from '@/images/screenshots/voip/logs.svg'
import chat from '@/images/screenshots/unified/chat.svg'
import emails from '@/images/screenshots/unified/emails.svg'
import visio from '@/images/screenshots/unified/visio.svg'
import tasks from '@/images/screenshots/unified/tasks.svg'
import { CheckIcon } from 'lucide-react'
const features = [
    {
        name: 'Conference Calling',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Call Recording',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Call Forwarding',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Call Queuing',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Customizable IVR',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Mobile Application',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Ring Groups',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Click-to-Call',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Voicemail',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Call Analytics',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Advanced Security',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'CRM Integration',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
]
const featuresChat = [
    {
        name: 'Instant Messaging',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Discussion Groups',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'File & media sharing',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Video & Audio Calls',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Polls and Surveys',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Mobile Application',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Notifications',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Polls and Surveys',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Integrated Tasks',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },

]
const featuresVisio = [
    {
        name: 'Video and Audio',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Meeting Rooms',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Screen Sharing',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Backgrounds',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Meeting Recording',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Encryption',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Multi-Platform',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Waiting Room',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Integration',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },

]
const featuresTasks = [
    {
        name: 'Table View',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Calendar View',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Kanban Boards',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'File Sharing',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Custom Filters',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Reminder Alertes',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Task Assignment',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Status Updates',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },

]
const featuresEmail = [
    {
        name: 'Personal & Shared',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Inbox Folders',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Auto-Distribution',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'CRM Integration',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CheckIcon,
    },
    {
        name: 'Email Templates',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Team Collaboration',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Interaction History',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },
    {
        name: 'Email Assignment',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CheckIcon,
    },
    {
        name: 'Analytics',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CheckIcon,
    },

]
export default function FeatureCardUnified() {
    return (
        <>
            <div className="overflow-hidden bg-white py-12 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
                        <div className="lg:pr-4 lg:pt-4">
                            <div className="">
                                <h2 className="text-base font-semibold leading-7 text-slate-700">Telephony IP</h2>
                                <p className="mt-2  text-unified text-5xl font-display font-bold  tracking-tight">Every Call, a step in Business progress</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    A versatile solution that facilitates seamless communication both internally and with customers, offering superior call quality, all designed to boost your team's efficiency and enhance customer interactions.
                                </p>
                                <p className="mt-3 text-base leading-8 text-gray-900 font-semibold">
                                    Easy, intuitive solution for exceptional voice service :
                                </p>
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
                            src={logs}
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
                                <h2 className="text-base font-semibold leading-7 text-unified">Chat</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">Streamline your Team discussions</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    An innovative platform revolutionizing team communication and collaboration. Designed for modern work environments.
                                    Designed for modern work environments, it offers an intuitive, comprehensive solution to stay connected and productive, no matter your work mode.
                                </p>
                                <p className="mt-3 text-base leading-8 text-gray-900 font-semibold">
                                    Simplify collaboration and empower your employees :
                                </p>
                                <dl className="mt-6 max-w-xl text-base leading-7 text-gray-600 lg:max-w-none grid grid-cols-3 gap-3">
                                    {featuresChat.map((item) => (
                                        <div key={item.name} className="relative pl-7">
                                            <dt className="inline font-semibold text-gray-900">
                                                <item.icon className="absolute left-1 top-1 h-5 w-5 text-unified" aria-hidden="true" />
                                                {item.name}
                                            </dt>{' '}
                                            {/* <dd className="inline">{feature.description}</dd> */}
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <div className="flex items-start justify-end lg:order-first">
                            <Image
                                src={chat}
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
                                <h2 className="text-base font-semibold leading-7 text-unified">Visio-Conference</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">Empowering video collaboration</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Designed to foster seamless communication and collaboration across teams and organizations of any size.
                                    With its intuitive interface and robust features, ensures that every meeting is more engaging, productive, and secure, no matter where participants are located.

                                </p>
                                <p className="mt-3 text-base leading-8 text-gray-900 font-semibold">
                                    Simplify collaboration and empower your employees :
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
                                    {featuresVisio.map((feature) => (
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
                            src={visio}
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
                                <h2 className="text-base font-semibold leading-7 text-unified">Tasks</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">Ultimate Task Management tools</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    An Simple task management software blending table, Kanban, and calendar views for full project organization, catering to both individuals and teams.
                                    It streamlines tracking, boosts productivity, and eases workflows, ensuring tasks are completed on time with adaptable features for all work styles.


                                </p>
                                <p className="mt-3 text-base leading-8 text-gray-900 font-semibold">
                                    Simplify collaboration and empower your employees :
                                </p>
                                <dl className="mt-6 text-base leading-7 text-gray-600 lg:max-w-none grid grid-cols-3 gap-3">
                                    {featuresTasks.map((feature) => (
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
                                src={tasks}
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
                                <h2 className="text-base font-semibold leading-7 text-unified">Emails</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">Email inboxes for smart Teams</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Simplify email management, enhancing collaboration and efficiency in handling shared and personal inboxes, thus improving customer response and engagement.
                                    It ensures seamless communication within sales, support, and marketing departments, fostering a unified approach to customer service.


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
                                    {featuresEmail.map((feature) => (
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
                            src={emails}
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
