export type SearchBarProps = {
    onSearch: (
        criteria: {
            origin: string;
            destination: string;
        }
    ) => void;
}