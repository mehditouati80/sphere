'use client'
import { Fragment, useState } from 'react'
import { Dialog, Transition, Disclosure } from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'
import { AppWindowMacIcon, Building2Icon, FileJson2Icon, MailOpenIcon, MessageCircleMoreIcon, PhoneCallIcon, ScreenShareOffIcon } from 'lucide-react'


const navigation = [
  // { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  {
    name: 'Cruise Booking',
    icon: UsersIcon,
    current: true,
    children: [
      { name: 'B2C, Website', href: '#' },
      { name: 'B2B, Resellers', href: '#' },
      { name: 'API, WebService', href: '#' },
      { name: 'Back-Office', href: '#' },
      { name: 'Mid-Office', href: '#' },
      { name: 'Cruise Content', href: '#' },

    ],
  },
  {
    name: 'Sales & CRM',
    icon: FolderIcon,
    current: false,
    children: [
      { name: 'Contacts', href: '#' },
      { name: 'Booking', href: '#' },
      { name: 'Deals', href: '#' },
    ],
  },
  { name: 'Social Medias', href: '#', icon: DocumentDuplicateIcon, current: false },



  {
    name: 'Marketing',
    icon: FolderIcon,
    current: false,
    children: [
      { name: 'Emailing', href: '#' },
      { name: 'Page Builder', href: '#' },
      { name: 'Automation', href: '#' },
    ],
  },
  {
    name: 'Unified Team',
    icon: FolderIcon,
    current: false,
    children: [
      { name: 'Telephony IP', href: '#' },
      { name: 'Chat', href: '#' },
      { name: 'Visio Meet', href: '#' },
      { name: 'Tasks', href: '#' },
    ],
  },
  { name: 'Analytics', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Chatbot AI', href: '#', icon: ChartPieIcon, current: false },
]

const teams = [
  { id: 1, name: 'Cruise Lines Manager', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Team Collaboration', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Business Analytics', href: '#', initial: 'W', current: false },
  { id: 3, name: 'Marketing Automation', href: '#', initial: 'W', current: false },
  { id: 3, name: 'AI Chatbot', href: '#', initial: 'W', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-50 text-blue-600'
                                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current ? 'text-blue-600' : 'text-gray-300 group-hover:text-blue-600',
                                      'h-6 w-6 shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? 'bg-gray-50 text-blue-600'
                                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  {/* <span
                                    className={classNames(
                                      team.current
                                        ? 'text-blue-600 border-blue-600'
                                        : 'text-gray-400 border-gray-200 group-hover:border-blue-600 group-hover:text-blue-600',
                                      'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                                    )}
                                  >
                                    {team.initial}
                                  </span> */}
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}

        <div className="hidden lg:flex grow flex-col gap-y-5 overflow-y-auto min-w-52">

          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      {!item.children ? (
                        <a
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-700'
                          )}
                        >
                          <item.icon className="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                          {item.name}
                        </a>
                      ) : (
                        <Disclosure as="div">
                          {({ open }) => (
                            <>
                              <Disclosure.Button
                                className={classNames(
                                  item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                                  'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700'
                                )}
                              >
                                <item.icon className="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                                {item.name}
                                <ChevronRightIcon
                                  className={classNames(
                                    open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                    'ml-auto h-5 w-5 shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel as="ul" className="mt-1 px-2">
                                {item.children.map((subItem) => (
                                  <li key={subItem.name}>
                                    {/* 44px */}
                                    <Disclosure.Button
                                      as="a"
                                      href={subItem.href}
                                      className={classNames(
                                        subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                                        'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700'
                                      )}
                                    >
                                      {subItem.name}
                                    </Disclosure.Button>
                                  </li>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      )}
                    </li>
                  ))}
                </ul>
              </li>

            </ul>
          </nav>
        </div>
        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">Dashboard</div>
          {/* <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a> */}
        </div>


      </div>
    </>
  )
}
