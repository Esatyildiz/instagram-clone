/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

export const StoreContext = React.createContext(null);

export default ({ children }) => {

    const [open, setOpen] = useState(false);

    const context = {
        open,
        setOpen
    };

    return (
        <StoreContext.Provider value={context}>{children}</StoreContext.Provider>
    );
};