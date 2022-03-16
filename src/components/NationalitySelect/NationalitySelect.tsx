import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { NatSelectTypes } from './NationalitySelect.types';

const nationality: string[] = [
    "AU", "BR", "CA", "CH", 
    "DE", "DK", "ES", "FI", 
    "FR", "GB", "IE", "IR", 
    "NO", "NL", "NZ", "TR", 
    "US",
  ];
  
  const NatSelect: React.FC<NatSelectTypes> = ( {nat, onChange} ) => {
    return (
      <Box sx={{ minWidth: 100 }}>
        <FormControl sx ={{ width: 120 }} >
          <InputLabel id="nationality-select-label">Nationality</InputLabel>
          <Select
            sx ={{m:0}}
            labelId="nationality-select-label"
            id="nationality-select"
            value={nat}
            label="Nationality"
            onChange={onChange}
          >
            {nationality.map( (item, i) => <MenuItem value={item} key={`nationality+${item}+${i}`}>{item}</MenuItem>) }
          </Select>
        </FormControl>
      </Box>
    );
  }
export default NatSelect