import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiYWxleGVsaXphZ2EiLCJhIjoiY2w1MnF0bWIwMGk1NzNibXljYzR1dnVjeiJ9.2SUZCHzUgAN93CWQvfe_wA'

    }
})

export default searchApi;