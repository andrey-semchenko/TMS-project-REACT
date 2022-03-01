
import React from "react";
import List from '@mui/material/List';

import UserItem from "../UserItem";

import { UserListPropsType } from "./UsersList.types";


const UsersList: React.FC<UserListPropsType> = ( {arrayUsers} ) => {
    return(
        <List>
            {arrayUsers.map( (item) => 
                <UserItem user={item} key={item.login.uuid}/>
                )}
        </List>
    )
};

export default UsersList