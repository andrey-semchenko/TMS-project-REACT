import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { PagesPropsTypes } from './Pages.types'

const Pages: React.FC <PagesPropsTypes> = ( {page, onChange} ) => {

  return (
    <Stack spacing={2}>
      <Typography>Page:{page}</Typography>
      <Pagination count={50} page={page} onChange={onChange} />
    </Stack>
  );
}

export default Pages