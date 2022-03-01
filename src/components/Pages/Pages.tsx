import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PagesPropsType {
    page: number,
    onChange : any,
}

const Pages: React.FC <PagesPropsType> = ( {page, onChange} ) => {

  return (
    <Stack spacing={2}>
      <Typography>Page:{page}</Typography>
      <Pagination count={50} page={page} onChange={onChange} />
    </Stack>
  );
}

export default Pages