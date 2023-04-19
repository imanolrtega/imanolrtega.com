'use client'

import { avatar, name } from '@/lib/info'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
}

function Avatar() {
  return (
    <Link aria-label="Imanol Ortega" href="/">
      <Image
        alt={name}
        className="rounded-full grayscale"
        src={avatar}
        placeholder="blur"
        width={70}
        priority
      />
    </Link>
  )
}

export default function Aside() {
  let pathname = usePathname() || '/'
  if (pathname.includes('/blog/')) {
    pathname = '/blog'
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="flex flex-col md:flex-row items-start mb-4 px-4 md:px-0">
          <Avatar />
        </div>
        <nav
          className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname
              return (
                <Link
                  key={path}
                  href={path}
                  className={clsx(
                    'transition-all hover:text-slate-800 dark:hover:text-slate-200 flex align-middle',
                    {
                      'text-slate-500': !isActive,
                      'font-semibold': isActive,
                    },
                    inter.className,
                  )}
                >
                  <span className="text-base relative py-[5px] px-[10px]">
                    {name}
                    {path === pathname ? (
                      <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 rounded-md z-[-1]" />
                    ) : null}
                  </span>
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}