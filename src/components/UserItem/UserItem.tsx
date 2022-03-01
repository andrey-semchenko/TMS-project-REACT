import  React, {useState} from 'react';

import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import UserInfo from '../UserInfo';

import { UserItemPropsType } from './user.item.props.type'


const UserItem: React.FC<UserItemPropsType> = ( {user} ) => {

    const [open, setOpen] = useState<Boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <ListItem sx={{cursor: 'pointer'}} onClick={handleOpen} >
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} />
                    </ListItemAvatar>
                    <ListItemText primary={ `${user.name.title} ${user.name.first} ${user.name.last}`} secondary={user.phone} />
                </ListItemButton>
            </ListItem>
            <Divider />
            <UserInfo user={user}  openInfo={open} closeInfo={handleClose}/>
        </>

)

};

export default UserItem