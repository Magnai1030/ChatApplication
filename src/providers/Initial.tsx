import { ChildrenProps } from '@constants/Types';
import React, { createContext, useState } from 'react';

export type InitialValue = {
    loading: boolean;
    setLoading: (loading: boolean) => void;
};

export const InitialContext = createContext<InitialValue | null>(null);

export const InitialProvider: React.FC<ChildrenProps> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <InitialContext.Provider value={{ loading, setLoading }}>
            {children}
        </InitialContext.Provider>
    );
};
