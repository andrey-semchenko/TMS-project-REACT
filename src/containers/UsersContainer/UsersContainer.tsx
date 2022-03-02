import React, { useEffect, useState } from "react";

import Loader from "../../components/Loader";
import UsersFilter from '../../components/UsersFilter'
import UsersList from "../../components/UsersList";

import { useFormik } from "formik";
import { InitialValuesProps } from "./UsersContainer.types";
import { User } from '../../api/users.types'
import { getUsers } from "../../api/users";


const Form: React.FC = () => {
    const {values, setFieldValue} = useFormik<InitialValuesProps> ({
        initialValues: {
            gender: "Male",
            nat: "CA",
            page: 1,
            results: 8,
        },
        onSubmit: (data) => console.log(data)
    });

    const [users, setUsers] = useState<User[]>([]);
    const [errors, setErrors] = useState<string>("");
    const [load, setLoad] = useState<boolean>(false);

    const changeGender = (event: React.ChangeEvent<HTMLButtonElement>, newGender:string) => {
        if (newGender)
        setFieldValue("gender", newGender);
    };

    const changePage = (event: React.ChangeEvent<HTMLSelectElement>, newPage:number) => {
        setFieldValue("page", newPage)
    };

    const changeResult = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFieldValue("results", event.target.value)
    };

    const changeNational = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFieldValue("nat", event.target.value)
    };


    useEffect(() => {
        setLoad(true);

        getUsers(values)
        .then( response => setUsers(response.results))
        .catch( error => setErrors(error.message))
        .finally( () => setLoad (false))

    }, [values]);

    return (
        <>
            <UsersFilter
                data={values} 
                changeGender={changeGender}
                changePage={changePage}
                changeResult={changeResult}
                changeNational={changeNational}
            />
            {load && <Loader/>}
            {!!errors && `${errors}`}
            {!load && 
                !errors &&
                <UsersList arrayUsers={users} />
                }
        </>
    )
}

export default Form