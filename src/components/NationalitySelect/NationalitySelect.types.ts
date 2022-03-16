import { SelectChangeEvent } from '@mui/material/Select';

export interface NatSelectTypes {
    nat: string,
    onChange: (event: SelectChangeEvent<string>) => void,
}