import React from "react";

const SearchSettingsContext = React.createContext({
    searchSettings: {
        routeTypes: [],
        searchByRouteName: true,
        searchByAreaName: false
    },
    setSearchSettings: (settings) => void 0
});

export default SearchSettingsContext;