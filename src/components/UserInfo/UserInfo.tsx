import React from "react";

import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';

import { sxStyleUserInfo, sxStyleUserAvatar } from "./UserInfoStyle";
import { UserInfoPropsType } from "./UserInfo.types";

const UserInfo: React.FC<UserInfoPropsType> = ( { user, openInfo, closeInfo} ) => {

    return(
        <Dialog  
            fullWidth={true}
            open={openInfo}
            onClose={closeInfo}
            PaperProps={ {sx:sxStyleUserInfo} }
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"

        >
            <Avatar src={user.picture.large} sx={sxStyleUserAvatar}/>
            <DialogTitle >{`${user.name.title} ${user.name.first} ${user.name.last}`}</DialogTitle>
            <DialogContentText>Phone: {user.phone}</DialogContentText>
            <DialogContentText>Email: {user.email}</DialogContentText>
            <DialogContentText>Location: {user.location.country} {user.location.city} {user.location.street.name}</DialogContentText>

        </Dialog>
    )
} 

export default UserInfo