import { ChildrenProps, UserI } from '@constants/Types';
import Variables from '@constants/Variables';
import React, { createContext, useState, useEffect } from 'react';

export type UserValue = {
    selectedUser: UserI | undefined;
    userList: UserI[];
    setSelectedUser: (user: UserI) => void;
    setUserList: (user: UserI[]) => void;
};

export const UserContext = createContext<UserValue | null>(null);

export const UserProvider: React.FC<ChildrenProps> = ({ children }) => {
    const [selectedUser, setSelectedUser] = useState<UserI>();
    const [userList, setUserList] = useState<UserI[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setUserList(Variables.userList);
        }, 2000);
    }, []);

    useEffect(() => {
        setSelectedUser(userList[0]);
    }, [userList]);

    return (
        <UserContext.Provider
            value={{ selectedUser, setSelectedUser, userList, setUserList }}>
            {children}
        </UserContext.Provider>
    );
};
