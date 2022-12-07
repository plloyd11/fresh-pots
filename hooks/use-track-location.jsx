import { useContext, useState } from 'react'
import { ACTION_TYPES, StoreContext } from '../store/store'

const useTrackLocation = () => {
  const [locationErrorMessage, setLocationErrorMessage] = useState(null)
  const [isFindingLocation, setIsFindingLocation] = useState(false)

  const { dispatch } = useContext(StoreContext)

  const success = (position) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    dispatch({
      type: ACTION_TYPES.SET_LOCATION,
      payload: { location: `${latitude},${longitude}` },
    })
    setLocationErrorMessage(null)
    setIsFindingLocation(false)
  }

  const error = () => {
    setIsFindingLocation(false)
    setLocationErrorMessage('Unable to retrieve your location')
  }

  const handleTrackLocation = () => {
    setIsFindingLocation(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error)
    } else {
      setLocationErrorMessage('Geolocation is not supported by this browser.')
      setIsFindingLocation(false)
      console.log('Geolocation is not supported by this browser.')
    }
  }

  return {
    // location,
    locationErrorMessage,
    handleTrackLocation,
    isFindingLocation,
  }
}

export default useTrackLocation
