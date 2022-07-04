import { ChangeEvent, useRef } from 'react';

export const SerchBar = () => {

    const debounceRef = useRef<NodeJS.Timeout>();

    const onQueryChange = ( event: ChangeEvent<HTMLInputElement> ) => {
        if ( debounceRef.current ) {
            clearTimeout( debounceRef.current );
        }
        debounceRef.current = setTimeout( () => {
            // TODO: search
            console.log('debounced value:', event.target.value);
        }, 350 );
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
