import React from "react";
import Container from '@mui/material/Container';

import { TailSpin } from "react-loader-spinner";
import { sxStyle } from "./LoaderStyle";


const Loader: React.FC = () => {
    return (
        <Container sx={sxStyle}>
            <TailSpin  
                color="#008B8B"
                height={150} 
                width={150} 
                ariaLabel='loading'/>
        </Container>
    )

};

export default Loader