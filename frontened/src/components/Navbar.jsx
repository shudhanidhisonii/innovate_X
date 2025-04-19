import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from '@headlessui/react'
  import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
  
  const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'About', href: '#', current: false },
    { name: 'Facts', href: '#', current: false },
    { name: 'Stats', href: '#', current: false },
    { name: 'Blogs', href: '#', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Navbar() {
    return (
      <div className="relative h-[675px] text-white">
        {/* Background image */}
       
        <div className="absolute inset-0 z-0">
        <img
          src="/Background.png"
          alt="Full background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  opacity-60" /> {/* optional dark overlay */}
        </div>
        
  
        {/* Foreground content */}
        <div className="relative z-10">
          <Disclosure as="nav" className="bg-transparent">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                    <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src="logo.png"
                      alt="Logo"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 bg-opacity-50 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:bg-opacity-60 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
  
                <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button className="px-4 py-2 text-white bg-black bg-opacity-60 border border-green-400 hover:border-green-300 hover:shadow-lg rounded-md text-sm font-medium transition-all duration-200">
                    Login / Signup
                  </button>
                  <button className="px-4 py-2 bg-red-600 bg-opacity-80 text-white hover:bg-red-700 rounded-md text-sm font-medium transition-all duration-200">
                    Raise a Complaint
                  </button>
                </div>
              </div>
            </div>
  
            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </Disclosure>
  
          <main className="p-6 text-center">
          </main>
        </div>
      </div>
    )
  }