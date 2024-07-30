'use client'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import { Dialog, Popover, Transition, Disclosure } from '@headlessui/react'
import {
  ArrowDownIcon, ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  ChevronRightIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  UsersIcon,
  IdentificationIcon,
  ChatBubbleBottomCenterTextIcon,
  MegaphoneIcon,
  EnvelopeOpenIcon,
} from '@heroicons/react/24/outline'
import sphere from '@/images/hero_sphere.png'
import logo_comunikcrm_white from '@/images/logo_comunikcrm_white.png'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { BotMessageSquare, EuroIcon, Group, HeadsetIcon, MailOpenIcon, MessageCircleMore, MessageSquareTextIcon, PhoneCallIcon, Share, Share2Icon, Ship, Users } from 'lucide-react'
import { Container } from './Container'
const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
const products = [
  { name: 'Cruise Manager ', description: 'Discover all the essential tools you need to efficiently manage your travel products.', href: '/cruise', icon: Ship, style: 'cruise' },
  { name: 'CRM ', description: 'Comprehensive CRM & Sales Process Solution for Travel Agencies', href: '/crm', icon: UsersIcon, style: 'crm' },
  { name: 'Socials Medias', description: ' Multi-Channel Live Chat Solution for Seamless Customer Interaction', href: '/socials', icon: Share2Icon, style: 'socials' },
  { name: 'Unified', description: 'Unify Your Team with Our All-in-One Communication and Collaboration Solution', href: '/unified', icon: MessageSquareTextIcon, style: 'unified' },
  { name: 'Emailing', description: 'Boost Your Marketing with Our Emailing and Marketing Automation Solution', href: '/marketing', icon: MailOpenIcon, style: 'marketing' },
  { name: 'Call Center', description: 'Enhance Your Call Center Operations with Our CRM Solution', href: '/unified', icon: HeadsetIcon, style: 'callcenter' },
  { name: 'VoIP', description: 'Revolutionize Your Communication with Our IP Telephony Solution', href: '/ia', icon: PhoneCallIcon, style: 'voip' },
  { name: 'IA', description: 'Build Customer Support with AI-Powered Live Chat Integration', href: '/ia', icon: BotMessageSquare, style: 'ia' },
  //  { name: 'Dashboard', description: 'Speak directly to your customers', href: '/dashboard', icon: Share2Icon, style: 'socials' },


]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]
const company = [
  { name: 'About us', href: '#', description: 'Learn more about our company values and mission to empower others' },
  { name: 'Careers', href: '#', description: 'Looking for you next career opportunity? See all of our open positions' },
  {
    name: 'Support',
    href: '#',
    description: 'Get in touch with our dedicated support team or reach out on our community forums',
  },
  { name: 'Blog', href: '#', description: 'Read our latest announcements and get perspectives from our team' },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Header2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>

      <header className="sm:sticky sm:top-0 inset-x-0 z-50 bg-slate-950">
        <Container >
          <nav className="relative flex items-center justify-between py-6" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image className="h-12 w-auto" src={logo_comunikcrm_white} alt="" width={177} height={48} />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-8 w-8 text-white" aria-hidden="true" />
              </button>
            </div>
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
              <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold font-display leading-6 text-white outline-none   opacity-70 hover:opacity-100">
                  Products
                  <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-3xl overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4 grid grid-cols-2 gap-3">
                      {products.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex gap-x-3 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div>
                            <div className={`mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-full  bg-${item.style}`}>

                              <item.icon className="h-6 w-6 text-white  group-hover:text-white" aria-hidden="true" />

                            </div>
                          </div>
                          <div className="flex-auto">

                            <a href={item.href} className={`block font-semibold font-display text-gray-700 group-hover:text-${item.style} `}>
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className={`text-gray-500 group-hover:text-${item.style}/70`}>{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-white hover:bg-gray-100"
                      >
                        <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div> */}
                  </Popover.Panel>
                </Transition>
              </Popover>

              <a href="#" className="text-sm font-semibold leading-6 text-white  opacity-70 hover:opacity-100">
                Company
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white   opacity-70 hover:opacity-100">
                Contact us
              </a>


            </Popover.Group>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
              <a href="#" className="text-sm font-semibold leading-6 text-white bg-black/30 hover:bg-black/50 pl-6 pr-4 py-2 rounded-lg">
                Early Register <ChevronRightIcon className='w-4 h-4 inline-flex' />
              </a>
            </div>
          </nav>

          <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {products.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7  hover:bg-gray-50"
                        >
                          <div className={`flex h-11 w-11 flex-none items-center justify-center rounded-full  bg-${item.style}`}>
                            <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                          </div>

                          {item.name}


                        </a>
                      ))}
                    </div>
                    <div className="space-y-2 py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50"
                      >
                        About us
                      </a>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50"
                      >
                        Contact
                      </a>

                      {/* {company.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))} */}
                    </div>
                    <div className="py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-50"
                      >
                        Get early access discount
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="p-3 text-base font-semibold leading-7 hover:bg-gray-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div> */}
            </Dialog.Panel>
          </Dialog>
        </Container>
      </header>
      <div className="hidden">
        <div className=' bg-cruise group-hover:text-cruise group-hover:text-cruise/70'>test</div>
        <div className=' bg-crm group-hover:text-crm group-hover:text-crm/70'>test</div>
        <div className=' bg-marketing group-hover:text-marketing group-hover:text-marketing/70'>test</div>
        <div className=' bg-socials group-hover:text-socials group-hover:text-socials/70'>test</div>
        <div className=' bg-ia group-hover:text-ia group-hover:text-ia/70'>test</div>
        <div className=' bg-unified group-hover:text-unified group-hover:text-unified/70'>test</div>
        <div className=' bg-callcenter group-hover:text-callcenter group-hover:text-callcenter/70'>test</div>
        <div className=' bg-voip group-hover:text-voip group-hover:text-voip/70'>test</div>


      </div>
    </>
  )
}
