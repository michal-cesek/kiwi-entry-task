const apiSkypickerUrl = 'https://api.skypicker.com'

const buildFlightsApiUrl = ({ cityFrom, cityTo, date }) =>
    `${apiSkypickerUrl}/flights?flyFrom=${cityFrom}&to=${cityTo}&dateFrom=${date}&dateTo=${date}&partner=picky&directFlights=0`

const buildLocationsApiUrl = ({ term }) =>
    `${apiSkypickerUrl}/locations/?term=${term}&v=2&locale=en-US`


const doGetRequest = url => fetch(url).then(res => res.json())
// .catch(error => console.error('Error:', error))
// .then(response => console.log('Success:', response));

const doFlightsGetApiRequest = params => doGetRequest(buildFlightsApiUrl(params))
const doLocationsGetApiRequest = params => doGetRequest(buildLocationsApiUrl(params))


export default {
    doFlightsGetApiRequest,
    doLocationsGetApiRequest
}