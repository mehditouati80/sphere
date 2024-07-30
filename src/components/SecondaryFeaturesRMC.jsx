'use client'

import { useId } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'


import screenshotVoip from '@/images/screenshots/unified/voip.svg'
import screenshotChat from '@/images/screenshots/unified/chat.svg'
import screenshotVisio from '@/images/screenshots/unified/visio.svg'
import screenshotTasks from '@/images/screenshots/unified/tasks.svg'
import screenshotEmails from '@/images/screenshots/unified/emails.svg'


import screenshotBackoffice from '@/images/screenshots/cruise/backoffice.svg'

import screenshotBookingEngine from '@/images/screenshots/cruise/bookingengine.svg'
import screenshotB2C from '@/images/screenshots/cruise/b2c.svg'
import screenshotApi from '@/images/screenshots/cruise/api.svg'
 

import screenshotContacts from '@/images/screenshots/crm/contacts.svg'
import screenshotDeals from '@/images/screenshots/crm/deals.svg'
import screenshotTickets from '@/images/screenshots/crm/tickets.svg'
import screenshotCallCenter from '@/images/screenshots/crm/callcenter.svg'

import screenshDashboard from '@/images/screenshots/marketing/dashboard.svg'
import screenshotBuilder from '@/images/screenshots/marketing/builder.svg'
import screenshotAutomation from '@/images/screenshots/marketing/automation.svg'

import screenshotLiveChat from '@/images/screenshots/rmc/livechat.svg'
import screenshotInbox from '@/images/screenshots/rmc/inbox.svg'
import screenshotIA from '@/images/screenshots/rmc/ia.svg'



import {
  ArrowPathIcon,
  CheckIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleBottomCenterTextIcon,
  VideoCameraIcon,
  CalendarDaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
  CurrencyEuroIcon,
  HeartIcon
} from '@heroicons/react/20/solid'
const infos = [
  {
    name: 'Push to deploy',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus.',
    href: '#',
    icon: CheckIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
    icon: CheckIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: CheckIcon,
  },

  {
    name: 'Push to deploy',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus.',
    href: '#',
    icon: CheckIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: CheckIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
    icon: CheckIcon,
  },

  {
    name: 'Simple queues',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: CheckIcon,
  },
  {
    name: 'Push to deploy',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus.',
    href: '#',
    icon: CheckIcon,
  },
  {
    name: 'Database backups',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus.',
    href: '#',
    icon: CheckIcon,
  },


]

