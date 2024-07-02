import React, { createContext, useState } from 'react';

const RegulationsContext = createContext();

const RegulationsProvider = ({ children }) => {
    const [regulations, setRegulations] = useState([]);

    return (
        <RegulationsContext.Provider value={{ regulations, setRegulations }}>
            {children}
        </RegulationsContext.Provider>
    );
};

export { RegulationsContext, RegulationsProvider };
