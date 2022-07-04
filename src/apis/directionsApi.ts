import axios from 'axios';

const directionApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiYWxleGVsaXphZ2EiLCJhIjoiY2w1MnF0bWIwMGk1NzNibXljYzR1dnVjeiJ9.2SUZCHzUgAN93CWQvfe_wA'

    }
})

export default directionApi;