const features = [
 
  {
    name: 'Live Chat',
    summary:
      'Never lose track of what’s in stock with accurate inventory tracking.',
    description:
      'We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.',
    image: screenshotTickets,
    posts: [
      {
        id: 1,
        title: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
      {
        id: 2,
        title: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
      {
        id: 3,
        title: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
      {
        id: 4,
        title: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
      {
        id: 5,
        name: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
      {
        id: 6,
        name: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
    ],
    icon: HeartIcon
    // icon: function InventoryIcon() {
    //   return (
    //     <>
    //       <path
    //         opacity=".5"
    //         d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
    //         fill="#fff"
    //       />
    //       <path
    //         opacity=".3"
    //         d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
    //         fill="#fff"
    //       />
    //       <path
    //         d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
    //         fill="#fff"
    //       />
    //     </>
    //   )
    // },
  },
  {
    name: 'Social Inbox',
    summary:
      'Never lose track of what’s in stock with accurate inventory tracking.',
    description:
      'We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.',
    image: screenshotCallCenter,
    posts: [
      {
        id: 1,
        title: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
      {
        id: 2,
        title: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
      {
        id: 3,
        title: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
      {
        id: 4,
        title: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
      {
        id: 5,
        name: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
      {
        id: 6,
        name: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
    ],
    icon: CalendarDaysIcon,

  },
  {
    name: 'Analytics',
    summary:
      'Never lose track of what’s in stock with accurate inventory tracking.',
    description:
      'We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.',
    image: screenshotCallCenter,
    posts: [
      {
        id: 1,
        title: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
      {
        id: 2,
        title: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
      {
        id: 3,
        title: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
      {
        id: 4,
        title: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
      {
        id: 5,
        name: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
      {
        id: 6,
        name: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
    ],
    icon: CalendarDaysIcon,

  },
  {
    name: 'IA',
    summary:
      'Never lose track of what’s in stock with accurate inventory tracking.',
    description:
      'We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.',
    image: screenshotCallCenter,
    posts: [
      {
        id: 1,
        title: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
      {
        id: 2,
        title: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
      {
        id: 3,
        title: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
      {
        id: 4,
        title: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
      {
        id: 5,
        name: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
      {
        id: 6,
        name: 'Push to deploy.',
        icon: CloudArrowUpIcon,
      },
    ],
    icon: CalendarDaysIcon,

  },


]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-30 hover:opacity-100')}
      {...props}
    >
      <div className={clsx(
        'flex justify-center items-center gap-x-3 py-6 px-8',
        isActive ? 'bg-white rounded-t-xl' : 'bg-teal-50',
      )}
      >

        <div
          className={clsx(
            'w-9 h-9 flex items-center justify-center rounded-lg',
            isActive ? 'bg-teal-600' : 'bg-teal-600',
          )}
        >

          <feature.icon className="w-6 h-6 text-white" />

        </div>
        <h3
          className={clsx(
            'text-sm font-semibold',
            isActive ? 'text-teal-600' : 'text-slate-600',
          )}
        >
          {feature.name}
        </h3>
        {/* <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p> */}
      </div>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />

          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (

    <>


      <TabGroup className="hidden mt-6  lg:block">
        {({ selectedIndex }) => (
          <>
            <TabList className="grid grid-cols-5 items-center sticky top-0 z-10">
              {features.map((feature, featureIndex) => (
                <Feature
                  key={feature.summary}
                  feature={{
                    ...feature,
                    name: (
                      <Tab className="ui-not-focus-visible:outline-none">
                        <span className="absolute inset-0" />
                        {feature.name}
                      </Tab>
                    ),
                  }}
                  isActive={featureIndex === selectedIndex}
                  className="relative"
                />
              ))}
            </TabList>
            <TabPanels className="relative overflow-hidden bg-white py-6 rounded-xl">
              <div className="-mx-5 flex">
                {features.map((feature, featureIndex, posts) => (

                  <TabPanel
                    static
                    key={feature.summary}
                    className={clsx(
                      'px-8 transition duration-500 ease-in-out ui-not-focus-visible:outline-none',
                      featureIndex !== selectedIndex && 'opacity-20',
                    )}
                    style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                    aria-hidden={featureIndex !== selectedIndex}
                  >

                    <div className="relative overflow-hidden">
                      <div className="mx-auto w-[63rem] px-6 lg:px-8">
                        <Image
                          alt="App screenshot"
                          className="rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                          width={2432}
                          height={1442}
                          src={feature.image}
                        />
                        {/* <div className="relative" aria-hidden="true">
                          <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-50 pt-[7%]" />
                        </div> */}
                      </div>
                    </div>
                    {/* <div className="w-[63rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <Image
                      className="w-full"
                      src={feature.image}
                      alt=""
                      width={2432}
                      height={1442}
                    />
                  </div> */}
                    <div className="p-8">
                      <div>
                        <h4 className="font-display font-semibold text-4xl tracking-tight text-slate-600 sm:text-2xl mb-6">
                          Simplify everyday business tasks :
                        </h4>
                        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-4">
                          {infos.map((info) => (
                            <div key={info.name} className="relative pl-9">
                              <dt className="inline font-semibold text-slate-500">
                                <info.icon className="absolute left-1 top-1 h-5 w-5 text-teal-600" aria-hidden="true" />
                                {info.name}
                              </dt>{' '}
                              {/* <dd className="inline">{info.description}</dd> */}
                            </div>
                          ))}
                        </dl>
                      </div>


                    </div>
                  </TabPanel>
                ))}
              </div>

            </TabPanels>
          </>
        )}
      </TabGroup >
    </>

  )
}

export function SecondaryFeaturesRMC() {
  return (
    <section
      id="RMC"
      aria-label="Features for simplifying everyday business tasks"
      className="py-12 bg-teal-50"
    >
      <Container>
        <div className="mx-auto max-w-xl md:text-center">
          <h2 className="text-base font-bold leading-7 text-teal-400">RMC</h2>
          <h3 className="font-display font-semibold text-4xl tracking-tight text-teal-600 sm:text-6xl">
            Simplify everyday business tasks.
          </h3>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Because you’d probably be a little confused if we suggested you
            complicate your everyday business tasks instead.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
