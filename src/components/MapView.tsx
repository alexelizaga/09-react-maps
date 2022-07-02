import { useContext, useLayoutEffect, useRef } from 'react';
import { Map } from 'mapbox-gl';

import { Loading } from './';
import { PlacesContext } from '../context';


export const MapView = () => {

    const { isLoading, userLocation } = useContext(PlacesContext);
    const mapDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if ( !isLoading ) {
            const map = new Map({
                container: mapDiv.current!,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: userLocation,
                zoom: 14,
                projection: { name: 'globe' },
            });
        }
    }, [ isLoading ]);

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <div ref={mapDiv}
            style={{
                height: '100vh',
                position: 'fixed',
                top: 0,
                width: '100vw',
            }}
        >
            { userLocation?.join(',')}
        </div>
    )

}
