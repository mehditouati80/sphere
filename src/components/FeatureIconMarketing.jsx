import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Mailing list management',
    description:
      'Single/double opt-in, list segmenting, mass importing/exporting, subscription form builder, blacklisting, etc.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Email verification',
    description:
      'Ensure that your email list is clean and duly validated. Helps reduce bounce back and protect your sending reputation.',
    href: '#',
    icon: CloudArrowUpIcon,
  },

  {
    name: 'Email builder',
    description:
      'Acelle Mail comes with an advanced Email Template Builder as well as dozens of pre-built email templates/layouts for you to start on.',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Automation',
    description:
      'Automation features allow you to automatically or conditionally send email campaigns to your list or individuals in response to several types of events: list subscription, open/click, recurring events, etc.',
    href: '#',
    icon: CloudArrowUpIcon,
  },

  {
    name: 'Open/click tracking',
    description:
      'Opens / clicks / bounces / complaints are automatically recorded. As a result, you can track the delivery status of every single email sent out.',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Privacy Acceptance and GDPR',
    description:
      'Maintain transparency, protect user privacy, and build trust by adhering to GDPR and other data privacy laws.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
]

export default function FeatureIconMarketing() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-lg lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to deploy your app
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-300">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  {/* <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-400">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p> */}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
