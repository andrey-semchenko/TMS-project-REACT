import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { ResultSelectPropsType } from './ResultSelect.types';

const resultsData: number[] = [2, 4, 8, 12, 16, 20, 24, 28, 32];

const ResultSelect: React.FC<ResultSelectPropsType> = ( {results, onChange} ) => {

    return (
      <Box sx={{ minWidth: 100 }}>
        <FormControl  sx ={{ width: 120 }}>
          <InputLabel id="demo-simple-select-label">Result</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={results}
            label="Result"
            onChange={onChange}
          >
            {resultsData.map( (item, i) => <MenuItem value={item} key={`result+${item}+${i}`}>{item}</MenuItem>) }
  
          </Select>
        </FormControl>
      </Box>
    );
  }
  
  
  export default ResultSelect
