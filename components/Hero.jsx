import Image from 'next/image'

export default function Hero(props) {
  return (
    <div className="isolate bg-[#271c19]">
      <section>
        <div className="relative px-6 lg:px-8">
          <div className="pt-8 pb-12 mx-auto max-w-7xl sm:pt-16 sm:pb-24 lg:pt-48 lg:pb-40">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h1 className="font-display text-4xl font-bold tracking-tight text-[#fffffe] sm:text-6xl">
                  Fresh Pots!
                </h1>
                <p className="mt-6 text-lg leading-8 text-[#fff3ec]">
                  Discover the best coffee shops in your city. Read reviews,
                  find the perfect spot, and get your caffeine fix.
                </p>
                <div className="flex mt-8 gap-x-4">
                  <button
                    onClick={props.function}
                    className="relative z-10 flex items-center gap-2 rounded-lg bg-[#ffc0ad] px-8 py-3 text-xl font-semibold leading-7 text-[#271c19] shadow-sm ring-1 ring-[#140d0b] hover:bg-[#eebbc3] hover:ring-[#eebbc3]"
                    data-blobity-tooltip="Click here to search for up to 30 local coffee shops!"
                  >
                    {props.buttonText}
                  </button>
                </div>
              </div>
              <div>
                <Image
                  src="/images/hero.jpg"
                  alt="Dave Grohl yelling"
                  width="800"
                  height="600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
