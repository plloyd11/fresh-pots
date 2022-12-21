import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="relative z-50 flex-initial bg-transparent">
      <nav className="px-4 mx-auto max-w-7xl" aria-label="Top">
        <div className="flex items-center justify-between w-full py-4 border-b lg:border-none">
          <div className="flex items-center">
            <Link href="/" className="block cursor-pointer">
              <span className="sr-only">Fresh Pots</span>
              <Image
                src="/images/logo.png"
                alt="Fresh Pots"
                width={96}
                height={96}
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
