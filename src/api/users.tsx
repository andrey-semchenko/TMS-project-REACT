import axios from "axios";

import { UsersRequestParams } from './users.types'

export const getUsers = async (params: UsersRequestParams) => {
    const { data } = await axios.get (
        `https://randomuser.me/api`, {
            params
        }
    );
    return data
}