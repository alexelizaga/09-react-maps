import { useContext, useState } from 'react';

import { Feature } from '../interfaces/places';
import { LoadingPlaces } from './';
import { PlacesContext, MapContext } from '../context';

export const SearchResults = () => {
    const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
    const { map, getRouteBetweenPoints } = useContext(MapContext);

    const [activeId, setActiveId] = useState('');

    const onPlaceClick = ( place: Feature ) => {
        setActiveId(place.id);
        const [ lng, lat ] = place.center;
        map?.flyTo({
            center: [lng, lat],
            zoom: 14,
        })
    }

    const getRoute = ( place: Feature ) => {
        if ( !userLocation ) return;
        const [ lng, lat ] = place.center;

        getRouteBetweenPoints( userLocation, [ lng, lat ] );
    }

    if( isLoadingPlaces ) {
        return (
            <LoadingPlaces />
        )
    }

    if ( places.length === 0 ) {
        return<></>
    }

    return (
        <ul className="list-group mt-3">

            {
                places.map( place => (
                    <li
                        key={ place.id }
                        className={`list-group-item list-group-item-action pointer ${(activeId === place.id) ? 'active' : ''}`}
                        onClick={ () => onPlaceClick(place) }
                    >
                        <h6>{ place.text_es }</h6>
                        <p
                            style={{
                                fontSize: '12px',
                            }}
                        >
                            { place.place_name }
                        </p>
                        <button
                            onClick={ () => getRoute( place ) }
                            className={`btn btn-sm ${ activeId === place.id ? 'btn-outline-light' : 'btn-outline-primary' }`}
                        >
                            Addresses
                        </button>
                    </li>
                ))
            } 
        </ul>
    )
}
