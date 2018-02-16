const apiSkypickerUrl = 'https://api.skypicker.com'

const buildFlightsApiUrl = ({ cityFrom, cityTo, date }) => {
    const formatedDate = date.format('DD/MM/YYYY')
    return `${apiSkypickerUrl}/flights?`
        + `flyFrom=${cityFrom}&to=${cityTo}`
        + `&dateFrom=${formatedDate}&dateTo=${formatedDate}`
        + `&partner=picky&directFlights=0`
}

const buildLocationsApiUrl = ({ term }) =>
    `${apiSkypickerUrl}/locations/?term=${term}&v=2&locale=en-US`

// TODO better error handling
const doGetRequest = url =>
    fetch(url)
        .then(res => res.json())
        .catch(error => {
            console.error('Error:', error)
            return { data: [], locations: [] }
        })

const doFlightsGetApiRequest = params => doGetRequest(buildFlightsApiUrl(params))
const doLocationsGetApiRequest = params => doGetRequest(buildLocationsApiUrl(params))


export default {
    doFlightsGetApiRequest,
    doLocationsGetApiRequest
}