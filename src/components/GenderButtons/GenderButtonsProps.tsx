export interface GenderButtonsProps {
    gender: string,
    onChange: (event: React.MouseEvent<HTMLElement>, value: string) => void,
}