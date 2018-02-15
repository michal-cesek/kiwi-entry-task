const apiSkypickerUrl = 'https://api.skypicker.com'

const buildFlightsApiUrl = ({ cityFrom, cityTo, date }) =>
    `${apiSkypickerUrl}/flights?flyFrom=${cityFrom}&to=${cityTo}&dateFrom=${date}&dateTo=${date}&partner=picky&directFlights=0`


const doFlightsGetApiRequest = data => fetch(buildFlightsApiUrl(data)).then(res => res.json())
// .catch(error => console.error('Error:', error))
// .then(response => console.log('Success:', response));

export default {
    doFlightsGetApiRequest
}