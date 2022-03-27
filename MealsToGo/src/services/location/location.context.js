import React, {useState, useEffect, useContext} from "react";

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
    };

    useEffect(() => {
        if(!keyword.length){
            //don't do anything
            return;
        }
        locationRequest(keyword.toLowerCase())
        .then(locationTransform)
        .then(result => 
            {setIsLoading(false); 
            setLocation(result);
            console.log(result);
        })
        .catch((error) => {
            setIsLoading(false);
            setError(error);
        });
    }, [keyword]);

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