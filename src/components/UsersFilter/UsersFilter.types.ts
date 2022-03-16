import { InitialValuesProps } from '../../containers/UsersContainer/UsersContainer.types';
import { SelectChangeEvent } from '@mui/material/Select';


export interface UsersFilterProps {
    data: InitialValuesProps,
    changeGender: (event: React.MouseEvent<HTMLElement>, newGender: string) => void,
    changeNational: (event: SelectChangeEvent<string>) => void,
    changeResult: (event: SelectChangeEvent<number>) => void,
    changePage: (event: React.ChangeEvent<unknown>, newPage: number) => void,
}