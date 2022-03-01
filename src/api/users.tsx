import axios from "axios";

import { UsersPropsParamsApi } from './usersProps'

export const getUsers = async (params: UsersPropsParamsApi) => {
    const { data } = await axios.get (
        `https://randomuser.me/api`, {
            params
        }
    );
    return data
}