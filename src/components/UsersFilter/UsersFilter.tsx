import React from "react";

import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

import GenderButtons from '../GenderButtons';
import NatSelect from '../NationalitySelect';
import Pages from "../Pages";
import ResultSelect from "../ResultSelect";

import { UsersFilterProps } from './UsersFilter.types';
import { sxStyleFilter } from "./UsersFilterStyle";


const UsersFilter: React.FC<UsersFilterProps> = ( { data, changeGender, changeNational, changeResult, changePage } ) => {
    return (
        <>
            <Container sx={sxStyleFilter}>
                <GenderButtons gender={data.gender} onChange={changeGender} />
                <Pages page={data.page} onChange={changePage}/>
                <ResultSelect results={data.results} onChange={changeResult} />
                <NatSelect nat={data.nat} onChange={changeNational} />
            </Container>
            <Divider />
        </>
    )
};

export default UsersFilter