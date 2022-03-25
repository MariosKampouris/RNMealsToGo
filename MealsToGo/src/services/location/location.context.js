import React, {useState, useEffect} from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({children}) => {
    const [location, setLocation] = useState(null);
    const [keyword, setKeyword] = useState('San Francisco');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword.toLowerCase());
        if(!searchKeyword.length){
            //don't do anything
            return;
        }
        locationRequest(searchKeyword.toLowerCase())
        .then(locationTransform)
        .then(result => 
            {setIsLoading(false); 
            setLocation(result);
        })
        .catch((error) => {
            setIsLoading(false);
            setError(error);
        });
    };

    return(
    <LocationContext.Provider
    value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
    }}
    >
        {children}
    </LocationContext.Provider>
    )
};