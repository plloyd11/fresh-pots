import Head from 'next/head'
import Hero from '../components/Hero'
import CoffeeCard from '../components/CoffeeCard'
import useTrackLocation from '../hooks/use-track-location'
import { fetchCoffeeStores } from '../lib/coffee-stores'
import { useState, useEffect, useContext } from 'react'
import { StoreContext, ACTION_TYPES } from '../store/store'

// this is server side code
export async function getStaticProps() {
  const coffeeStores = await fetchCoffeeStores()
  return {
    props: {
      coffeeStores,
    },
  }
}

// this is client side code
export default function Home() {
  const { handleTrackLocation, locationErrorMessage, isFindingLocation } =
    useTrackLocation()

  const [coffeeStoresError, setCoffeeStoresError] = useState(null)

  const HandleLocationClick = () => {
    handleTrackLocation()
  }

  const { dispatch, state } = useContext(StoreContext)

  const { coffeeStores, location } = state

  useEffect(() => {
    if (location) {
      try {
        async function fetchData() {
          const coffeeStores = await fetchCoffeeStores(location)
          dispatch({
            type: ACTION_TYPES.SET_COFFEE_STORES,
            payload: {
              coffeeStores: coffeeStores,
            },
          })
        }
        fetchData()
      } catch (error) {
        setCoffeeStoresError(error.message)
      }
    }
  }, [location])

  console.log(coffeeStores)

  return (
    <>
      <Head>
        <title>Fresh Pots</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <div className="flex-1">
        <Hero
          buttonText={
            isFindingLocation
              ? 'Locating shops near you'
              : 'Search nearby stores'
          }
          function={HandleLocationClick}
        />
        <section className="px-4 mx-auto space-y-8 max-w-7xl">
          {coffeeStores.length > 0 && (
            <h2 className="text-3xl font-semibold font-display">
              Stores near me
            </h2>
          )}
          <div className="grid grid-cols-3 gap-6">
            {coffeeStores.length > 0 &&
              coffeeStores.map((coffeeStore) => (
                <CoffeeCard
                  key={coffeeStore.fsq_id}
                  name={coffeeStore.name}
                  description={coffeeStore.description}
                  img={coffeeStore.imgUrl || '/images/coffee.jpg'}
                  url={`/coffee-shop/${coffeeStore.fsq_id}`}
                />
              ))}
          </div>
        </section>
      </div>
    </>
  )
}
