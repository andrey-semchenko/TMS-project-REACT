import  React from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';

import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';

import { GenderButtonsProps } from "./GenderButtonsProps"
import { Box } from '@mui/system';

const GenderButtons: React.FC<GenderButtonsProps> = ( {gender, onChange} ) => {
    return (
        <Box>
            <Typography>Gender: {gender}</Typography>
            <ToggleButtonGroup 
                value={gender}
                onChange={onChange}
                exclusive
            >

                <ToggleButton value="Male">
                    <MaleIcon />
                </ToggleButton>

                <ToggleButton value="Female">
                    <FemaleIcon />
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    )
}

export default GenderButtons