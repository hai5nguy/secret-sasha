import fetchGifters from './fetch-gifters'

const POLLING_DELAY = 5000

export default () => {
    fetchGifters()
    setInterval(fetchGifters, POLLING_DELAY)
}
