import { SelectChangeEvent } from "@mui/material/Select";

export interface ResultSelectPropsType {
    results: number,
    onChange: (event: SelectChangeEvent<number>) => void,
}