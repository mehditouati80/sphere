import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Transcript',
    description:
      'Download conversation transcripts as text files and send them to users.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Tags',
    description:
      'Effortlessly organize and categorize conversations with the use of tags.',
    href: '#',
    icon: CloudArrowUpIcon,
  },

  {
    name: 'Agents Collision Detection',
    description:
      'Prevent multiple agents from working on the same conversation.',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Agent Ratings',
    description:
      'Gather feedback on your customers\' live chat experiences and use lessons learned to improve customer service. Check your agents\' ratings and send post-chat messages.',
    href: '#',
    icon: CloudArrowUpIcon,
  },

  {
    name: 'Offline Message',
    description:
      'Send a message or display a banner to the user when it is not office hours or when all agents are offline. Personalize the message to show it only when you want it and the way you want it.',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Real-time Queue',
    description:
      'Notifies visitors of their position in the queue and waiting time in real-time. Automatically distribute the conversations among all available agents and set concurrent chats limit.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
]

export default function FeatureIconSocials() {
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
