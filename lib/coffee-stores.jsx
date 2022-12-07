import { createApi } from 'unsplash-js'

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
})

const getUrlForCoffeeStores = (location, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${location}&limit=${limit}`
}

export const getUnplashPhotos = async () => {
  const photos = await unsplash.search.getPhotos({
    query: 'coffee shop',
    page: 1,
    perPage: 30,
    orientation: 'landscape',
  })

  const unsplashResults = photos.response.results

  return unsplashResults.map((result) => result.urls['small'])
}

export const fetchCoffeeStores = async (
  location = '42.4512160104167,-76.50846182473134'
) => {
  const photos = await getUnplashPhotos()
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
    },
  }

  const response = await fetch(
    getUrlForCoffeeStores(location, 'coffee', 30),
    options
  )
  const data = await response.json()

  return data.results.map((result, idx) => {
    return {
      ...result,
      imgUrl: photos[idx],
    }
  })
}
