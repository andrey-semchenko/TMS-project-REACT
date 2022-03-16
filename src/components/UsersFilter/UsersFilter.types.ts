import { InitialValuesProps } from '../../containers/UsersContainer/UsersContainer.types'

export interface UsersFilterProps {
    data: InitialValuesProps,
    changeGender: (event: React.MouseEvent<HTMLElement>, newGender: string) => void,
    changeNational: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    changeResult: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    changePage: (event: React.ChangeEvent<unknown>, newPage: number) => void,
}