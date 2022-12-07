import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { fetchCoffeeStores } from '../../lib/coffee-stores'

export async function getStaticProps(context) {
  const coffeeStores = await fetchCoffeeStores()
  const coffeeStore = coffeeStores.find(
    (coffeeStore) => coffeeStore.fsq_id.toString() === context.params.id
  )
  return {
    props: {
      coffeeStore,
    },
  }
}

export async function getStaticPaths() {
  const coffeeStores = await fetchCoffeeStores()
  return {
    paths: coffeeStores.map((coffeeStore) => ({
      params: { id: coffeeStore.fsq_id.toString() },
    })),
    fallback: false,
  }
}

export default function Coffee(props) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  const { coffeeStore } = props

  return (
    <>
      <Head>
        <title>{coffeeStore.name} | Fresh Pots</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-1">
        <main className="mt-20">
          <section className="max-w-6xl px-4 mx-auto space-y-12">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                  clipRule="evenodd"
                />
              </svg>

              <Link href="/">Back home</Link>
            </div>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-5">
                <h1 className="text-4xl font-bold text-gray-900">
                  {coffeeStore.name}
                </h1>
                <p className="text-xl text-gray-700">
                  {coffeeStore.description}
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${coffeeStore.name}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-700 underline"
                    >
                      <p className="text-xl">
                        {coffeeStore.location.address},{' '}
                        {coffeeStore.location.locality},
                        {coffeeStore.location.region}{' '}
                        {coffeeStore.location.postcode}
                      </p>
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                      />
                    </svg>

                    <p className="text-xl ">
                      {coffeeStore.location.neighborhood[0]}
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src={coffeeStore.imgUrl || '/images/coffee.jpg'}
                alt={coffeeStore.name}
                width="600"
                height="400"
                className="object-cover object-center col-span-7 shadow-md h-96 rounded-xl"
              />
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
