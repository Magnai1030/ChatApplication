import React, { createContext, useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { ChildrenProps } from '@constants/Types';
import ErrorModal from '@components/modals/ErrorModal';

export type CommonValue = {
    padding: number;
    setErrorMessage: (message: string | undefined) => void;
};

export const CommonContext = createContext<CommonValue | null>(null);

export const CommonProvider: React.FC<ChildrenProps> = ({ children }) => {
    const [padding, setPadding] = useState<number>(0);
    const [errorMessage, setErrorMessage] = useState<string>();

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardWillShow',
            event => {
                setPadding(event.endCoordinates.height - 29);
            },
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardWillHide',
            () => {
                setPadding(0);
            },
        );
        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return (
        <CommonContext.Provider value={{ padding, setErrorMessage }}>
            {children}
            {errorMessage ? (
                <ErrorModal
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                />
            ) : null}
        </CommonContext.Provider>
    );
};
