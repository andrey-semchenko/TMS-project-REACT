import { InitialValuesProps } from '../../containers/UsersContainer/UsersContainer.types'

export interface UsersFilterProps {
    data: InitialValuesProps,
    changeGender: (event: React.ChangeEvent<HTMLButtonElement>, newGender: string) => void,
    changeNational: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    changeResult: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    changePage: (event: React.ChangeEvent<HTMLSelectElement>, newPage: number) => void,
}