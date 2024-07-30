import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import { Container } from './Container'

const features = [
  {
    name: 'Mobile Application',
    description:
      'Access all collaboration and communication tools on the go with a fully functional mobile app for iOS and Android devices.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Security',
    description:
      'Robust security protocols, including end-to-end encryption, to protect sensitive data and communications.',
    href: '#',
    icon: CloudArrowUpIcon,
  },

  {
    name: 'Privacy',
    description:
      'Comprehensive privacy controls to manage user access and ensure confidential information remains secure.',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Group Management',
    description:
      'Create and manage groups for different departments, projects, or interests to organize team communication',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Notifications',
    description:
      'Customizable notifications to stay updated on important messages, tasks, and events without unnecessary distractions.',
    href: '#',
    icon: CloudArrowUpIcon,
  },

  {
    name: 'Activity Feed',
    description:
      'A centralized feed that provides updates on team activities, project progress, and important announcements.',
    href: '#',
    icon: ArrowPathIcon,
  },
]

export default function FeatureIconUnified() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-unified">Deploy faster</h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-6xl font-display">
            Connected and Efficient Work Environment
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-300">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
        </div>
        <div className="pt-24">
          <dl className="grid grid-cols-3 gap-12">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-white">
                  <feature.icon className="h-6 w-6 flex-none text-unified" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  {/* <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-unified">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p> */}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
