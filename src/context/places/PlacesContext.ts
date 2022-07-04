import { createContext } from 'react';

export interface PlacesContextProps {
    isLoading: boolean;
    userLocation?: [ number, number ];

    // Methods
    searchPlacesByTerm: (query: string) => Promise<any>;
}


export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps);