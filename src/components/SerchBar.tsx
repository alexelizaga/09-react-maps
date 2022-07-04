import { ChangeEvent, useRef, useContext } from 'react';

import { PlacesContext } from '../context';

export const SerchBar = () => {

    const { searchPlacesByTerm } = useContext(PlacesContext);

    const debounceRef = useRef<NodeJS.Timeout>();

    const onQueryChange = ( event: ChangeEvent<HTMLInputElement> ) => {
        if ( debounceRef.current ) {
            clearTimeout( debounceRef.current );
        }
        debounceRef.current = setTimeout( () => {
            searchPlacesByTerm( event.target.value );
        }, 500 );
    }

    return (
        <div className="search-container">
            <input
                type="text"
                className="form-control"
                placeholder="Search location..."
                onChange={ onQueryChange }
            />
        </div>
    )
}
